console.log("F1");
let car1;
let car2;
let car3;
let car4;
let finish;
let saldo =100; //opening balance


function init() {
  car1 = document.getElementById("car1");
  car1.style.transform = "translate(" + 0 + "px, " + 20 + "px)";
  car2 = document.getElementById("car2");
  car2.style.transform = "translate(" + 0 + "px, " + 70 + "px)";
  car3 = document.getElementById("car3");
  car3.style.transform= "translate("+ 0 + "px, " + 120 + "px)";
  car4 = document.getElementById("car4");
  car4.style.transform= "translate("+ 0 + "px, " + 170 + "px)";
  car5 = document.getElementById("car5");
  car5.style.transform= "translate("+ 0 + "px, " + 220 + "px)";
  finish = document.getElementById("finish");
  finish.style.transform= "translate("+ 1000 + "px, " + 0 + "px)";
}

// Updates the initial balance on the page
document.getElementById('saldo').textContent = 'R$ ' + saldo.toFixed(2);


function startRace() {
  const raceTrackLength = 1000;//end of race, track length
  const cars = document.querySelectorAll('.car');
  const aposta = parseFloat(document.getElementById('aposta').value);

  // Checks whether the bet amount is valid
    if (isNaN(aposta) || aposta < 10) {
        alert("Por favor, insira um valor de aposta válido (mínimo R$10,00).");
        return;
    }

    saldo -= aposta; // Dreduces the balance bet
    document.getElementById('saldo').textContent = 'R$ ' + saldo.toFixed(2);

    
  // Random speed between 1 and 10
  cars.forEach(car => {
      const speed = Math.floor(Math.random() * 10) + 10;
      moveCar(car, speed, raceTrackLength);
  });
}

function moveCar(car, speed, raceTrackLength) {
  let position = 0;
  const interval = setInterval(() => {
      if (position >= raceTrackLength) {
          clearInterval(interval);
          const carroVencedor = document.getElementById('finish').previousElementSibling.id;
          if (carroEscolhido === carroVencedor) {
            saldo += aposta * 2; // Aumenta o saldo se o jogador vencer
            document.getElementById('saldo').textContent = 'R$ ' + saldo.toFixed(2);
            resultadoArea.textContent = "Parabéns! Você ganhou. Seu saldo foi atualizado.";
        } else {
            resultadoArea.textContent = "Você perdeu. Melhor sorte na próxima vez!";
        }
    } else {
        position += speed;
        car.style.left = position + 'px';
    }
}, 100); // Atualiza a posição a cada 100ms
}
