// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  selectedImagesUrls: string[] = [];

  addSelectedImage(imageUrl: string) {
    this.selectedImagesUrls.push(imageUrl);
  }

  getSelectedImages() {
    return this.selectedImagesUrls;
  }
}
