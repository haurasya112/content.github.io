import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { SidebarService } from './sidebar.service';
import { PicturesService } from '../services/pictures.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isAuthenticated = false;
  selectedImagesUrls:string[] = [];

  constructor(public sidebarService: SidebarService, public dialog: MatDialog, private authService: AuthService, private router: Router, private sharedService: PicturesService) {
    this.selectedImagesUrls = this.sharedService.getSelectedImages();
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(['login']);
  }

  status = false;
  tabs = [
    { title: 'Tab 1', userInput: '' },
  ];
  selected = new FormControl(0);
  selectAfterAdding = true;
  generateDisabled = [false, false];
  showCard = [false, false];
  modalOpen = false;
  showScrollButton = false;
  isProfileDropdownOpen = false;

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 350;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  generateClicked(index: number) {
    if (!this.isValidInput(index)) {
      alert('Please enter a valid input!');
      return;
    }

    this.generateDisabled[index] = true;
    this.showCard[index] = true;
    this.tabs[index].title = this.tabs[index].userInput;
    // console.log(`Generated content for Tab ${this.tabs}:`);
  }

  isValidInput(index: number): boolean {
    if (
      this.tabs[index].userInput === '' ||
      this.tabs[index].userInput.trim() === ''
    ) {
      return false;
    }

    return true;
  }

  resetInputs(index: number) {
    this.tabs[index].userInput = '';
    this.generateDisabled[index] = false;
    this.showCard[index] = false;
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push({ title: 'New', userInput: '' });
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
  addToggle() {
    this.status = !this.status;
  }
}
