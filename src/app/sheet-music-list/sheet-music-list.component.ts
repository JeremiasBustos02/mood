import { Component } from '@angular/core';
import { SheetMusic } from './SheetMusic';

@Component({
  selector: 'app-sheet-music-list',
  standalone: false,
  templateUrl: './sheet-music-list.component.html',
  styleUrl: './sheet-music-list.component.scss'
})
export class SheetMusicListComponent {
  sheets: SheetMusic[] = [{
    name: 'Nocturne No. 20',
    instrument: 'Piano',
    autor: 'Jeremias Bustos',
    price: 5,
    img: 'assets/img/partitura.jpg',
    clearance: false,
  },
  {
    name: 'Nocturne No. 20',
    instrument: 'Piano',
    autor: 'Jeremias Bustos',
    price: 5,
    img: 'assets/img/partitura.jpg',
    clearance: true,
  },
  {
    name: 'Nocturne No. 20',
    instrument: 'Piano',
    autor: 'Jeremias Bustos',
    price: 5,
    img: 'assets/img/partitura.jpg',
    clearance: false,
  }];
}
