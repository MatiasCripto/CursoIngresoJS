
function mostrar()
{
var ladoUno;
var perimetro;
var mensaje;

ladoUno = prompt("Ingrese la medida de un lado");
ladoUno = parseInt(ladoUno);

perimetro = ladoUno * 3;

mensaje = "El perimetro del triangulo es " + perimetro;

alert(mensaje);


}
