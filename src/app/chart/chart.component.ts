// chart-four.component.ts
import { Component, AfterViewInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { random } from 'lodash';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const unusedData = Array.from({ length: 30 }, () => random(50, 150));
    const chartFourOptions = {
      series: [
        {
          name: "Article",
          data: [
            168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212,
            270, 190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115, 290,
            380, 312,
          ],
        },
        {
          name: "Image",
          data: unusedData,
        },
      ],
      colors: ["#3C50E0", "#8FD0EF"], 
      chart: {
        fontFamily: "Satoshi, sans-serif",
        type: "bar",
        height: 400,
        toolbar: {
          show: false,
        },
        stacked: true, // Enable stacking
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          borderRadius: 2,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
          "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
          "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        fontFamily: "inter",
        markers: {
          radius: 99,
        },
      },
      yaxis: {
        title: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
    };    

    const chartFour = new ApexCharts(document.querySelector('#chartFour'), chartFourOptions);
    chartFour.render();
  }
}