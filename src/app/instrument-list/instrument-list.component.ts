import { Component, OnInit } from '@angular/core';
import { Instrument } from './Instrument';
import { InstrumentCartService } from '../instrument-cart.service';
import { InstrumentDataService } from '../instrument-data.service';

@Component({
  selector: 'app-instrument-list',
  standalone: false,
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.scss'
})
export class InstrumentListComponent implements OnInit {

  instruments: Instrument[] = [];

  constructor(
      private cart: InstrumentCartService,
      private instrumentDataService: InstrumentDataService
  ) {}

  ngOnInit(): void {
    this.instrumentDataService.getAll().subscribe(instruments => this.instruments = instruments);
  }

  addToCart(instrument: Instrument): void {
    this.cart.addToCart(instrument);
    instrument.stock -= instrument.quantity;
    instrument.quantity = 0;
  }

  restoreStock(removedInstrument: Instrument) {
  const product = this.instruments.find(i => i.name === removedInstrument.name);
  if (product) {
    product.stock += removedInstrument.quantity;
  }
}

  
}
