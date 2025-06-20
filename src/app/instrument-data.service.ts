import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Instrument } from './instrument-list/Instrument';

const URL = 'https://685479426a6ef0ed662f2f06.mockapi.io/mood/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(URL)
              .pipe(
                tap( (instruments: Instrument[]) => instruments.forEach(instrument => instrument.quantity = 0))
              );
  }

  public updateInstrumentStock(id: string, newStock: number): Observable<any> {
    return this.http.put(`${URL}/${id}`, { stock: newStock });
  }
}