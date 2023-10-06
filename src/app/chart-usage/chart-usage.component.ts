
import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-chart-usage',
  templateUrl: './chart-usage.component.html',
  styleUrls: ['./chart-usage.component.css']
})
export class ChartUsageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.chart03();
  }

  chart03() {
    const chartThreeOptions = {
      series: [65, 34],
      chart: {
        type: "donut",
        width: 380,
      },
      colors: ["#3C50E0", "#6577F3"],
      labels: ["Desktop", "Tablet"],
      legend: {
        show: false,
        position: "bottom",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            background: "transparent",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };

    const chartSelector = document.querySelectorAll("#chartThree");

    if (chartSelector.length) {
      const chartThree = new ApexCharts(
        document.querySelector("#chartThree"),
        chartThreeOptions
      );
      chartThree.render();
    }
  }
}
