import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  showScrollButton = false;

  openModal() {
    this.modalOpen = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 350; 
  }

  scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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