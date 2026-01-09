document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('button');

  button.onclick = () => {
    do {
      vitez1.innerHTML = "Hráč 1";
      vitez2.innerHTML = "Hráč 2";

      vitez1.style.color = "black";
      vitez2.style.color = "black";

      hrac1 = Math.floor(Math.random() * 5);
      hrac2 = Math.floor(Math.random() * 5);

      obr1.src = hrac1 + ".png";
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
      } else {
        vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
        vitez2.style.color = "red";
        remiza = false;
      }
    } while (remiza);
  }
});

// TO-DO
// - hráč si může vybírat s čím bude hrát

function buttonKAMEN() {
  let kamen = document.querySelector(".kamen1");

  kamen.onclick = () => {
    console.log("Kámen");
  }
}