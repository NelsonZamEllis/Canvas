var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
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

var d = document.getElementById("dibujito3");
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
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;

    //Tambien se puede hacer con el ciclo for.
    //for(l=0; l < lineas; l++)
while(l < lineas)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    l++;
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);
}

