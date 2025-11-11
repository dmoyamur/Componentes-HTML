let votos1 = 0;
let votos2 = 0;
let votos3 = 0;
    
 function voto1() {
    alert ("¡Gracias por tu voto!")
    let contador1 = document.getElementById("contador1");
    votos1 = parseInt(contador1.innerText);
    votos1 += 1;
    contador1.innerText = votos1;
    if(votos1<6){
        console.log(`Van ${votos1} Votos por Diseño Web`)
    }
}

    
 function voto2() {
    alert ("¡Gracias por tu voto!")
    let contador2 = document.getElementById("contador2");
    votos2 = parseInt(contador2.innerText);
    votos2 += 1;
    contador2.innerText = votos2;
    if(votos2<6){
        console.log(`Van ${votos2} Votos por JavaScript`)
    }

}

    
 function voto3() {
    alert ("¡Gracias por tu voto!")
    let contador3 = document.getElementById("contador3");
    votos3 = parseInt(contador3.innerText);
    votos3 += 1;
    contador3.innerText = votos3;
    if(votos3<6){
        console.log(`Van ${votos3} Votos por Bases de Datos`)
    }
}
