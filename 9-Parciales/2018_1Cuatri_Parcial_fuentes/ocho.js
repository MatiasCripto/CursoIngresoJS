/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre
 -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/

function mostrar()
{
    var numeroIngresado;
    var letraIngresada;
    var contadorNumPar;
    var contadorNumImpar;
    var contadorCeros;
    var promedio; 
    var sumaNegativos;
    var respuesta;
    var contadorPositivos;
    var acumuladorPositivos;
    var numeroMinimo;
    var numeroMaximo;
    var letraMinima;
    var letraMaxima;
    var bandera;
    
    contadorPositivos = 0;
    acumuladorPositivos = 0;
    respuesta = true;
    contadorNumPar = 0;
    contadorNumImpar= 0;
    contadorCeros = 0;
    bandera = true;
    sumaNegativos = 0;

    
    while(respuesta)
    {
        numeroIngresado = prompt("Ingrese un numero entre -100 y 100");
        numeroIngresado = parseInt(numeroIngresado);
        while(isNaN(numeroIngresado)== true || (numeroIngresado < -100 || numeroIngresado > 100))
        {
            numeroIngresado = prompt("ERROR!! Ingrese un numero entre -100 y 100");
            numeroIngresado = parseInt(numeroIngresado);
        }
        letraIngresada = prompt("Ingrese una letra")
        while(isNaN(letraIngresada)== false)
        {
            letraIngresada = prompt("ERROR!! Ingrese una letra")
        }
        if(numeroIngresado == 0)
        {
            contadorCeros = contadorCeros + 1;
        }
        else
        {
            if(numeroIngresado %2 ==0)
            {
                contadorNumPar = contadorNumPar + 1;
            }
            else
            {
                contadorNumImpar = contadorNumImpar + 1;
            }
        }

        if(numeroIngresado > 0)
        {
            contadorPositivos = contadorPositivos + 1;
            acumuladorPositivos = acumuladorPositivos + numeroIngresado;
        }
        else
        {
            sumaNegativos = sumaNegativos + numeroIngresado; 
        }
        
        if(bandera == true)
        {
            numeroMinimo = numeroIngresado;
            numeroMaximo = numeroIngresado;
            letraMinima = letraIngresada; 
            letraMaxima = letraIngresada;
            bandera = false;
        }
        else
        {
            if(numeroIngresado < numeroMinimo)
            {
                numeroMinimo = numeroIngresado;
                letraMinima = letraIngresada;
            }
            else
            {
                if(numeroIngresado > numeroMaximo)
                {
                    numeroMaximo = numeroIngresado;
                    letraMaxima = letraIngresada;
                }
            }
        }
        respuesta = confirm("Desea continuar?");
    }   
    
    promedio = acumuladorPositivos / contadorPositivos;
    
    document.write("La cantidad de numeros pares es : " + contadorNumPar);
    document.write("<br>");
    document.write("La cantidad de numeros impares es : " + contadorNumImpar);
    document.write("<br>");
    document.write("La cantidad de ceros es : " + contadorCeros);
    document.write("<br>");
    document.write("El promedio de los numeros positivos es : " + promedio);
    document.write("<br>");
    document.write("La suma de los numeros negativos es : " + sumaNegativos);
    document.write("<br>");
    document.write("El numero minimo ingresado es " + numeroMinimo + " y la letra del numero minimo es " + letraMinima);
    document.write("<br>");
    document.write("El numero maximo ingresado es " + numeroMaximo + " y la letra del numero maximo es " + letraMaxima);

}
