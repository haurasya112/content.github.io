import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isOpen: boolean = true;
  originalState: boolean = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}