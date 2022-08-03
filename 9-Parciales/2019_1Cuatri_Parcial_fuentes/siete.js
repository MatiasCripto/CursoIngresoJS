/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) 
, el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/
function mostrar()
{
    var alturaIngresada;
    var sexoIngresado;
    var promedio;
    var alturaMasBaja;
    var sexoAlturaMasBaja;
    var contadorMujeres;
    var contador;
    var bandera;
    var acumuladorAlturas;
    
    acumuladorAlturas = 0;
    bandera = true;
    alturaMasBaja = 0;
    sexoAlturaMasBaja = 0;
    contadorMujeres = 0;
    contador = 0;

    while(contador < 5)
    {   
        alturaIngresada = prompt("Ingrese una altura en centimetros");
        alturaIngresada = parseInt(alturaIngresada);
        while(isNaN(alturaIngresada)== true || (alturaIngresada < 0 || alturaIngresada > 250))
        {
            alturaIngresada = prompt("ERROR!! Ingrese una altura en centimetros");
            alturaIngresada = parseInt(alturaIngresada);
        }
        sexoIngresado = prompt("Ingrese un sexo F o M")
        while(sexoIngresado != "F" && sexoIngresado != "M")
        {
            sexoIngresado = prompt("ERROR!! Ingrese un sexo F o M")
        }
        if(bandera == true)
        {
            alturaMasBaja = alturaIngresada;
            sexoAlturaMasBaja = sexoIngresado;
            bandera = false;
        }
        if(sexoIngresado == "F" && alturaIngresada > 190)
        {
            contadorMujeres = contadorMujeres + 1;
        }
        
        
        mensajePromedio = ("El promedio de las alturas es " + promedio);
        mensajeAlturaYSexo = (" La altura mas baja es " + alturaMasBaja + " y el sexo de esa persona es " + sexoAlturaMasBaja);
        mensajeMujeresAltas = (" La cantidad de mujeres que superan los 190 centimetros son " + contadorMujeres);
        
        acumuladorAlturas = acumuladorAlturas + alturaIngresada;
        contador = contador + 1;
    }
    promedio = acumuladorAlturas / contador;
    alert(mensajePromedio + mensajeAlturaYSexo + mensajeMujeresAltas);
}
