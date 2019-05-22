var d = document.getElementById("dibujito2");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, yf;
var colorcito = "blue";

while(l < lineas)
{
    xi = 290 - (10 * l);
    yf = 300 - (10 * l);
    dibujarLinea(colorcito, xi, 0, 300, yf);
    console.log("Linea " + l);
    l++;
}

dibujarLinea(colorcito, 1, 1, 299, 1);
dibujarLinea(colorcito, 299, 1, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}