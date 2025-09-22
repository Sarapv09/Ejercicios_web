//Qué hace: Se ejecuta después de cada verificación de la vista del componente y de las vistas hijas.

//Cuándo se dispara:
//Cada vez que Angular termina un ciclo de detección de cambios en la vista.

//Usos típicos:
//Realizar acciones que dependan de cambios en la vista, como cálculos de tamaño o re-posicionamiento dinámico.

import { Component, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-after-view-checked',
  templateUrl: './after-view-checked.component.html',
  styleUrls: ['./after-view-checked.component.css']
})
export class AfterViewCheckedComponent implements AfterViewChecked {

  @ViewChild('panel') panel!: ElementRef;

  ngAfterViewChecked() {
    console.log('Vista verificada. Altura actual:', this.panel.nativeElement.offsetHeight);
  }
}
