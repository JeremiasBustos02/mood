import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Instrument } from '../../components/instruments-components/instrument-list/Instrument';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{
  
  constructor() {}
  
  @Input() quantity!: number; 
  
  @Input() max!: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: KeyboardEvent): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}
