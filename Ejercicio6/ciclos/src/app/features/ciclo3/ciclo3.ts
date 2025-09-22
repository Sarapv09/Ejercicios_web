//Qué hace: Permite detectar cambios de forma manual durante cada ciclo de detección de cambios de Angular.

//Cuándo se dispara:
//En cada ciclo de detección, incluso si no cambian los @Input.

//Usos típicos:
//Optimizar o detectar cambios en estructuras complejas (arrays, objetos profundos).
//Comparar manualmente valores para actuar en consecuencia.

import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements DoCheck {

  items: string[] = [];
  private prevLength = 0;

  ngDoCheck() {
    if (this.items.length !== this.prevLength) {
      console.log('La lista cambió de tamaño');
      this.prevLength = this.items.length;
    }
  }
}
