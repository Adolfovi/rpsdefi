var playeroption;
var score=100;
var cpuoption;

// FUNCION PIEDRA
function piedra(){
playeroption = 0;
cpuoption = Math.floor(Math.random() * 3);
  if(playeroption === 0 && cpuoption === 0){
    document.getElementById('resultado').innerHTML="PIEDRA- PIEDRA: EMPATE!!";
  score=score+0;
document.getElementById('points').innerHTML=score;
  }

  if(playeroption === 0 && cpuoption === 1){
    document.getElementById('resultado').innerHTML="PIEDRA- PAPEL: PERDISTES!!";
  score=score-1;
  document.getElementById('points').innerHTML=score;
  }

  if(playeroption === 0 && cpuoption === 2){
    document.getElementById('resultado').innerHTML="PIEDRA- TIJERA: GANASTES!!";
  score=score+2;
document.getElementById('points').innerHTML=score;
  }


}

// FIN DE FUNCION PIEDRA




// FUNCION PAPEL
function papel(){
playeroption = 1;
cpuoption = Math.floor(Math.random() * 3);
  if(playeroption === 1 && cpuoption === 0){
    document.getElementById('resultado').innerHTML="PAPEL- PIEDRA: GANASTES!!";
  score=score+2;
  document.getElementById('points').innerHTML=score;
  }

  if(playeroption === 1 && cpuoption === 1){
    document.getElementById('resultado').innerHTML="PAPEL- PAPEL: EMPATE!!";
  score=score+0;
  document.getElementById('points').innerHTML=score;
  }

  if(playeroption === 1 && cpuoption === 2){
    document.getElementById('resultado').innerHTML="PAPEL- TIJERA: PERDISTES!!";
  score=score-1;
document.getElementById('points').innerHTML=score;
  }


}

// FIN DE FUNCION PAPEL


// FUNCION TIJERA
function tijera(){
playeroption = 2;
cpuoption = Math.floor(Math.random() * 3);
  if(playeroption === 2 && cpuoption === 0){
    document.getElementById('resultado').innerHTML="TIJERA- PIEDRA: PERDISTES!!";
  score=score-1;
  document.getElementById('points').innerHTML=score;
  }

  if(playeroption === 2 && cpuoption === 1){
    document.getElementById('resultado').innerHTML="TIJERA- PAPEL: GANASTES!!";
  score=score+2;
  document.getElementById('points').innerHTML=score;
  }

  if(playeroption === 2 && cpuoption === 2){
    document.getElementById('resultado').innerHTML="TIJERA- TIJERA: EMPATE!!";
  score=score+0;
document.getElementById('points').innerHTML=score;
  }


}

// FIN DE FUNCION TIJERA
