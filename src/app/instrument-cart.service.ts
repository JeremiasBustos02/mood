import { Injectable } from '@angular/core';
import { Instrument } from './instrument-list/Instrument';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentCartService {

  private _cartList: Instrument[] = [];
  cartList: BehaviorSubject<Instrument[]> = new BehaviorSubject<Instrument[]>([]);

  constructor() { }

  addToCart(instrument: Instrument) {
    let item = this._cartList.find((v1) => v1.name == instrument.name);
    if (!item) {
      this._cartList.push({... instrument});
    } else {
      item.quantity += instrument.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
