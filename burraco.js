var carte;
var numerino;
var lunghezza;
var altezza;


// Punti Carte
var punti_tre_sette;
var punti_assi;
var punti_otto_re;
var punti_pinelle;
var punti_jolly;

var meno_assi;
var meno_tre_sette;
var meno_otto_re;
var meno_pinella;
var meno_jollys;
var valore_carte;

var meno_assi_punti;
var meno_tre_sette_punti;
var meno_otto_re_punti;
var meno_pinella_punti;
var meno_jollys_punti;



// Carte
var tre_sette;
var assi;
var otto_re;
var pinelle;
var jollys;
//Figura nella carta

// Punti Vari
var burrachi_puliti;
var burrachi_sporchi;
var chiusura;
var totale;
var pozzetto = 0;

// 15 punti
var asso = "1";
// 5 punti
var tre = "3";
var quattro = "4";
var cinque = "5"
var sei = "6"
var sette = "7"
// 10 punti
var otto = "8"
var nove = "9"
var dieci = "10"
var jack = "J"
var donna = "Q"
var re = "K"
// 20 punti
var pinella = "2"
// 30 punti
var jolly = "JY"

function setup() {
  createCanvas(600,400);
  carte = 0;
  textFont("Arial",[45]);
  numerino = 1;
  // Somme per totale
  tre_sette = 0;
  assi = 0;
  otto_re = 0;
  pinelle = 0;
  jollys = 0;
  //
  burrachi_puliti = 0;
  burrachi_sporchi = 0;
  chiusura = 0;
  totale = 0;

  punti_tre_sette = 0;
  punti_assi = 0;
  punti_jolly = 0;
  punti_pinelle = 0;
  punti_otto_re = 0;

  meno_assi = 0;
  meno_tre_sette = 0;
  meno_otto_re = 0;
  meno_pinella = 0;
  meno_jollys = 0;

  valore_carte = 0;

  meno_assi_punti = 0;
  meno_tre_sette_punti = 0;
  meno_otto_re_punti = 0;
  meno_pinella_punti = 0;
  meno_jollys_punti = 0;

  lunghezza = width;
  altezza = height;
}

