import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tabs = [
    { title: 'Tab 1', userInput: '' },
    { title: 'Tab 2', userInput: '' }
  ];
  selected = new FormControl(0);
  selectAfterAdding = true;
  generateDisabled = [false,false];
  showCard = [false, false];
  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  generateClicked(index: number) {

    if (!this.isValidInput(index)) {
      alert('Please enter a valid input!');
      return;
    }

    this.generateDisabled[index] = true;
    this.showCard[index] = true;
    this.tabs[index].title = this.tabs[index].userInput
    // console.log(`Generated content for Tab ${this.tabs}:`);
  }

  isValidInput(index:number): boolean {
    if (this.tabs[index].userInput === '' || this.tabs[index].userInput.trim() === '') {
      return false;
    }

    return true;
  }

  resetInputs(index:number) {
    this.tabs[index].userInput = '';
    this.generateDisabled[index] = false;
    this.showCard[index]=false;
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push({title: 'New', userInput: ''});
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