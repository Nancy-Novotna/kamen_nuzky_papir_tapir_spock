document.addEventListener('DOMContentLoaded', () => {

  let Hraj = document.getElementById('hraj');
  let Reset = document.getElementById('reset');
  let hrac1 = null;

  const vitez1 = document.getElementById('vitez1'); // definované, aby nedošlo k chybě
  const vitez2 = document.getElementById('vitez2'); // --//--
  const obr2 = document.querySelector('#obr2 img');

  const kamen1 = document.querySelector(".kamen1");
  const papir1 = document.querySelector(".papir1");
  const nuzky1 = document.querySelector(".nuzky1");
  const tapir1 = document.querySelector(".tapir1");
  const spock1 = document.querySelector(".spock1");

  let wins = 0;
  const vyhry = document.querySelector('.vyhry');

  kamen1.onclick = () => {
    papir1.style.display = "none";
    nuzky1.style.display = "none";
    tapir1.style.display = "none";
    spock1.style.display = "none";
    hrac1 = 0;
    console.log('hrac1 =', hrac1);
    Hraj.focus();

    requestAnimationFrame(animace_hrac1);
  }

  nuzky1.onclick = () => {
    kamen1.style.display = "none";
    papir1.style.display = "none";
    tapir1.style.display = "none";
    spock1.style.display = "none";
    hrac1 = 1;
    console.log('hrac1 =', hrac1);
    Hraj.focus();

    requestAnimationFrame(animace_hrac1);
  }

  papir1.onclick = () => {
    kamen1.style.display = "none";
    nuzky1.style.display = "none";
    tapir1.style.display = "none";
    spock1.style.display = "none";
    hrac1 = 2;
    console.log('hrac1 =', hrac1);
    Hraj.focus();

    requestAnimationFrame(animace_hrac1);
  }

  spock1.onclick = () => {
    kamen1.style.display = "none";
    papir1.style.display = "none";
    nuzky1.style.display = "none";
    tapir1.style.display = "none";
    hrac1 = 3;
    console.log('hrac1 =', hrac1);
    Hraj.focus();

    requestAnimationFrame(animace_hrac1);
  }

  tapir1.onclick = () => {
    kamen1.style.display = "none";
    papir1.style.display = "none";
    nuzky1.style.display = "none";
    spock1.style.display = "none";
    hrac1 = 4;
    console.log('hrac1 =', hrac1);
    Hraj.focus();

    requestAnimationFrame(animace_hrac1);
  }

  Hraj.onclick = () => {

    if (hrac1 === null) {
      alert('Vyber volbu hráče 1 před spuštěním hry.');
      return;
    }

    do {
      Hraj.disabled = true;

      hrac2 = Math.floor(Math.random() * 5);

      obr2.src = hrac2 + ".png";

      if (hrac1 === hrac2) {

        remiza = true;
        console.log("Remíza.\nSpouštím další hru.");

      } else if (
        (hrac1 === 0 && (hrac2 === 1 || hrac2 === 4)) ||
        (hrac1 === 1 && (hrac2 === 2 || hrac2 === 4)) ||
        (hrac1 === 2 && (hrac2 === 0 || hrac2 === 3)) ||
        (hrac1 === 4 && (hrac2 === 2 || hrac2 === 3)) ||
        (hrac1 === 3 && (hrac2 === 0 || hrac2 === 1))

      ) {
        vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
        vitez1.style.color = "red";
        remiza = false;
        Reset.focus();

      } else {
        vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
        vitez2.style.color = "red";
        remiza = false;
        Reset.focus();
      }

      if (vitez1.innerHTML === "Hráč 1<br/>vyhrál.") {
        wins++;
        vyhry.textContent = `Počet výher: ${wins}`;
      };

    } while (remiza);
  }

  Reset.onclick = () => {
    location.reload();
  }

});


let pozice = 0;

function animace_hrac1() {
  pozice += 10;
  document.querySelector('#obr1').style.transform = `translateY(${pozice}px)`;
  document.querySelector('#obr2').style.transform = `translateY(${pozice}px)`;

  if (pozice < 220) {
    requestAnimationFrame(animace_hrac1);
  }
}

