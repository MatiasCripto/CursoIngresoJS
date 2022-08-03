function mostrar()
/*{
var notas;
var sexo;
var contador;
var promedio;
var sumaDeNotas;
var notaMasBaja;
var tipoDeSexo;
var cantidadDeVarones;
var mensaje;
var sumaDeNotas;


contador = 0;
sumaDeNotas = 0;


    while(contador <2)
    {
        notas = prompt("Ingrese una nota");
        notas = parseInt(notas);

        while(notas <0 || notas >10)
        {
            notas = prompt("Ingrese una nota valida");
            notas = parseInt(notas);

        }
        sexo = prompt("Ingrese un sexo: M para masculino y F para femenino");
        while(sexo != "M" && sexo != "F" )
        {
            sexo = prompt("Ingrese un sexo valido");
        }
        if(contador == 0)
        {
            notaMasBaja = notas;
            tipoDeSexo = sexo;
        }
        else
        {
            if(sexo == "M")
            {
                tipoDeSexo = sexo;
            }
            else
            {
                if(notas > 5)
                {
                    cantidadDeVarones = tipoDeSexo;
                }
            }
        }
        
        contador = contador + 1;
        sumaDeNotas = sumaDeNotas + notas;
    }
    
    alert("La nota mas baja es " + notaMasBaja + " y esa persona es de sexo " + tipoDeSexo);
    alert("Los varones que su nota fue 6 o mas son " + cantidadDeVarones);    
    promedio = sumaDeNotas/contador;
    mensaje = ("El promedio de notas es " + promedio);
    alert(mensaje);

}*/


/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
/*{
    var notaIngresada;
    var sexoIngresado;
    var contadorDeNotas;
    var promedioDeNotas;
    var mensajeDePromedio;
    var notaMasBaja;
    var contadorDeSexo;
    var mensajeDeNotasYSexo;
    var contadorDeVarones;
    var mensajeVarones;

    contadorDeVarones = 0;
    contadorDeSexo = 0;
    notaMasBaja = 0;
    contador = 0;
    sumaDeNotas = 0;
    contadorDeNotas = 0;
    promedioDeNotas = contadorDeNotas / 5;

    notaIngresada = prompt("Ingrese una nota")
    notaIngresada = parseInt(notaIngresada);
    
    while(contador > 0 || contador > 5)
    {
        notaIngresada = prompt("Ingrese una nota")
        notaIngresada = parseInt(notaIngresada);
        while(isNaN(notaIngresada)==true)
        {
            notaIngresada = prompt("ERROR!! Ingrese una nota")
            notaIngresada = parseInt(notaIngresada);
        }
        while(notaIngresada< 0 || notaIngresada > 10)
        {
            notaIngresada = prompt("ERROR!! Ingrese una nota valida")
            notaIngresada = parseInt(notaIngresada);
            contadorDeNotas = contadorDeNotas + 1;
            mensajeDePromedio = ("El promedio de las notas es " + promedioDeNotas);

        }
        if(banderaDelPrimero == "es el primero")
		{
			notaMasBaja = notaIngresada; 
			banderaDelPrimero = "Ya no";
		}
		else
		{
			if(notaIngresada < notaMasBaja)
			{
				notaMasBaja = notaIngresada;
			}
			
		}
        sexoIngresado = prompt("Ingrese un sexo F o M")
        while(sexoIngresado != "F" && sexoIngresado != "M")
        {
            sexoIngresado = prompt("ERROR!! Ingrese un sexo F o M")
        }
        switch(sexoIngresado)
        {
            case "M":
                if(notaIngresada > 5)
                {
                    contadorDeVarones = contadorDeVarones + 1;
                    mensajeVarones = ("La cantidad de varones que se sacaron 6 o mas son " + contadorDeVarones)
                }
        }
        
        mensajeDeNotasYSexo = notaMasBaja + sexoIngresado;
    }

    alert(mensajeDePromedio + mensajeDeNotasYSexo + mensajeVarones);
}*/

/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
{
    var notaIngresada;
    var sexoIngresado;
    var contadorDeNotas;
    var contadorDeSexo;
    var contador;
    var bandera;
    var notaMasBaja;
    var sexoNotaMenor;
    var contadorVaronesMasSeis;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var acumuladorNotas;

    acumuladorNotas = 0;
    bandera = true
    contador = 0;
    contadorDeSexo = 0;
    contadorDeNotas = 0;
    contadorVaronesMasSeis = 0;

    while(contador < 6)
    {
        notaIngresada = prompt("Ingrese una nota");
        notaIngresada = parseInt(notaIngresada);
        
        while(isNaN(notaIngresada)== true)
        {
            notaIngresada = prompt("ERROR Ingrese una nota");
            notaIngresada = parseInt(notaIngresada);   
        }
        while(notaIngresada < 0 || notaIngresada > 10)
        {
            notaIngresada = prompt("ERROR Ingrese una nota entre 0 y  10");
            notaIngresada = parseInt(notaIngresada);
        }
        sexoIngresado = prompt("Ingrese un sexo: M o F")
        while(sexoIngresado != "M" && sexoIngresado != "F")
        {
            sexoIngresado = prompt("ERROR!! Ingrese un sexo valido: M o F")
        }
        
        if(bandera == true)
        {
            notaMasBaja = notaIngresada;
            sexoNotaMenor = sexoIngresado;
            bandera = false;
        }
        else
        {
            if(notaIngresada < notaMasBaja)
            {
                notaMasBaja = notaIngresada;
                sexoNotaMenor = sexoIngresado;
            }        
        }
        
        if(sexoIngresado == "M" && notaIngresada > 5)
        {
            contadorVaronesMasSeis = contadorVaronesMasSeis + 1;
        }
        contador = contador + 1;
        acumuladorNotas = acumuladorNotas + notaIngresada;
    }    
    promedio = acumuladorNotas / contador;

    mensajeA = ("El promedio de notas es " + promedio);
    mensajeB = (" La nota mas baja es " + notaMasBaja + " y el sexo de ese alumno es " + sexoNotaMenor);
    mensajeC = (" La cantidad de varones cuya nota fue mayor o igual a 6 es " + contadorVaronesMasSeis);

    alert(mensajeA + mensajeB + mensajeC);
}

