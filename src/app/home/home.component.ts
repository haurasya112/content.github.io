import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tabs = ['Tab 1', 'Tab 2'];
  selected = new FormControl(0);
  selectAfterAdding = true;
  generateDisabled = [false,false];
  showCard = [false, false];

  generateClicked(index: number) {
    this.generateDisabled[index] = true;
    this.showCard[index] = true;
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');
    this.generateDisabled.push(false);
    this.showCard.push(false);

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.generateDisabled.splice(index, 1);
    this.showCard.splice(index, 1);

    if (this.selected.value !== null && this.selected.value > index) {
      this.selected.setValue(this.selected.value - 1);
    }
  }
}