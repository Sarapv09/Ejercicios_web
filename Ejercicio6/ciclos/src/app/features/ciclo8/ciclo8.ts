//Qué hace: Se ejecuta justo antes de que el componente se destruya.

//Usos típicos:
//Cancelar suscripciones a Observables o EventEmitters.
//Limpiar timers, listeners, o recursos para evitar fugas de memoria.

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../data'; // ajusta la ruta o quítalo si no usas un servicio

@Component({
  selector: 'app-on-destroy',
  templateUrl: './on-destroy.component.html',
  styleUrls: ['./on-destroy.component.css']
})
export class OnDestroyComponent implements OnDestroy {

  private sub?: Subscription;

  // Ejemplo: suscribirse a un servicio
  constructor(private data: DataService) {
    this.sub = this.data.data$.subscribe();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    console.log('Componente destruido y recursos liberados');
  }
}
