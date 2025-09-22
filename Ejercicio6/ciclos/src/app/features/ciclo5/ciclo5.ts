//Qué hace: Se ejecuta después de cada verificación del contenido proyectado.

//Usos típicos:
//Ajustar propiedades derivadas del contenido cuando este cambia dinámicamente.

import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-after-content-checked',
  templateUrl: './after-content-checked.component.html',
  styleUrls: ['./after-content-checked.component.css']
})
export class AfterContentCheckedComponent implements AfterContentChecked {

  ngAfterContentChecked() {
    console.log('Contenido proyectado revisado');
  }
}
