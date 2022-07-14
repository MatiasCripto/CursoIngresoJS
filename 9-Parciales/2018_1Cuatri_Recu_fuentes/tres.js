function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese el monto");
    porcentaje = prompt("Ingrese el porcentaje a descontar");

    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);
    
    descuento = porcentaje * precio / 100

    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;





}
