//Qué hace: Método de inicialización que se llama una sola vez después del primer ngOnChanges.

//Cuándo se dispara:
//Una vez que Angular ha configurado las entradas iniciales.
//Es el lugar perfecto para la lógica de arranque.

//Usos típicos:
//Cargar datos desde un servicio o API.
//Configurar suscripciones o valores iniciales.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent implements OnInit {

  ngOnInit() {
    console.log('OnInitComponent inicializado');
  }
}