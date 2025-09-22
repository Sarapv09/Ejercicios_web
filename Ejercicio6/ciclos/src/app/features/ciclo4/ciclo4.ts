//Qué hace: Se ejecuta una vez después de que Angular proyecta el contenido que viene del padre mediante <ng-content>.

//Usos típicos:
//Acceder o manipular ese contenido proyectado.

import { Component, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-after-content-init',
  templateUrl: './after-content-init.component.html',
  styleUrls: ['./after-content-init.component.css']
})
export class AfterContentInitComponent implements AfterContentInit {

  @ContentChild('titulo') titulo!: ElementRef;

  ngAfterContentInit() {
    console.log('Contenido proyectado listo:', this.titulo.nativeElement.textContent);
  }
}