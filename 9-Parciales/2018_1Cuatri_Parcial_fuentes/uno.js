
function mostrar()
{
let largo;
let ancho;
let resultado;



largo = prompt("ingrese el larago del terreno");
largo = parseFloat(largo);

ancho = prompt("Ingrese el ancho del terreno");
ancho = parseFloat(ancho);
resultado = parseFloat(largo*2 + ancho*2);

alert(resultado);
}
