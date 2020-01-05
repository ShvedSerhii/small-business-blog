import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
  name = 'Angular';
  album: any = [];
  constructor(private lightbox: Lightbox) {
    this.album.push({
      src: './../../../assets/image/1.jpg',
      caption: 'Imag1',
      thumb: './../../../assets/image/mini/1.jpg'
    });
    this.album.push({
      src: './../../../assets/image/2.jpg',
      caption: 'Imag2',
      thumb: './../../../assets/image/mini/2.jpg'
    });
    this.album.push({
      src: './../../../assets/image/3.jpg',
      caption: 'Imag3',
      thumb: './../../../assets/image/mini/3.jpg'
    });
    this.album.push({
      src: './../../../assets/image/4.jpg',
      caption: 'Imag4',
      thumb: './../../../assets/image/mini/4.jpg'
    });
    this.album.push({
      src: './../../../assets/image/5.jpg',
      caption: 'Imag5',
      thumb: './../../../assets/image/mini/5.jpg'
    });
    this.album.push({
      src: './../../../assets/image/6.jpg',
      caption: 'Imag6',
      thumb: './../../../assets/image/mini/6.jpg'
    });
    this.album.push({
      src: './../../../assets/image/7.jpg',
      caption: 'Imag7',
      thumb: './../../../assets/image/mini/7.jpg'
    });
    this.album.push({
      src: './../../../assets/image/8.jpg',
      caption: 'Imag8',
      thumb: './../../../assets/image/mini/8.jpg'
    });
    this.album.push({
      src: './../../../assets/image/9.jpg',
      caption: 'Imag9',
      thumb: './../../../assets/image/mini/9.jpg'
    });
    this.album.push({
      src: './../../../assets/image/10.jpg',
      caption: 'Imag10',
      thumb: './../../../assets/image/mini/10.jpg'
    });
    this.album.push({
      src: './../../../assets/image/11.jpg',
      caption: 'Imag11',
      thumb: './../../../assets/image/mini/11.jpg'
    });
    this.album.push({
      src: './../../../assets/image/12.jpg',
      caption: 'Imag12',
      thumb: './../../../assets/image/mini/12.jpg'
    });
    this.album.push({
      src: './../../../assets/image/13.jpg',
      caption: 'Imag13',
      thumb: './../../../assets/image/mini/13.jpg'
    });
    this.album.push({
      src: './../../../assets/image/14.jpg',
      caption: 'Imag14',
      thumb: './../../../assets/image/mini/14.jpg'
    });
    this.album.push({
      src: './../../../assets/image/15.jpg',
      caption: 'Imag15',
      thumb: './../../../assets/image/mini/15.jpg'
    });
    this.album.push({
      src: './../../../assets/image/16.jpg',
      caption: 'Imag16',
      thumb: './../../../assets/image/mini/16.jpg'
    });
    this.album.push({
      src: './../../../assets/image/17.jpg',
      caption: 'Imag17',
      thumb: './../../../assets/image/mini/17.jpg'
    });
    this.album.push({
      src: './../../../assets/image/18.jpg',
      caption: 'Imag18',
      thumb: './../../../assets/image/mini/18.jpg'
    });
    this.album.push({
      src: './../../../assets/image/19.jpg',
      caption: 'Imag19',
      thumb: './../../../assets/image/mini/19.jpg'
    });
    this.album.push({
      src: './../../../assets/image/20.jpg',
      caption: 'Imag20',
      thumb: './../../../assets/image/mini/20.jpg'
    });
    this.album.push({
      src: './../../../assets/image/21.jpg',
      caption: 'Imag21',
      thumb: './../../../assets/image/mini/21.jpg'
    });
    this.album.push({
      src: './../../../assets/image/22.jpg',
      caption: 'Imag22',
      thumb: './../../../assets/image/mini/22.jpg'
    });
    this.album.push({
      src: './../../../assets/image/23.jpg',
      caption: 'Imag23',
      thumb: './../../../assets/image/mini/23.jpg'
    });
    this.album.push({
      src: './../../../assets/image/24.jpg',
      caption: 'Imag24',
      thumb: './../../../assets/image/mini/24.jpg'
    });
    this.album.push({
      src: './../../../assets/image/25.jpg',
      caption: 'Imag25',
      thumb: './../../../assets/image/mini/25.jpg'
    });
    this.album.push({
      src: './../../../assets/image/26.jpg',
      caption: 'Imag26',
      thumb: './../../../assets/image/mini/26.jpg'
    });
    this.album.push({
      src: './../../../assets/image/27.jpg',
      caption: 'Imag27',
      thumb: './../../../assets/image/mini/27.jpg'
    });
    this.album.push({
      src: './../../../assets/image/28.jpg',
      caption: 'Imag28',
      thumb: './../../../assets/image/mini/28.jpg'
    });
    this.album.push({
      src: './../../../assets/image/29.jpg',
      caption: 'Imag29',
      thumb: './../../../assets/image/mini/29.jpg'
    });
    this.album.push({
      src: './../../../assets/image/30.jpg',
      caption: 'Imag30',
      thumb: './../../../assets/image/mini/30.jpg'
    });
    this.album.push({
      src: './../../../assets/image/31.jpg',
      caption: 'Imag31',
      thumb: './../../../assets/image/mini/31.jpg'
    });
    this.album.push({
      src: './../../../assets/image/32.jpg',
      caption: 'Imag32',
      thumb: './../../../assets/image/mini/32.jpg'
    });
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
