//Qué hace: Se ejecuta cada vez que cambian los valores de las propiedades decoradas con @Input().

//Cuándo se dispara:
//Justo después de que Angular establece o actualiza las propiedades de entrada, incluso antes de ngOnInit.
//Se vuelve a disparar cada vez que el padre envía un nuevo valor.

//Usos típicos:
//Validar y transformar datos entrantes.
//Sincronizar una variable interna cuando el padre cambia el valor.

import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo1',            
  templateUrl: './ciclo1.component.html',
  styleUrls: ['./ciclo1.component.css']
})
export class Ciclo1Component implements OnChanges {

  @Input() contador!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['contador']) {
      console.log('Contador previo:', changes['contador'].previousValue);
      console.log('Contador actual:', changes['contador'].currentValue);
    }
  }
}
