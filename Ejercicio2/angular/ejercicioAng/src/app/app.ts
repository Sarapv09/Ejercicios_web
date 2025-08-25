import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  vidas1 = 10;
  vidas2 = 10;
  mensaje = '';
  turno = 1;

  atacar(jugador: number) {
    if (jugador !== this.turno) return;

    const dano = Math.floor(Math.random() * 3) + 1;
    if (jugador === 1) {
      this.vidas2 = Math.max(0, this.vidas2 - dano);
      this.mensaje = `Jugador 1 ataca y quita ${dano} vidas a Jugador 2`;
      this.turno = 2;
    } else {
      this.vidas1 = Math.max(0, this.vidas1 - dano);
      this.mensaje = `Jugador 2 ataca y quita ${dano} vidas a Jugador 1`;
      this.turno = 1;
    }
  }

  reiniciar() {
    this.vidas1 = 10;
    this.vidas2 = 10;
    this.mensaje = 'Juego reiniciado';
    this.turno = 1;
  }
}

