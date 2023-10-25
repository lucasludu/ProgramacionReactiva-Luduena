import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TimeService } from 'src/app/core/service/time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  
  horaActual$: Observable<string>;

  // Para mostrar valor e implementar ondestroy
  horaActualNoAsync: string | null = null; 

  suscripcionRef: Subscription | null;


  constructor(private timeService: TimeService) {
    this.horaActual$ = this.timeService.timer;

    this.suscripcionRef = this.timeService.timer.subscribe(v => {
      this.horaActualNoAsync = v;
    });
  }

  ngOnDestroy(): void {
    this.suscripcionRef?.unsubscribe();
  }


}
