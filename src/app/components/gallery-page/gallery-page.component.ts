import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { GalleryModel } from '../../models/GalleryModel';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
  album: any;
  constructor(private lightbox: Lightbox) {
    this.album = GalleryModel;
  }
  open(index: number): void {
    this.lightbox.open(this.album, index);
  }
  close(): void {
    this.lightbox.close();
  }
}
