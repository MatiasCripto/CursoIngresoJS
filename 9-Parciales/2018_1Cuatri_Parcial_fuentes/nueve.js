/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
function mostrar()
{
    var marca;
    var pesoIngresado;
    var temperaturaIngresada;
    var respuesta;
    var contadorTemperaturasPares;
    var cantidadTemperaturasPares;
    var contadorMarca;
    var marcaMasPesada;
    var promedioPeso;
    var cantidadPeso;
    var contadorPeso;
    var banderaProductoMasPesado;
    var productoMasPesado;
    var productoPesoMinimo;
    var contadorTemperaturaBaja;
    var cantidadTemperaturaBaja;
    
    respuesta = true;
    contadorTemperaturasPares = 0;
    cantidadTemperaturasPares = 0;
    contadorMarca = 0;
    marcaMasPesada = 0;
    promedioPeso = 0;
    cantidadPeso = 0;
    contadorPeso = 0;
    banderaProductoMasPesado = true;
    // valido los datos
    while(respuesta == true)
    {
        marca = prompt("Ingrese una marca");
        pesoIngresado = prompt("Ingrese un peso entre 1 y 100")
        pesoIngresado = parseInt(pesoIngresado);
        while(isNaN(pesoIngresado)== true || pesoIngresado <1 || pesoIngresado >100)
        {
            pesoIngresado = prompt("ERROR!! Ingrese un peso entre 1 y 100")
            pesoIngresado = parseInt(pesoIngresado);
        }
        temperaturaIngresada = prompt("Ingrese una temperatura entre -30 y 30")
        temperaturaIngresada = parseInt(temperaturaIngresada);
        while(isNaN(temperaturaIngresada)== true || temperaturaIngresada < -30 || temperaturaIngresada >30)
        {
            temperaturaIngresada = prompt("Ingrese una temperatura entre -30 y 30")
            temperaturaIngresada = parseInt(temperaturaIngresada);
        }
        // consigna A
        if(temperaturaIngresada %2 == 0)
        {
            contadorTemperaturasPares = contadorTemperaturasPares + 1;
            cantidadTemperaturasPares = cantidadTemperaturasPares + temperaturaIngresada;
        }
        //consigna B
        if(banderaProductoMasPesado == true)
        {
            productoPesoMinimo = pesoIngresado
            productoMasPesado = pesoIngresado;
            marcaMasPesada = marca;
        }
        else
        {
            if(pesoIngresado > productoMasPesado)
            {
                productoMasPesado = pesoIngresado
                marcaMasPesada = marca;
            }
            else
            {
                if(pesoIngresado < productoPesoMinimo)
                {
                    productoPesoMinimo = pesoIngresado;
                }
            }
            
        }
        // consigna C
        if(temperaturaIngresada < 0)
        {
            contadorTemperaturaBaja = contadorTemperaturaBaja + 1;
            cantidadTemperaturaBaja = cantidadTemperaturaBaja + temperaturaIngresada;
        }

    }
    
    mensajeA
    mensajeB
    mensajeC
    mensajeD
    mensajeE
}
