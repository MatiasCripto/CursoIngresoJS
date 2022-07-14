
function mostrar()
{
var ancho;
var largo;
var perimetro;
var mensaje;

ancho = prompt("Ingrese el ancho del terreno");
largo = prompt("Ingrese el largo del terreno");

perimetro = largo * ancho;

mensaje = ("El perimetro del terreno es " + perimetro);

alert(mensaje);

}
