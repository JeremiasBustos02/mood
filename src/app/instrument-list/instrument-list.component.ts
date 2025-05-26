import { Component } from '@angular/core';
import { Instrument } from './Instrument';
import { InstrumentCartService } from '../instrument-cart.service';

@Component({
  selector: 'app-instrument-list',
  standalone: false,
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.scss'
})
export class InstrumentListComponent {

  constructor(private cart: InstrumentCartService){}

  addToCart(instrument: Instrument): void {
    this.cart.addToCart(instrument);
    instrument.stock -= instrument.quantity;
    instrument.quantity = 0;
  }

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
    name: 'Piano 2',
    brand: 'Casio',
    price: 5,
    img: 'assets/img/partitura.jpg',
    stock: 15,
    clearance: true,
    quantity: 0,
  },
  {
    name: 'Piano 3',
    brand: 'Casio',
    price: 5,
    img: 'assets/img/partitura.jpg',
    stock: 0,
    clearance: false,
    quantity: 0,
  }];

  
}
