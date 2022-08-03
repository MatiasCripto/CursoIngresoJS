/*Realizar el algoritmo que permita ingresar el nombre de un país,
 cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/
function mostrar()
{
    var nombrePais;
    var cantidadHabitantes;
    var temperaturaIngresada;
    var respuesta;
    var contadorTemperatirasPares;
    var habitantesMinimo;
    var banderaHabitantes;
    var paisMinimoHabitantes;
    var contadorPaises;
    var promedioHabitantes;
    var contadorHabitantes;
    var acumuladorHabitantes;
    var banderaTemperaturaMinima;
    var temperaturaMinima;
    var paisTemperaturaMinima;

    temperaturaMinima = 0;
    paisTemperaturaMinima = 0;    
    banderaTemperaturaMinima == true;
    contadorHabitantes = 0;
    acumuladorHabitantes = 0;
    contadorPaises = 0;
    banderaHabitantes = true;
    contadorTemperatirasPares = 0;
    respuesta = true;

    while(respuesta == true)
    {
        nombrePais = prompt("Ingrese el pais");
        cantidadHabitantes = prompt("Ingrese una cantidad de" + nombrePais + "entre 1 y 7000")
        cantidadHabitantes = parseInt(cantidadHabitantes);
        while(isNaN(cantidadHabitantes)== true || (cantidadHabitantes < 1 || cantidadHabitantes > 7000))
        {
            cantidadHabitantes = prompt("ERROR!!! Ingrese una cantidad de" + nombrePais + "entre 1 y 7000")
            cantidadHabitantes = parseInt(cantidadHabitantes);
        }
        temperaturaIngresada = prompt("Ingrese una temperatura entre -50 y 50");
        temperaturaIngresada = parseInt(temperaturaIngresada);
        while(isNaN(temperaturaIngresada)== true || (temperaturaIngresada < -50 || temperaturaIngresada > 50))
        {
            temperaturaIngresada = prompt("ERROR!! Ingrese una temperatura entre -50 y 50");
            temperaturaIngresada = parseInt(temperaturaIngresada);
        }
        
        if(temperaturaIngresada %2 == 0)
        {
            contadorTemperatirasPares = contadorTemperatirasPares + 1;
        }

        if(banderaHabitantes == true)
        {
            habitantesMinimo = cantidadHabitantes;
            paisMinimoHabitantes = nombrePais;
            banderaHabitantes = false;
        }
        else
        {
            if(cantidadHabitantes < habitantesMinimo)
            {
                habitantesMinimo = cantidadHabitantes;
                paisMinimoHabitantes = nombrePais;
            }
        }
        
        if(temperaturaIngresada > 40)
        {
            contadorPaises = contadorPaises + 1;
        }
        contadorHabitantes = contadorHabitantes + 1;
        acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;

        if(banderaTemperaturaMinima == true)
        {
            temperaturaMinima = temperaturaIngresada;
            paisTemperaturaMinima = nombrePais;
            banderaTemperaturaMinima = false;
        }
        else
        {
            if(temperaturaIngresada < temperaturaMinima)
            {
                temperaturaMinima = temperaturaIngresada;
                paisTemperaturaMinima = nombrePais;
            }

        }
        
        
        
        
        
        respuesta = confirm("Desea continuar?");
    }
    /*a) La cantidad de temperaturas pares.
    b) El nombre del pais con menos habitantes
    c) la cantidad de paises que superan los 40 grados.
    d) el promedio de habitantes entre los paises ingresados
    f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/
    
    promedioHabitantes = acumuladorHabitantes / contadorHabitantes;

    document.write("la cantidad de temperaturas pares es : " + contadorTemperatirasPares);
	document.write("<br>");
	document.write(" el pais con menos habitantes es  : " + paisMinimoHabitantes);
	document.write("<br>");
	document.write(" la cantidad de paises que superan los 40 grados son : " + contadorPaises);
	document.write("<br>");
	document.write(" el promedio de habitantes ingresados es : " + promedioHabitantes);
	document.write("<br>");
	document.write(" la temperatura minima ingresada es : "  +  temperaturaMinima + " y pertenece al pais : " + paisTemperaturaMinima);
	
}
