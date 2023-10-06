import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SidebarService } from '../sidebar/sidebar.service';
import { PicturesService } from '../services/pictures.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  imageList = [
    {
      image: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
      isSelected: false
    },
    {
      image: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
      isSelected: false
    },
    {
      image: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
      isSelected: false
    },
    {
      image: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
      isSelected: false
    },
    {
      image: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
      isSelected: false
    }
    // Add more objects for the other images here
  ];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private sidebarService: SidebarService,
    private sharedService: PicturesService
  ) {}

  ngOnInit() {
    this.sidebarService.toggleSidebar();
  }

  toggleImageSelection(image: any) {
    image.isSelected = !image.isSelected;
  }  

  closeModal() {
    this.sidebarService.toggleSidebar();
    this.dialogRef.close();
  }

  saveImages() {
    const selectedImageUrls = this.imageList
      .filter((item) => item.isSelected)
      .map((item) => item.image);
    selectedImageUrls.forEach((imageUrl) => {
        this.sharedService.addSelectedImage(imageUrl);
      });
    console.log('Selected Images:', selectedImageUrls);
    this.dialogRef.close(selectedImageUrls);
  }
}