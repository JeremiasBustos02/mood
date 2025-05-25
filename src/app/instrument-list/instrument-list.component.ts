import { Component } from '@angular/core';
import { Instrument } from './Instrument';

@Component({
  selector: 'app-instrument-list',
  standalone: false,
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.scss'
})
export class InstrumentListComponent {
instruments: Instrument[] = [{
    name: 'Piano',
    brand: 'Casio',
    price: 5,
    img: 'assets/img/partitura.jpg',
    stock: 15,
    clearance: false,
    quantity: 0,
  },
  {
    name: 'Piano',
    brand: 'Casio',
    price: 5,
    img: 'assets/img/partitura.jpg',
    stock: 15,
    clearance: true,
    quantity: 0,
  },
  {
    name: 'Piano',
    brand: 'Casio',
    price: 5,
    img: 'assets/img/partitura.jpg',
    stock: 15,
    clearance: false,
    quantity: 0,
  }];

  upQuantity(instrument: Instrument): void {
    if (instrument.quantity < instrument.stock) {
      instrument.quantity++;
    }  
  }

  downQuantity(instrument: Instrument): void {
    if (instrument.quantity > 0) {
      instrument.quantity--;
    }  
  }
}
