import { Component, EventEmitter, Output } from '@angular/core';
import { InstrumentCartService } from '../instrument-cart.service';
import { Instrument } from '../instrument-list/Instrument';
import { Observable, take } from 'rxjs';
import { InstrumentDataService } from '../instrument-data.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Instrument[]>;
  @Output() itemRemoved = new EventEmitter<Instrument>();

  constructor(
    private cart: InstrumentCartService,
    private instrumentDataService: InstrumentDataService){
      this.cartList$ = cart.cartList.asObservable();
  }

  removeToCart (instrument: Instrument) {
    this.cart.removeToCart(instrument);
    this.itemRemoved.emit(instrument);
  }

  buy() {
  this.cartList$.pipe(take(1)).subscribe(cartItems => {
    cartItems.forEach(instrument => {
      const newStock = instrument.stock - instrument.quantity;
      this.instrumentDataService.updateInstrumentStock(instrument.id, newStock).subscribe({
        next: () => console.log(`Stock de ${instrument.name} actualizado a ${newStock}`),
        error: err => console.error(`Error actualizando ${instrument.name}:`, err)
      });
    });

    this.cart.clearCart();
  });
  }
}
