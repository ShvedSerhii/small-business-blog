import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {

name = 'Angular';
album:any = [];
constructor(private _lightbox: Lightbox) {

this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag1','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag2','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag3','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag4','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag5','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag6','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag7','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag8','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag9','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag10','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag11','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag12','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag13','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag14','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag15','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag15','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag17','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag18','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag19','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag20','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag21','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag22','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag23','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag24','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag25','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag26','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag27','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag28','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag29','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag30','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag31','thumb':'https://via.placeholder.com/150'});
this.album.push({'src':'https://via.placeholder.com/500','caption':'Imag32','thumb':'https://via.placeholder.com/150'});
}

open(index: number): void {

this._lightbox.open(this.album, index);
}

close(): void {

this._lightbox.close();
}
  
}
