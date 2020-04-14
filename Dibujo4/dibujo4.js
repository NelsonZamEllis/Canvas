var texto = document.getElementById("texto_lineas4");
var boton = document.getElementById("botoncito4");
var teclas = {
    ENTER: 13
};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
   switch(evento.keyCode)
   {
        case teclas.ENTER :
            dibujoPorClick();
        break;
   }
}

boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito4");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, yf;
    var colorcito = "blue";
    var espacio = ancho / lineas;

while(l < lineas)
{
    xi = 290 - (espacio * l);
    yf = 300 - (espacio * l);
    dibujarLinea(colorcito, xi, 0, 300, yf);
    console.log("Linea " + l);
    l++;
}

dibujarLinea(colorcito, 1, 1, 299, 1);
dibujarLinea(colorcito, 299, 1, 299, 299);
}