/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
 hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
 var productoIngresado;
 var cantidadBolsas;
 var precio;
 var total;
 var porcentaje;
 var respuesta;
 var contadorCemento;
 var cantidadCemento;
 var contadorCal;
 var cantidadCal;
 var contadorArena;
 var cantidadArena;
 var banderaPrecioMaximo;
 var tipoMasCaro;

 banderaPrecioMaximo = true;
 respuesta = true;
 contador = 0;
 contadorCemento = 0;
 cantidadCemento = 0
 contadorCal = 0;
 cantidadCal = 0
 contadorArena = 0
 cantidadArena = 0;

  while(respuesta == true)
  {
    productoIngresado = prompt("Ingrese un producto: arena, cal o cemento");
    while(productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento")
    {
      productoIngresado = prompt("ERROR!! Ingrese un producto: arena, cal o cemento");
    }
    cantidadBolsas = prompt("Ingrese una cantidad de bolsas de " + productoIngresado);
    cantidadBolsas = parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas)==true || cantidadBolsas < 0)
    {
      cantidadBolsas = prompt("ERROR!! Ingrese una cantidad de bolsas de " + productoIngresado);
      cantidadBolsas = parseInt(cantidadBolsas);
    }
    precio = prompt("Ingrese un precio mayor a 0");
    precio = parseFloat(precio);
    while(isNaN(precio)==true || precio < 0)
    {
      precio = prompt("ERROR!! Ingrese un precio mayor a 0");
      precio = parseFloat(precio);
    }
    
    //consigna D
    switch(productoIngresado)
    {
      case "cemento":
        contadorCemento = contadorCemento + 1;
        cantidadCemento = cantidadCemento + cantidadBolsas;
       break;
       case "arena":
        contadorArena = contadorArena + 1;
        cantidadArena = cantidadArena + cantidadBolsas;
       break;
       case "cal":
        contadorCal = contadorCal + 1;
        cantidadCal = cantidadCal + cantidadBolsas;
       break;   
    }
    
    respuesta = confirm("Desea continuar?");
  }
  if(cantidadCemento > cantidadArena && cantidadCemento > cantidadCal)
  {
    masUnidades = productoIngresado;
  }
  else
  {
    if(cantidadArena > cantidadCal)
    {
      masUnidades = productoIngresado;
    }
    else
    {
      masUnidades = productoIngresado;
    }
  }
  if(banderaPrecioMaximo == true)
  {
    tipoMasCaro = productoIngresado;
  }
  else
  {
    if(precio > tipoMasCaro)
    {
      tipoMasCaro = productoIngresado;
    }
  }
  if(cantidadBolsas > 10)
    {
      porcentaje = 0.85;
    }
    if(cantidadBolsas > 30)
      {
        porcentaje = 0.75;
      }
    
  total = ((cantidadCemento + cantidadArena + cantidadCal) * precio);
  mensajeA = ("El importe a pagar es " + total);
  mensajeB = (" El importe total con descuento es " + total * porcentaje);
  mensajeC = (" El tipo con mas cantidades es " + masUnidades);
  mensajeD = (" El tipo mas caro es " + tipoMasCaro);

  alert(mensajeA + mensajeB + mensajeC + mensajeD);
}
/*
EJERCICIO 1
Un restaurante necesita un programa que permita 
ingresar datos de los platos con su precio a pagar
y cantidad hasta que el cliente quiera. Por cada cliente, se ingresa:
plato: (validar "ravioles", "milanesa", "pizza").
precio del plato (desde 100 hasta 500)
cantidad (mas que 0)
medio de pago (validar "efectivo", "debito", "credito")
a)	El importe total de todos los clientes.
		Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
c)	Promedio de ventas con Debito.
d)	Promedio por plato y el más barato.
*/
/*
EJERCICIO 2
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) y si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que ingresar 
se debe reportar
a)	El nombre de la persona más joven que se dio sputnik
b)	El porcentaje de jóvenes que tuvieron la enfermedad
c)	El promedio de edad 
d)  La vacuna más veces aplicada
*/

/*
EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar
 marca del producto
 Tipo de galletita : "con sal", "sin sal", "dulces".
 cantidad de cajas: mas de 0
 cantidad de kilos por caja:mas de 0
 nombre proveedor
 origen: "nacional", "mercosur", "resto del mundo"
	a) informar el ingreso con la menor cantidad de cajas
	b) de las galletitas dulces , la marca que mas kilos tiene por caja
	c)que porcentaje de cajas hay sobre el total de cada tipo
	ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)
*/