function draw() {
  // colore carta = 192,192,192
  background(0,102,51);
  // Carta:
  stroke(192,192,192);
  fill(192,192,192);
  rect(80,60,185,280,10);
  // Bottone:
  fill(96,96,96);
  stroke(64,64,64);
  rect(390,320,180,50,5);
  fill(218,218,218);
  stroke(218,218,218);
  textFont("Arial",[32]);
  text("AVANTI =>",403,357);
  // Testo:
  //
  //
  //
  //
  if (numerino == 1) {
    fill(0)
    stroke(0);
    text(asso,87,100);
    text(asso,240,100);
    text(asso,87,334);
    text(asso,240,334);
    text(asso,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 2) {
    fill(0)
    stroke(0);
    text(tre,87,100);
    text(tre,235,100);
    text(tre,87,334);
    text(tre,235,334);
    text(tre,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 3) {
    fill(0)
    stroke(0);
    text(quattro,87,100);
    text(quattro,235,100);
    text(quattro,87,334);
    text(quattro,235,334);
    text(quattro,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 4) {
    fill(0)
    stroke(0);
    text(cinque,87,100);
    text(cinque,235,100);
    text(cinque,87,334);
    text(cinque,235,334);
    text(cinque,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 5) {
    fill(0)
    stroke(0);
    text(sei,87,100);
    text(sei,235,100);
    text(sei,87,334);
    text(sei,235,334);
    text(sei,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 6) {
    fill(0)
    stroke(0);
    text(sette,87,100);
    text(sette,235,100);
    text(sette,87,334);
    text(sette,235,334);
    text(sette,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 7) {
    fill(0)
    stroke(0);
    text(otto,87,100);
    text(otto,235,100);
    text(otto,87,334);
    text(otto,235,334);
    text(otto,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 8) {
    fill(0)
    stroke(0);
    text(nove,87,100);
    text(nove,235,100);
    text(nove,87,334);
    text(nove,235,334);
    text(nove,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 9) {
    fill(0)
    stroke(0);
    text(dieci,87,100);
    text(dieci,220,100);
    text(dieci,87,334);
    text(dieci,220,334);
    text(dieci,155,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 10) {
    fill(0)
    stroke(0);
    text(jack,87,100);
    text(jack,235,100);
    text(jack,87,334);
    text(jack,235,334);
    text(jack,165,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 11) {
    fill(0)
    stroke(0);
    text(donna,87,100);
    text(donna,235,100);
    text(donna,87,334);
    text(donna,235,334);
    text(donna,165,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 12) {
    fill(0)
    stroke(0);
    text(re,87,100);
    text(re,235,100);
    text(re,87,334);
    text(re,235,334);
    text(re,165,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 13) {
    fill(0)
    stroke(0);
    text(pinella,87,100);
    text(pinella,240,100);
    text(pinella,87,334);
    text(pinella,240,334);
    text(pinella,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 14) {
    fill(0)
    stroke(0);
    text(jolly,87,100);
    text(jolly,225,100);
    text(jolly,87,334);
    text(jolly,225,334);
    text(jolly,160,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 15) {

    // Pezza Verde:
    fill(0,102,51)
    stroke(0,102,51)
    rect(75,60,200,295,10);

    // Box burraco:
    fill(200,200,200);
    stroke(200,200,200);
    rect(75,80,435,200,10);

    // Scritta:
    fill(0);
    stroke(0);
    textFont("Arial",[64]);
    text("Burraco Pulito.",85,200);

  } else if (numerino == 16) {

    // Pezza Verde:
    fill(0,102,51)
    stroke(0,102,51)
    rect(75,60,200,295,10);

    // Box burraco:
    fill(200,200,200);
    stroke(200,200,200);
    rect(75,80,435,200,10);

    // Scritta:
    fill(0);
    stroke(0);
    textFont("Arial",[58]);
    text("Burraco Sporco.",85,200);

  } else if (numerino == 17) {

    // Pezza Verde:
    fill(0,102,51)
    stroke(0,102,51)
    rect(75,60,200,295,10);

    // Box burraco:
    fill(200,200,200);
    stroke(200,200,200);
    rect(75,80,435,200,10);

    // Scritta:
    fill(0);
    stroke(0);
    textFont("Arial",[75]);
    text("Pozzetto?",120,200);

  } else if (numerino == 18) {

    // Pezza Verde:
    fill(0,102,51)
    stroke(0,102,51)
    rect(75,60,200,295,10);

    // Box burraco:
    fill(200,200,200);
    stroke(200,200,200);
    rect(75,80,435,200,10);

    // Scritta:
    fill(0);
    stroke(0);
    textFont("Arial",[75]);
    text("Chiusura?",120,200);

  } else if (numerino == 19) {
    fill(0);
    stroke(0);
    text(asso,87,100);
    text(asso,240,100);
    text(asso,87,334);
    text(asso,240,334);
    text(asso,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in mano:",10,35);
  } else if (numerino == 20) {
    fill(0);
    stroke(0);
    text(tre,87,100);
    text(tre,235,100);
    text(tre,87,334);
    text(tre,235,334);
    text(tre,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 21) {
    fill(0);
    stroke(0);
    text(quattro,87,100);
    text(quattro,235,100);
    text(quattro,87,334);
    text(quattro,235,334);
    text(quattro,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 22) {
    fill(0);
    stroke(0);
    text(cinque,87,100);
    text(cinque,235,100);
    text(cinque,87,334);
    text(cinque,235,334);
    text(cinque,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 23) {
    fill(0);
    stroke(0);
    text(sei,87,100);
    text(sei,235,100);
    text(sei,87,334);
    text(sei,235,334);
    text(sei,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 24) {
    fill(0);
    stroke(0);
    text(sette,87,100);
    text(sette,235,100);
    text(sette,87,334);
    text(sette,235,334);
    text(sette,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 25) {
    fill(0);
    stroke(0);
    text(otto,87,100);
    text(otto,235,100);
    text(otto,87,334);
    text(otto,235,334);
    text(otto,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 26) {
    fill(0);
    stroke(0);
    text(nove,87,100);
    text(nove,235,100);
    text(nove,87,334);
    text(nove,235,334);
    text(nove,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 27) {
    fill(0);
    stroke(0);
    text(dieci,87,100);
    text(dieci,220,100);
    text(dieci,87,334);
    text(dieci,220,334);
    text(dieci,155,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 28) {
    fill(0);
    stroke(0);
    text(jack,87,100);
    text(jack,235,100);
    text(jack,87,334);
    text(jack,235,334);
    text(jack,165,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 29) {
    fill(0);
    stroke(0);
    text(donna,87,100);
    text(donna,235,100);
    text(donna,87,334);
    text(donna,235,334);
    text(donna,165,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 30) {
    fill(0);
    stroke(0);
    text(re,87,100);
    text(re,235,100);
    text(re,87,334);
    text(re,235,334);
    text(re,165,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 31) {
    fill(0);
    stroke(0);
    text(pinella,87,100);
    text(pinella,240,100);
    text(pinella,87,334);
    text(pinella,240,334);
    text(pinella,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 32) {
    fill(0);
    stroke(0);
    text(jolly,87,100);
    text(jolly,225,100);
    text(jolly,87,334);
    text(jolly,225,334);
    text(jolly,170,215);
    fill(0);
    stroke(0);
    textFont("Arial",[28]);
    text("Clicca quante volte hai questa carta in tavola:",10,35);
  } else if (numerino == 50) {
    punti_assi = assi * 15;
    punti_tre_sette = tre_sette * 5;
    punti_otto_re = otto_re * 10;
    punti_pinelle = pinelle * 20;
    punti_jolly = jollys * 30;
    punti_burraco_sporco = burrachi_sporchi * 100;
    punti_burraco_pulito = burrachi_puliti * 200;
    punti_totali = punti_assi + punti_tre_sette + punti_otto_re + punti_pinelle + punti_jolly + punti_burraco_pulito + punti_burraco_sporco + punti_chiusura;
    //console.log(punti_totali);
    fill(0,102,51);
    stroke(0,102,51);
    rect(75,60,200,295,10);
    fill(0);
    stroke(0);
    textFont("Arial",[64]);
    text("I tuoi punti sono:",10,60);
    textFont("Arial",[128])
    text(punti_totali,170,170);

  } else if (numerino == 33) {
    punti_assi = assi * 15;
    punti_tre_sette = tre_sette * 5;
    punti_otto_re = otto_re * 10;
    punti_pinelle = pinelle * 20;
    punti_jolly = jollys * 30;
    punti_burraco_sporco = burrachi_sporchi * 100;
    punti_burraco_pulito = burrachi_puliti * 200;
    // Giocati (validi)
    punti_totali = punti_assi + punti_tre_sette + punti_otto_re + punti_pinelle + punti_jolly + punti_burraco_pulito + punti_burraco_sporco;

    meno_assi_punti = meno_assi * 15;
    meno_tre_sette_punti = meno_tre_sette * 5;
    meno_otto_re_punti = meno_otto_re * 10;
    meno_pinella_punti = meno_pinella * 20;
    meno_jollys_punti = meno_jollys * 30;
    
    //  In mano (da pagare)
    valore_carte = meno_assi_punti + meno_pinella_punti + meno_jollys_punti + meno_tre_sette_punti + meno_otto_re_punti;
    if (pozzetto == 0) {
    
      punti_totalissimi = punti_totali - valore_carte - 100 - 100;
      //console.log("Pozzetto non preso!");
    
    } else if (pozzetto == 1) {
      punti_totalissimi = punti_totali - valore_carte - 100;
    }
    fill(0,102,51);
    stroke(0,102,51);
    rect(75,60,200,295,10);
    fill(0);
    stroke(0);
    textFont("Arial",[64]);
    text("I tuoi punti sono:",10,60);
    textFont("Arial",[128])
    text(punti_totalissimi,170,170);

    //console.log(punti_totalissimi);
  


  } else if (numerino == 34) {
    fill(0,102,51);
    stroke(0,102,51);
    rect(75,60,200,295,10);
    fill(0);
    stroke(0);
    textFont("Arial",[128]);
    text("FINE!",(lunghezza / 2) - 170,(altezza / 2) + 50);
    textFont("Arial",[128])
    
  }


}

function mousePressed() {
    // CARTA

if (mouseX >= 80 && mouseX <= 265 && mouseY >= 60 && mouseY <= 340) {

    if (numerino == 1) {

      assi += 1;
      //console.log(assi);
      carte += 1;

    } else if (numerino == 2 || numerino == 3 || numerino == 4 || numerino == 5 || numerino == 6) {

      tre_sette += 1;
      carte += 1;
      //console.log(tre_sette)

    } else if (numerino == 7 || numerino == 8 || numerino == 9 || numerino == 10 || numerino == 11 || numerino == 12) {

      otto_re += 1;
      carte += 1;
      //console.log(otto_re);

    } else if (numerino == 13) {

      pinelle += 1;
      carte += 1;
      //console.log(pinelle);

    } else if (numerino == 14) {

      jollys += 1;
      carte += 1;
      //console.log(jollys);

    } else if (numerino == 19) {
      meno_assi += 1;
      console.log(meno_assi);
    } else if (numerino == 20 || numerino == 21 || numerino == 22 || numerino == 23 || numerino == 24) {
      meno_tre_sette += 1;
      console.log(meno_tre_sette)
    } else if (numerino == 25 || numerino == 26 || numerino == 27 || numerino == 28 || numerino == 29 || numerino == 30) {
      meno_otto_re += 1;
      console.log(meno_otto_re);
    } else if (numerino == 31) {
      meno_pinella += 1;
      console.log(meno_pinella);
    } else if (numerino == 32) {
      meno_jollys += 1;
      console.log(meno_jollys);
    };
    //console.log("Sei dentro!", carte);



    // TASTO AVANTI
  } else if (mouseX >= 390 && mouseX <= 570 && mouseY >= 320 && mouseY <= 370) {
    if (numerino < 18 || numerino >= 19 && numerino < 34)  {
      numerino += 1;
    } else if (numerino = 18) {

      if (numerino == 18 && chiusura == 1) {
        punti_chiusura = 100;
        numerino = 50;
        console.log(numerino);
      } else if (numerino == 18 && chiusura == 0) {
        numerino += 1;
        console.log("A", numerino);
      } else if (numerino == 17) {
        numerino += 1;
      }

    }

    console.log("Avanti!", numerino);

    // TASTO GRANDE
  } else if (mouseX >= 90 && mouseX <= 525 && mouseY >= 80 && mouseY <= 280) {

    if (numerino == 15) {

      burrachi_puliti += 1;
      //console.log(burrachi_puliti);

    } else if (numerino == 16) {

      burrachi_sporchi += 1;
      //console.log(burrachi_sporchi);

    } else if (numerino == 18) {

      chiusura += 1;
      console.log(chiusura);

    } else if (numerino == 17) {

      pozzetto += 1;
      console.log("Hai preso il pozzetto!", pozzetto);
    };

  } else {

   console.log("FUORI!");

  };



}
