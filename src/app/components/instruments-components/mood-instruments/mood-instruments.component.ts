import { Component, ViewChild } from '@angular/core';
import { InstrumentListComponent } from '../instrument-list/instrument-list.component';
import { Instrument } from '../instrument-list/Instrument';

@Component({
  selector: 'app-mood-instruments',
  standalone: false,
  templateUrl: './mood-instruments.component.html',
  styleUrl: './mood-instruments.component.scss'
})
export class MoodInstrumentsComponent {
  @ViewChild('instrumentList') instrumentListComponent!: InstrumentListComponent;

  onItemRemoved(removedInstrument: Instrument) {
    this.instrumentListComponent.restoreStock(removedInstrument);
  }
}
