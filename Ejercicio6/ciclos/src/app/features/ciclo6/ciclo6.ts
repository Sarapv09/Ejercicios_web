//Qué hace: Se ejecuta una sola vez cuando la vista del componente y las vistas hijas están listas.

//Usos típicos:
//Acceder al DOM del propio componente, a elementos con @ViewChild o @ViewChildren.
//Inicializar librerías que dependen de que el DOM ya esté montado.

import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-after-view-init',
  templateUrl: './after-view-init.component.html',
  styleUrls: ['./after-view-init.component.css']
})
export class AfterViewInitComponent implements AfterViewInit {

  @ViewChild('panel') panel!: ElementRef;

  ngAfterViewInit() {
    console.log('Vista lista. Altura del panel:', this.panel.nativeElement.offsetHeight);
  }
}
