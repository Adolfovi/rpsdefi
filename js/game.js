var playeroption;

var cpuoption;

// FUNCION PIEDRA
function piedra(){
playeroption = 0;
cpuoption = Math.floor(Math.random() * 3);
  if(playeroption === 0 && cpuoption === 0){
    document.getElementById('resultado').innerHTML="PIEDRA- PIEDRA: EMPATE!!";
  
  }

  if(playeroption === 0 && cpuoption === 1){
    document.getElementById('resultado').innerHTML="PIEDRA- PAPEL: PERDISTES!!";
  
  }

  if(playeroption === 0 && cpuoption === 2){
    document.getElementById('resultado').innerHTML="PIEDRA- TIJERA: GANASTES!!";
  }


}

// FIN DE FUNCION PIEDRA




// FUNCION PAPEL
function papel(){
playeroption = 1;
cpuoption = Math.floor(Math.random() * 3);
  if(playeroption === 1 && cpuoption === 0){
    document.getElementById('resultado').innerHTML="PAPEL- PIEDRA: GANASTES!!";
  
  }

  if(playeroption === 1 && cpuoption === 1){
    document.getElementById('resultado').innerHTML="PAPEL- PAPEL: EMPATE!!";
  
  }

  if(playeroption === 1 && cpuoption === 2){
    document.getElementById('resultado').innerHTML="PAPEL- TIJERA: PERDISTES!!";
  }


}

// FIN DE FUNCION PAPEL


// FUNCION TIJERA
function tijera(){
playeroption = 2;
cpuoption = Math.floor(Math.random() * 3);
  if(playeroption === 2 && cpuoption === 0){
    document.getElementById('resultado').innerHTML="TIJERA- PIEDRA: PERDISTES!!";
  
  }

  if(playeroption === 2 && cpuoption === 1){
    document.getElementById('resultado').innerHTML="TIJERA- PAPEL: GANASTES!!";
  
  }

  if(playeroption === 2 && cpuoption === 2){
    document.getElementById('resultado').innerHTML="TIJERA- TIJERA: EMPATE!!";
  }


}

// FIN DE FUNCION TIJERA