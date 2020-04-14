   var colorLinea = "blue";    // color a la linea

var area = document.getElementById('area_dibujo');
var papel = area.getContext("2d");
                     // guardar coordenada en X
                     // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click

// dibujo del borde
dibujarLinea("red", 0, 0, 300, 0, papel)
dibujarLinea("red", 300, 0, 300, 300, papel)
dibujarLinea("red", 300, 300, 0, 300, papel)
dibujarLinea("red", 0, 300, 0, 0, papel)

// Funcion para mousedown
function presionarMouse(evento){
  dibujarLinea(colorLinea, evento.layerX, evento.layerY, evento.layerX + 2, evento.layerY + 2, papel);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 3;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}