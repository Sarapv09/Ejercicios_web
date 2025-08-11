document.addEventListener('DOMContentLoaded', function () {
  let vidas1 = 10;
  let vidas2 = 10;

  const p1Lives = document.getElementById('player1_lives');
  const p2Lives = document.getElementById('player2_lives');
  const btnP1 = document.getElementById('player1_attack');
  const btnP2 = document.getElementById('player2_attack');
  const resetBtn = document.getElementById('reset_game');
  const info = document.querySelector('.game_info');

  function actualizar() {
    p1Lives.textContent = 'Vidas: ' + vidas1;
    p2Lives.textContent = 'Vidas: ' + vidas2;
  }

  function desactivarBotones(valor) {
    btnP1.disabled = valor;
    btnP2.disabled = valor;
  }

  function verificarGanador() {
    if (vidas1 <= 0) {
      info.textContent = '¡Jugador 2 gana!';
      desactivarBotones(true);
      return true;
    }
    if (vidas2 <= 0) {
      info.textContent = '¡Jugador 1 gana!';
      desactivarBotones(true);
      return true;
    }
    return false;
  }

  function atacar(jugador) {
    if (verificarGanador()) return;

    const daño = Math.floor(Math.random() * 3) + 1; // 1 a 3
    if (jugador === 'p1') {
      vidas2 = Math.max(0, vidas2 - daño);
      info.textContent = `Jugador 1 ataca y hace ${daño} de daño`;
      btnP1.disabled = true;
      btnP2.disabled = false;
    } else {
      vidas1 = Math.max(0, vidas1 - daño);
      info.textContent = `Jugador 2 ataca y hace ${daño} de daño`;
      btnP2.disabled = true;
      btnP1.disabled = false;
    }

    actualizar();
    verificarGanador();
  }

  btnP1.addEventListener('click', () => atacar('p1'));
  btnP2.addEventListener('click', () => atacar('p2'));

  resetBtn.addEventListener('click', function () {
    vidas1 = 10;
    vidas2 = 10;
    info.textContent = '';
    actualizar();
    btnP1.disabled = false;
    btnP2.disabled = false;
  });

  actualizar();
});

