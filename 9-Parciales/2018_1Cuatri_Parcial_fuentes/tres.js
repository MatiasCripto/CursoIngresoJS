function mostrar()
{
let precioinicial;
let descuento;
let resultado;

precioinicial = prompt("Ingrese el precio");
descuento = prompt("Ingrese el descuento");

precioinicial = parseFloat(precioinicial);
descuento = parseFloat(precioinicial * descuento / 100);

resultado = (precioinicial - descuento);

document.getElementById("elPrecioFinal").value = resultado;




}
