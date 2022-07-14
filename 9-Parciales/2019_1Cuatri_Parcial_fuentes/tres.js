function mostrar()
{
    var precio;
    var porcentaje;
    var precioFinal;
    var suma;
    
    precio = prompt("Ingrese el monto.");
    porcentaje = prompt("Ingrese el porcentaje");

    precio = parseFloat(precio);
    porcentaje = parseFloat(porcentaje);

    
    precioFinal = precio * porcentaje / 100;

    suma = precio - precioFinal;

    document.getElementById("elPrecioFinal").value = suma;






}
