import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  status: boolean = false;
  isOpen: boolean = true;
  originalState: boolean = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  addToggle() {
    this.status = !this.status;
  }
}