import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Time } from '../model/time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private _timer$ = new BehaviorSubject<Time>(this.tiempoActual);

  constructor() { 
    setInterval(() => {
      this._timer$.next(this.tiempoActual);
    }, 1000);
  }


  get timer(): Observable<string> {
    return this._timer$.asObservable().pipe(map((time) => {
      return `${time.horas}:${time.minutos}:${time.segundos}`
    }));
  }


  get tiempoActual(): Time {
    const now = new Date();

    return {
      horas: now.getHours(),
      minutos: now.getMinutes(),
      segundos: now.getSeconds()
    };
  }
}
