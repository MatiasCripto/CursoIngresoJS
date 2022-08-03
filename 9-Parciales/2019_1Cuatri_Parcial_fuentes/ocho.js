/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre 
-100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/
function mostrar()
{
    var letra;
    var numero;
    var respuesta;
    var cantidadPares;
    var cantidadImpares;
    var cantidadCeros;
    var acumuladorPares;
    var acumuladorImpar;
    var banderaMaximo;
    var numeroMax;
    var numeroMin;
    var letraNumMax;
    var letraNumMin;
    var promedioPositivo;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var mensajeE;
    var mensajeF;
    var contadorPares;

    respuesta = true;
    contadorPares = 0;
    banderaMaximo = true;
    acumuladorImpar = 0;
    acumuladorPares = 0;
    cantidadCeros = 0;
    cantidadImpares = 0;
    cantidadPares = 0;

    while(respuesta)
    {
        letra = prompt("Ingrese una letra");
        while(isNaN(letra)== false)
        {
            letra = prompt("ERROR!! Ingrese una letra");
        }
        numero=prompt("Ingrese un numero entre -100 y 100");
        numero = parseInt(numero);
        while(isNaN (numero)== true || numero < -100 || numero > 100)
        {
            numero=prompt("ERROR!! Ingrese un numero entre -100 y 100");
            numero = parseInt(numero);
        }
        if(numero %2 == 0)
        {
            cantidadPares++
        }
        else
        {
            cantidadImpares++
        }
        if(numero == 0)
        {
            cantidadCeros++
        }
        if(numero >0)
        {
            contadorPares++
            acumuladorPares = acumuladorPares + numero;
        }
        else
        {
            acumuladorImpar = acumuladorImpar + numero;
        }
        if(banderaMaximo == true)
        {
            numeroMax = numero;
            numeroMin = numero;
            letraNumMax = letra;
            letraNumMin = letra;
            banderaMaximo = false;
        }
        else
        {
            if(numero > numeroMax)
            {
                numeroMax = numero;
                letraNumMax = letra;
            }
            else
            {
                if(numero < numeroMin)
                {
                    numeroMin = numero;
                    letraNumMin = letra;
                }
            }
        }

    respuesta = confirm("Desea seguir ingresando datos?")  
    }
    promedioPositivo = acumuladorPares / contadorPares;

    mensajeA = "la cantidad de numeros pares es " + cantidadPares;
    mensajeB = " la cantidad de numeros impares es " + cantidadImpares;
    mensajeC = " la cantidad de ceros es " + cantidadCeros;
    mensajeD = " el promedio de los positivos es " + promedioPositivo;
    mensajeE = " la suma de los numeros negativos es " + acumuladorImpar;
    mensajeF = " el numero maximo es " + numeroMax + " y la letra de ese numero es " + letraNumMax + " y el numero minimo es "+ numeroMin + " y la letra de este numero es " + letraNumMin;

    alert(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE + mensajeF);
}
/*a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/