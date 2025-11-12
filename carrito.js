let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let totalProductos=0;
let totalprecio1 = 0;
let totalprecio2 = 0;
let totalprecio3 = 0;
let totalgeneral = 0;

function contarProd1() {
    const cont1 = document.getElementById("prod1")
    const pUnit1 = 12
    contador1 +=1;
    totalProductos++;
    totalprecio1=contador1*pUnit1
    console.log(`Van ${contador1} Productos del prod1`);
    console.log(`Las ${contador1} unds del prod1 cuestan ${totalprecio1}`)
    actualizartotalprod();
}

function contarProd2() {
    const cont2 = document.getElementById("prod2");
    const pUnit2 = 10
    contador2 +=1;
    totalProductos++;
    totalprecio2=contador2*pUnit2;
    console.log(`Van ${contador2} Productos del prod2`);
    console.log(`Las ${contador2} unds del prod2 cuestan ${totalprecio2}`);
    actualizartotalprod();
}

function contarProd3() {
    const cont3 = document.getElementById("prod3");
    const pUnit3 = 11;
    contador3 +=1;
    totalProductos++;
    totalprecio3=contador3*pUnit3;
    console.log(`Van ${contador3} Productos del prod3 cuestan ${totalprecio3}`);
    actualizartotalprod();
}

function actualizartotalprod(){
    totalgeneral = totalprecio1+totalprecio2+totalprecio3;
    document.getElementById("totalitems").innerHTML=totalProductos;
    document.getElementById("totalprecio").innerHTML=totalgeneral;
    if (totalgeneral>50){
        alert("¡Envío Gratis Aplicado");
    }
}

function vaciarCarrito(){
    contador1 = 0;
    contador2 = 0;
    contador3 = 0;
    totalProductos=0;
    totalprecio1 = 0;
    totalprecio2 = 0;
    totalprecio3 = 0;
    totalgeneral = 0;
    actualizartotalprod();
    alert("El carrito se ha vaciado")
}