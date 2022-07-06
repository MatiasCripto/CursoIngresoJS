function mostrar()
{
let precioInicial;
let descuento;
let resultado;

precioInicial = prompt("Ingrese el precio");
descuento = prompt("Ingrese el descuento");

precioInicial = parseFloat(precioInicial);

descuento = (precioInicial * descuento / 100);

resultado = (precioInicial - descuento);

document.getElementById("elPrecioFinal").value = resultado;




}
