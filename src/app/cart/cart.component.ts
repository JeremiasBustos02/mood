import { Component } from '@angular/core';
import { InstrumentCartService } from '../instrument-cart.service';
import { Instrument } from '../instrument-list/Instrument';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Instrument[]>;

  constructor(private cart: InstrumentCartService){
    this.cartList$ = cart.cartList.asObservable();
  }



}
