/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
/*
{
	let saludo;

	saludo = "Esto funciona de maravilla"
	alert(saludo);
}

*/
/*{
  var diametroMayor;
  var diametroMenor;
  var varillas;
  var papelCeleste;
  var papelRosa;
  var perimetro;
  var mensaje;
  var colaDelCometa;

  diametroMayor = prompt("Ingrese el diametro mayor");
  diametroMenor = prompt("Ingrese el diametro menor");

  diametroMayor = parseFloat(diametroMayor);
  diametroMenor = parseFloat(diametroMenor);

  perimetro = (diametroMayor + diametroMenor) * 2 * 0.1;

  papelCeleste = diametroMayor * diametroMenor / 2 * 0.1;

  papelRosa = diametroMayor * diametroMenor / 2 * 0.1;

  varillas = perimetro;

  colaDelCometa = (papelCeleste + papelRosa) * 10 / 100;
  
  mensaje = "Para construir en masa 10 cometas, necesitas " + varillas + " metros de varillas de plastico, " + papelCeleste + " metros cuadrados de papel celeste, " + papelRosa + " metros cuadrados de papel rosa y " + colaDelCometa + " metros cuadrados para la cola del cometa."

  alert(mensaje); 

}*/

/*{
  var mensaje;

  mensaje = "Estoy aprendiendo a leer. mi nombre es Alejandro";

  alert(mensaje);
}*/
/*{
  var respuesta;
  var notas;
  var sexoIngresado;
  var nombre;
  var contadorNotas;
  var acumuladorNotas;
  var banderaNotaMasBaja;
  var notaMasBaja;
  var nombreNotaMasBaja;
  var sexoNotamasBaja;
  var contadorVaronesMayorSeis;
  var banderaPrimerMujer;
  var notaPrimerMujer;
  var nombrePrimerMujer;
  var contadorNotaF;
  var contadorNotasM;
  var contadorMAprobadas;
  var promedioTotalNotas;
  var acumuladorNotaMujeres;
  var promedioNotasMujeres;
  var contadorDesapF;
  var contadorDesapM;
  var masDesaprobado;
  var contadorAprobados;
  var acumuladorAprobados;
  var promedioAprobados;
  var acumuladorNotasMujer;
  var contadorNotasMujer;
  var promedioNotasMujeresTotal;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeD;
  var mensajeE;
  var mensajeF;
  var mensajeG;
  var mensajeH;
  var mensajeI;
  var mensajeJ;
  var mensajeK;
  var mensajeL;
  var mensajeM;
  var mensajeFinal;
  var altura;
  var edad;
  var estacion;
  var banderaPersonaMAsAlta;
  var nombrePeronaMasAlta;
  var notaPeronaMasAlta;
  var banderaOtoñoPV;
  var primerVaron;
  var nombrePersonaMasBaja;
  var masAlto;
  var masBajo;
  var contadorVerano;
  var contadorOtoño;
  var contadorInvierno;
  var contadorPrimavera;
  var estacionMasNacieron;
  var banderaPrimerAprobado;
  var sexoPrimerAprobado;
  var nombrePrimerAprobado;
  var edadPrimerAprobado;
  var alturaPrimerAprobado;

  banderaPrimerAprobado = true;
  contadorOtoño = 0;
  contadorInvierno = 0;
  contadorPrimavera = 0;
  contadorVerano = 0;
  banderaOtoñoPV = true;
  banderaPersonaMAsAlta = true;
  contadorNotasMujer = 0;
  acumuladorNotasMujer = 0;
  acumuladorAprobados = 0;
  contadorAprobados = 0;
  contadorDesapM = 0;
  contadorDesapF = 0;
  acumuladorNotaMujeres = 0;
  contadorMAprobadas = 0;
  contadorNotasM = 0;
  contadorNotaF = 0;
  banderaPrimerMujer = true;
  contadorVaronesMayorSeis = 0;
  banderaNotaMasBaja = true;
  contadorNotas = 0;
  acumuladorNotas = 0;
  respuesta = true;


  while(respuesta == true)
  {
    notas = prompt("Ingrese una nota entre 0 y 10");
    notas=parseInt(notas);
    while(isNaN(notas)==true || notas <0 || notas >10)
    {
      prompt("ERROR!! Ingrese una nota entre 0 y 10");
      notas=parseInt(notas);
    }
    sexoIngresado = prompt("Ingrese un sexo f o m");
    while(sexoIngresado != "f" && sexoIngresado != "m")
    {
      sexoIngresado = prompt("ERROR!! Ingrese un sexo f o m");
    }
    nombre = prompt("ingrese un nombre");
    while(isNaN(nombre)== false)
    {
      nombre = prompt("ERROR!! ingrese un nombre"); 
    }
    altura = prompt("Ingrese su altura en cm")
    altura = parseInt(altura);
    while(isNaN(altura)==true)
    {
      altura = prompt("ERROR!! Ingrese su altura en cm")
      altura = parseInt(altura);
    }
    edad = prompt("Ingrese su edad")
    edad = parseInt(edad);
    while(isNaN(edad)==true)
    {
      edad = prompt("Ingrese su edad")
      edad = parseInt(edad);
    }
    estacion = prompt("Ingrese la estacion de año que nacio: otoño, verano, invierno o primavera")
    while(estacion != "verano" && estacion != "invierno" && estacion != "otoño" && estacion != "primavera")
    {
      estacion = prompt("ERROR!! Ingrese la estacion del año que nacio: otoño, verano, invierno o primavera")
    }
    contadorNotas++
    acumuladorNotas = acumuladorNotas + notas;
    
    if(banderaNotaMasBaja == true)
    {
      notaMasBaja = notas;
      nombreNotaMasBaja = nombre;
      sexoNotamasBaja = sexoIngresado;
      banderaNotaMasBaja = false;
    }
    else
    {
      if(notas < nombreNotaMasBaja)
      {
        notaMasBaja = notas;
        nombreNotaMasBaja = nombre;
        sexoNotamasBaja = sexoIngresado;
      }
    }
    if(sexoIngresado == "m" )
    {
      if(notas >5)
      {
        contadorVaronesMayorSeis++;
        contadorDesapM++;
      }
      else
      {
        if(estacion == "otoño" )
        {
          if(banderaOtoñoPV == true)
          {
            primerVaron = nombre;
            banderaOtoñoPV = false;
          }
        }
      }
    }
    
    if(sexoIngresado == "f")
    {
        if(banderaPrimerMujer == true)
      {
        notaPrimerMujer = notas;
        nombrePrimerMujer = nombre;
        banderaPrimerMujer = false;
      }      
    
      if(notas > 5)
      {
        contadorAprobados++;
        acumuladorAprobados = acumuladorAprobados + notas;
      }
        contadorNotasMujer++;
        acumuladorNotasMujer = acumuladorNotas + notas;
    }
    else
    {
      if( notas >5)
      {
        contadorMAprobadas++;
        contadorDesapF++;
      }
      if(banderaPrimerMujer == true)
      {
        notaPrimerMujer = notas;
        nombrePrimerMujer = nombre;
        banderaPrimerMujer = false;
      }    
    }
    if(banderaPersonaMAsAlta == true)
    {
      masAlto = altura;
      masBajo = altura;
      nombrePeronaMasAlta = nombre;
      notaPeronaMasAlta = notas;
      nombrePersonaMasBaja = nombre;
      banderaPersonaMAsAlta = false;
    }
    else
    {
      if(altura > masAlto)
      {
        masAlto = altura;
        nombrePeronaMasAlta = nombre;
        notaPeronaMasAlta = notas;
      }
      else
      {
        if(edad > 12 && edad < 18 && altura < masBajo)
        {
          masBajo = altura;
          nombreNotaMasBaja = nombre;
        }
      }
    }
    switch(estacion)
    {
      case "verano":
        contadorVerano++;
      break;
      case "otoño":
        contadorOtoño++;
      break;
      case "invierno":
        contadorInvierno++;
      break;
      case "primavera":
        contadorPrimavera;
      break;      
    }
    if(banderaPrimerAprobado == true)
    {
      nombrePrimerAprobado = nombre;
      alturaPrimerAprobado = altura;
      edadPrimerAprobado = edad;
      sexoPrimerAprobado = sexoIngresado;
      banderaPrimerAprobado = false;
    }     
   respuesta = confirm("Desea ingresar mas datos?"); 
  }
  if(contadorVerano > contadorInvierno && contadorVerano > contadorOtoño && contadorVerano > contadorPrimavera )
  {
    estacionMasNacieron = "verano";
  }
  else
  {
    if(contadorInvierno > contadorOtoño && contadorInvierno > contadorPrimavera)
    {
      estacionMasNacieron = "invierno";
    }
    else
    {
      if(contadorOtoño > contadorPrimavera)
      {
        estacionMasNacieron = "otoño";
      }
      else
      {
        estacionMasNacieron = "primavera";
      }
    }
  }
  if(contadorDesapF > contadorDesapM)
  {
    masDesaprobado = "femenimo"
  }
  else
  {
    masDesaprobado = "masculino"
  }
  promedioNotasMujeresTotal = acumuladorNotasMujer / contadorNotasMujer;
  promedioAprobados = acumuladorAprobados / contadorAprobados;
  promedioNotasMujeres = acumuladorNotaMujeres / contadorNotaF;
  promedioTotalNotas = acumuladorNotas / contadorNotas;

  mensajeA = "El promedio de las notas totales es " + promedioTotalNotas;
  mensajeB = " la nota mas baja es " + notaMasBaja + " y el nombre de ese alumno es " + nombreNotaMasBaja + " y el sexo es " + sexoNotamasBaja;
  mensajeC = " la cantidad de varones que su nota haya sido masyor o igual a 6 es " + contadorVaronesMayorSeis;
  mensajeD = " la nota de la primer mujer ingresada es " + notaPrimerMujer + " y su nombre es " + nombrePrimerMujer;
  mensajeE = " la cantidad de aprobados masculinos son " + contadorVaronesMayorSeis + " y femeninos son " + contadorMAprobadas;
  mensajeF = " el sexo que mas desaprobo es " + masDesaprobado;
  mensajeG = " el promedio de los aprobados es " + promedioAprobados;
  mensajeH = " el promedio de notas de las mujeres es " + promedioNotasMujeresTotal;
  mensajeI = " la nota de la persona mas alta es " + notaPeronaMasAlta + " y el nombre de esa persona es " + nombrePeronaMasAlta;
  mensajeJ = " el primer varon nacido en otoño es " + primerVaron;
  mensajeK =  " el nombre del adolecente mas bajo es " + nombreNotaMasBaja;
  mensajeL = " la estacion del año que mas alumnos nacieron es "  + estacionMasNacieron;
  mensajeM = " el nombre del primer aprobado es " + nombrePrimerAprobado + " la edad es " + edadPrimerAprobado + " su altura es " + alturaPrimerAprobado + " y su sexo es " + sexoPrimerAprobado;

  mensajeFinal = (mensajeA + mensajeB + mensajeC + mensajeD + mensajeE + mensajeF + mensajeG + mensajeH + mensajeI + mensajeJ + mensajeK + mensajeL + mensajeM);
  alert(mensajeFinal);

}*/
/*
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/

/*{
  var nombre;
  var edad;
  var votos;
  var i;
  var nombreCandidatoMasVotos;
  var banderaCandidatoMasVotos;
  var masVotos;
  var menosVotos;
  var candidatoMenosVotos;
  var contadorEdad;
  var acumuladorEdad;
  var promedioEdad;

  contadorEdad = 0;
  acumuladorEdad = 0;
  banderaCandidatoMasVotos = true;

  for(i=0; i<5; i++)
  {
    nombre=prompt("Ingrese el nombre");
    edad=prompt("Ingrese una edad");
    edad=parseInt(edad);
    while(isNaN(edad)==true)
    {
      edad=prompt("ERROR!! Ingrese una edad");
      edad=parseInt(edad);
    }
    votos=prompt("Ingrese la cantidad de votos mayor a 0");
    votos=parseInt(votos);
    while(isNaN(votos)==true || votos <0)
    {
      votos=prompt("Ingrese la cantidad de votos mayor a 0");
      votos=parent(votos);
    }
    if(banderaCandidatoMasVotos == true)
    {
      menosVotos = votos;
      candidatoMenosVotos = nombre;
      nombreCandidatoMasVotos = nombre
      masVotos = votos;
      banderaCandidatoMasVotos = false;
    }
    else
    {
      if(votos > masVotos)
      {
        nombreCandidatoMasVotos = nombre;
        masVotos = votos;
      }
      else
      {
        if(votos < menosVotos)
        {
          candidatoMenosVotos = nombre;
          menosVotos = votos;
        }
      }
    }
    contadorEdad++
    acumuladorEdad = acumuladorEdad + edad;
  }
  promedioEdad = acumuladorEdad / contadorEdad;

  mensajeA = " El candidatos con mas votos es " + nombreCandidatoMasVotos;
  mensajeB = " el candidatos con menos votos es " + candidatoMenosVotos;
  mensajeC = " el promedio de las edades es " + promedioEdad;
  alert(mensajeA + mensajeB + mensajeC);
}*/
/*Ejercicio 1

Ingresar el nombre de los 5 candidatos a presidente de CusCús,  la edad de cada uno y la cantidad
de votos (no menor a cero)  que sacó en las elecciones.
Informar: 
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
total de votos emitidos.

*/
/*{

  var titulo;
  var genero;
  var material;
  var importe;
  var preciolibroMAsCaro;
  var tituloLibroMasCaro;
  var precioLibroMasBaratoDrama;
  var nombreLibroBaratoDrama;
  var respuesta;
  var banderaBaratoDRama;
  var banderaMasCaro;
  var contadorCF;
  var contadorDrama;
  var contadorCFImporte;
  var contadorTerror;
  var porcentajeDrama;
  var porcentajeCF;
  var porcentajeTerror;
  var contadorLibro;
  var mensajeA;
  var mensajeB;;
  var mensajeC;
  var mensajeD;
  var mensajeFinal;

  contadorLibro = 0;
  contadorCF = 0;
  contadorCFImporte = 0;
  contadorDrama = 0;
  contadorTerror = 0;
  banderaMasCaro = true;
  banderaBaratoDRama = true;
  respuesta = true;

  while(respuesta == true)
  {
    titulo = prompt("Ingrese el titulo del libro");
    genero = prompt("Ingrese el genero del libro: ciencia ficcion, drama o terror");
    while(genero != "ciencia ficcion" && genero != "drama" && genero != "terror")
    {
      genero = prompt("ERROR!! Ingrese el genero del libro:  ciencia ficcion, drama o terror");
    }
    material = prompt("Ingrese el material: tapa dura o rustica");
    while( material != "tapa dura" && material != "rustica")
    {
      material = prompt("ERROR!! Ingrese el material: tapa dura o rustica");
    }
    importe=prompt("Ingrese su importe de 1 a 30000");
    importe=parseInt(importe);
    while(isNaN(importe)== true || importe <0 || importe > 30000)
    {
      importe=prompt("ERROR!! Ingrese su importe de 1 a 30000");
     importe=parseInt(importe);
    }
    if(genero == "drama")
    {
      if(banderaBaratoDRama == true)
      {
        nombreLibroBaratoDrama = titulo;
        precioLibroMasBaratoDrama = importe;
        banderaBaratoDRama = false;
      }
      else
      {
        if(importe < precioLibroMasBaratoDrama)
        {
          precioLibroMasBaratoDrama = importe;
          nombreLibroBaratoDrama = titulo;
        }
      }
    }
    if(banderaMasCaro == true)
    {
      preciolibroMAsCaro = importe;
      tituloLibroMasCaro = titulo;
    }
    else
    {
      if(importe > preciolibroMAsCaro)
      {
        preciolibroMAsCaro = importe;
        tituloLibroMasCaro = titulo;
      }
    }
    switch(genero)
    {
      case "ciencia ficcion":
        contadorCF++;
        if(importe > 700)
        {
          contadorCFImporte++;
        }
      break;
      case "drama":
        contadorDrama++;
      break;
      case "terror":
        contadorTerror++;
      break;      

    }
    contadorLibro++;
    porcentajeCF = contadorCF * 100 / contadorLibro;
    porcentajeDrama = contadorDrama * 100 / contadorLibro;
    porcentajeTerror = contadorTerror * 100 / contadorLibro;

    respuesta =confirm("Desea seguir ingresando datos?");
  }
  mensajeA = " el libro mas barato de drama es" + nombreLibroBaratoDrama + " y su importe es " + precioLibroMasBaratoDrama;
  mensajeB = " el titulo del libro mas caro es " + tituloLibroMasCaro;
  mensajeC = " el porcentaje de CF es " + porcentajeCF + " el porcentaje de drama es " + porcentajeDrama + " el porcentaje de terror es " + porcentajeTerror;
  mensajeD = " la cantidad de libros de CF que valkn mas de 700 son " + contadorCFImporte;
  mensajeFinal = (mensajeA + mensajeB + mensajeC + mensajeD);
  alert(mensajeFinal);
}*/
/*Ejercicio 2

Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base
a las ventas de sus productos.
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
a) El libro más barato de drama con su importe.
b) Del libro más caro, el título.
c) Porcentaje de libros de cada género
d) La cantidad de libros que sean de ciencia ficción y cuesten menos de $700.
*/
/*{
  var nombre;
  var edad;
  var peso;
  var altura;
  var nombreJugadorMasJoven;
  var edadJugadorMasJoven;
  var promedioAltura;
  var JugadorMasAlto;
  var pesoJugadorMasAlto;
  var promedioPeso;
  var cantidadJugadoresG;
  var i;
  var banderaJugadorMasJoven;
  var BanderaJugadorMasAlto;
  var contador;
  var acumuladorAltura;
  var acumuladorPeso;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeD;
  var mensajeE;
  var mensajeFinal;

  cantidadJugadoresG = 0;
  acumuladorPeso = 0;
  contador = 0;
  acumuladorAltura = 0;
  banderaJugadorMasJoven = 0;
  BanderaJugadorMasAlto = 0;

  for(i=0; i<2; i++)
  {
    nombre=prompt("Ingrese el nombre");
    edad=prompt("Ingrese una edad");
    edad=parseInt(edad);
    while(isNaN(edad)== true || edad < 0)
    {
      edad=prompt("ERROR!! Ingrese una edad");
      edad=parseInt(edad);
    }
    altura=prompt("Ingrese una altura");
    altura=parseFloat(altura);
    while(isNaN(altura)==true || altura <0)
    {
      altura=prompt("ERROR!! Ingrese una altura");
      altura=parseFloat(altura);
    }
    peso=prompt("Ingrese su peso");
    peso=parseFloat(peso);
    while(isNaN(peso)==true || peso <0)
    {
      peso=prompt("Ingrese su peso");
      peso=parseFloat(peso);
    }
    if(banderaJugadorMasJoven == 0)
    {
      nombreJugadorMasJoven = nombre;
      edadJugadorMasJoven = edad;
      banderaJugadorMasJoven = 1;
    }
    else
    {
      if(edad < edadJugadorMasJoven)
      {
        nombreJugadorMasJoven = nombre;
        edadJugadorMasJoven = edad;
      }
    }
    
    if(BanderaJugadorMasAlto == 0)
    {
      JugadorMasAlto = altura;
      pesoJugadorMasAlto = peso;
      BanderaJugadorMasAlto = 1;
    }
    else
    {
      if(altura > JugadorMasAlto)
      {
        JugadorMasAlto = altura;
        pesoJugadorMasAlto = peso;
      }
    }

    if(altura > 1.7 && peso > 85)
    {
      cantidadJugadoresG++;
    }
    contador++;
    acumuladorAltura = acumuladorAltura + altura;
    acumuladorPeso = acumuladorPeso + peso;
  }
  promedioAltura = acumuladorAltura / contador;
  promedioPeso = acumuladorPeso / contador;

  mensajeA = " el nombre del jugador mas joven es " + nombreJugadorMasJoven;
  mensajeB = " el peso del jugador mas alto es " + pesoJugadorMasAlto;
  mensajeC = " el promedio de altura es" + promedioAltura;
  mensajeD = " el promedio de peso es " + promedioPeso;
  mensajeE = " la cantidad de jugadores que superen 1.7 de altura y 85 kg es " + cantidadJugadoresG;
  mensajeFinal = (mensajeA + mensajeB + mensajeC + mensajeD + mensajeE);

  alert(mensajeFinal);
}*/

/*
Ejercicio 1

Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg.

*/
/*{
  var entradas;
  var indumentaria;
  var accesorios;
  var respuesta;
  var ingresoBruto;
  var ingresoNeto;
  var dolarComprado;
  var masRecaudado;  
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeD;
  var mensajeFinal;
  var diferencia;
  var menosRecaudado;
  var nombreMasRecaudado;

  respuesta = true;

  while(respuesta == true)
  {
    entradas = prompt("Ingrese el monto recaudado por entradas");
    entradas = parseFloat(entradas);
    while(isNaN(entradas)==true)
    {
      entradas = prompt("Ingrese el monto recaudado por entradas");
      entradas = parseFloat(entradas);
    }
    indumentaria = prompt("Ingrese el monto recaudado por indumentaria");
    indumentaria= parseFloat(indumentaria);
    while(isNaN(indumentaria)==true)
    {
      indumentaria = prompt("Ingrese el monto recaudado por indumentaria");
      indumentaria= parseFloat(indumentaria);
    }
    accesorios = prompt("Ingrese el monto recaudado por accesorios");
    accesorios = parseFloat(accesorios);
    while(isNaN(accesorios)==true)
    {
      accesorios = prompt("Ingrese el monto recaudado por accesorios");
      accesorios = parseFloat(accesorios);
    }
    if(indumentaria > accesorios)
    {
      masRecaudado = indumentaria;
      nombreMasRecaudado = "INDUMENTARIA";
      menosRecaudado = accesorios;
      
    }
    else
    {
      masRecaudado = accesorios;
      nombreMasRecaudado = "ACCESORIOS";
      menosRecaudado = indumentaria;
    }
    respuesta = confirm("Desea ingresar mas datos?");
  }
  
  ingresoBruto = entradas + accesorios + indumentaria;
  ingresoNeto = ingresoBruto * 1.18;
  dolarComprado = (ingresoBruto * 35 / 100) / 220;
  diferencia = masRecaudado - menosRecaudado;
  

  mensajeA = "El ingreso bruto del club es " + ingresoBruto;
  mensajeB = " El ingreso neto con el impuesto de 18% es" + ingresoNeto;
  mensajeC = " con el 35% de los socios se pueden comprar " + dolarComprado + " dolares";
  mensajeD = " se recaudo " + masRecaudado + " de " + nombreMasRecaudado;
  mensajeFinal = (mensajeA + mensajeB + mensajeC + mensajeD);

  alert(mensajeFinal);
}*/
/*Ejercicio 2

Se pide gestionar los ingresos en pesos de un club de fútbol.
El equipo tiene ingresos por "ENTRADAS", "INDUMENTARIA", "ACCESORIOS".
Se solicita Tipo de Ingreso, ya mencionados anteriormente y Valor de Ingreso. 
(Puede NO EXISTIR ingresos en alguna de las categorías)

A) Ingreso BRUTO del club.
B) Ingreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO.
C) Del total de ingresos se sabe que un 35% proviene de los socios, se compran dólares al costo de
$220c/u con ese monto, informar cuantos dolares se compraron.
D) Determinar si se recaudó más por INDUMENTARIA o ACCESORIOS. Informando la diferencia 
del mayor con el menor.
(Ej: Se recaudó $x más de ACCESORIOS)*/
/*{
  var nombre;
  var tipo;
  var rareza;
  var precio;
  var cantidad;
  var respuesta;
  var contadorArma;
  var contadorTrampa;
  var contadorMagica;
  var contadorMonstruo;
  var banderaPrecioMAsAlto;
  var masPRecioRarisima;
  var nombreMasPrecioRarisima;
  var masPrecioLejendaria;
  var nombreMasPrecioLejendaria;
  var banderaLejendaria;
  var contadorComun;
  var contadorLejendaria;
  var contadorRara;
  var contadorRarisima;
  var acumuladorPrecio;
  var totalCartas;
  var porcentajeComun;
  var porcentajeRara;
  var porcentajeRarisima;
  var porcentajeLegendaria;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeD;
  var mensajeE;

  acumuladorPrecio = 0;
  contadorComun = 0;
  contadorLejendaria = 0;
  contadorRara = 0;
  contadorRarisima = 0;
  banderaLejendaria = 0;
  banderaPrecioMAsAlto = 0;
  contadorArma = 0;
  contadorMagica = 0;
  contadorMonstruo = 0;
  contadorTrampa = 0;
  respuesta = true;

  while(respuesta == true)
  {
    nombre = prompt("Ingrese el nombre");
    tipo = prompt("Ingrese el tipo: mosnstruo, arma, magica o trampa");
    while(tipo != "monstruo" && tipo != "arma" && tipo != "magica" && tipo != "trampa")
    {
      tipo = prompt("ERROR!! Ingrese el tipo: mosnstruo, arma, magica o trampa");
    }
    rareza = prompt("Ingrese la rareza: comun, rara, rarisima o lejendaria");
    while(rareza != "comun" && rareza != "rara" && rareza != "rarisima" && rareza != "lejendaria")
    {
      rareza = prompt("ERROR!! Ingrese la rareza: comun, rara, rarisima o lejendaria");
    }
    precio=prompt("ingrese un precio entre 250 y 5000");
    precio=parseInt(precio);
    while(isNaN(precio)==true || precio <250 || precio > 5000)
    {
      precio=prompt("ERROR!! ingrese un precio entre 250 y 5000");
      precio=parseInt(precio);
    }  
    cantidad=prompt("Ingrese una cantidad mayor a 0");
    cantidad=parseInt(cantidad);
    while(isNaN(cantidad)==true || cantidad <0)
    {
      cantidad=prompt("ERROR!! Ingrese una cantidad mayor a 0");
      cantidad=parseInt(cantidad);
    }
    switch(tipo)
    {
      case "arma":
        contadorArma++;
      break;
      case "magica":
        contadorMagica++;
      break;
      case "monstruo":
        contadorMonstruo++
      break;
      case "trampa":
        contadorTrampa++;
      break;        
    }
    switch(rareza)
    {
      case "comun":
        contadorComun++;
      break;
      case "lejendaria":
        contadorLejendaria++;  
      break;
      case "rara":
        contadorRara++;
      break; 
      case "rarisima":
        contadorRarisima++ 
      break;
      
    }
    if(banderaPrecioMAsAlto == 0)
    {
      if(rareza == "rarisima")
      {
        masPRecioRarisima = precio;
        nombreMasPrecioRarisima = nombre;
        banderaPrecioMAsAlto = 1;
      }
      else
      {
        if(precio > masPRecioRarisima)
        {
          masPRecioRarisima = precio;
          nombreMasPrecioRarisima = nombre;
        }
      }
    }
    if(banderaLejendaria == 0)
    {
     if(rareza == "lejendaria")
     {
       nombreMasPrecioLejendaria = nombre;
       masPrecioLejendaria = precio;
       banderaLejendaria = 1
     }
     else
     {
      if(precio > masPrecioLejendaria)
      {
        masPrecioLejendaria = precio;
        nombreMasPrecioLejendaria = nombre;
      }
     }
    }
    totalCartas = contadorArma + contadorComun + contadorLejendaria + contadorMagica;
    porcentajeComun = contadorComun * 100 / totalCartas;
    porcentajeLegendaria = contadorLejendaria * 100 /totalCartas;
    porcentajeRara = contadorRara * 100 /totalCartas;
    porcentajeRarisima = contadorRarisima * 100 / totalCartas ;
    acumuladorPrecio = acumuladorPrecio + precio;
    
    


    respuesta = confirm("Desea ingresar mas datos?");
  }
  mensajeA = "las cantidades son lqa siguientes: tipo arma " + contadorArma + " tipo monstruo: " + contadorMonstruo + " tipo magica " + contadorMagica + " tipo trampa " + contadorTrampa;
  mensajeB
  mensajeC = " de las cartas rarisimas la mas cara es " + masPRecioRarisima + " y su nombre es " + nombreMasPrecioRarisima + " de las cartas lejendarias la mas cara es " + masPrecioLejendaria + " y su nombre es " + nombreMasPrecioLejendaria;
  mensajeD = " el valos de la coleccion entera es " + acumuladorPrecio;
  mensajeE = " el porcentaje de comunes es " + porcentajeComun + " el porcentaje de raras es " + porcentajeRara + " el porcentaje de lejendarias es " + porcentajeLegendaria + " y el porcentaje de rarisimas es " + porcentajeRarisima;
  alert(mensajeA + mensajeC + mensajeD + mensajeE);
}*/
/*Ejercicio 3

Un aficionado a las cartas coleccionables desea organizar su coleccion, para esto necesita 
ingresar en un programa:
nombre, tipo (validar monstruo, arma, magica, trampa), rareza validar (comun, rara, rarisima,
legendaria), precio (validar entre 250$ y 5000$) y cantidad del mismo tipo de carta (no menor a 1), 
dejar ingresar hasta que el usuario quiera e informar lo siguiente:
A) de los distintos tipos de cartas, la cantidad total de cada tipo
B) el nombre de la carta mas repetida de cada tipo
C) de las cartas rarisimas y legendarias, la que mas precio tiene y su nombre
D) el valor de la coleccion entera
E) informar el porcentaje de cartas de cada tipo de rareza (ejemplo 25% de cartas comunes, 25% raras, 
25% rarisimas 25% legendarias)

*/
{
  var nombre;
  var edad;
  var cantAsientos;
  var CantKm;
  var destino;
  var asientos;
  var respuesta;
  var recaudaciónBruta;
  var acumuladorAsientos;
  var acumuladorEdad;
  var contadorEdad;
  var promedioEdad;
  var porcentaje;
  var precioFinal;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeD;
  var porcentajeAsientos;

  contadorEdad = 0;
  acumuladorEdad = 0;
  acumuladorAsientos = 0;
  respuesta = true;
  asientos = 1500;

  while(respuesta == true)
  {
    nombre = prompt("Ingrese un nombre");
    edad = prompt("Ingrese una edad entre 13 y 85");
    edad=parseInt(edad);
    while(isNaN(edad)==true || edad <13 || edad>85)
    {
      edad = prompt("Ingrese una edad entre 13 y 85");
      edad=parseInt(edad);
    }
    cantAsientos=prompt("Ingrese cantidad de asientos, cada uno cuesta $1500");
    cantAsientos=parseInt(cantAsientos);
    while(isNaN(cantAsientos)==true || cantAsientos <1 || cantAsientos >5)
    {
      cantAsientos=prompt("Ingrese cantidad de asientos, cada uno cuesta $1500");
      cantAsientos=parseInt(cantAsientos);
    }
    CantKm=prompt("Ingrese los km entre 3000 y 18000");
    CantKm=parseInt(CantKm);
    while(isNaN(CantKm)==true || CantKm <3000 || CantKm>18000)
    {
      CantKm=prompt("Ingrese los km entre 3000 y 18000");
      CantKm=parseInt(CantKm);
    }
    destino=prompt("Ingrese el destino: rio de janeiro, italia, cancun, japon");
    while(destino != "rio de janeiro" && destino != "cancun" && destino != "italia" && destino != "japon")
    {
      destino=prompt("Ingrese el destino: rio de janeiro, italia, cancun, japon");
    }
    acumuladorAsientos = acumuladorAsientos + cantAsientos;
    acumuladorEdad = acumuladorEdad + edad;
    contadorEdad++
    switch(destino)
    {
      case "cancun":
        porcentaje = 0.95;
      break;
      case "rio de janeiro":
        porcentaje = 0.90;
      break;
      case "italia":
        porcentaje = 1.25;
      break;
      case "japon":
        porcentaje = 1.40;
      break;      
    }
    if(cantAsientos == 1)
    {
      porcentajeAsientos = 0.90;
    }
    else
    {
      if(cantAsientos < 4)
      {
        porcentajeAsientos = 0.85;
      }
      else
      {
        porcentajeAsientos = 0.80;
      }
    }



    respuesta=confirm("desea ingresar mas datos?");
  }
  promedioEdad = acumuladorEdad / contadorEdad;
  recaudaciónBruta = acumuladorAsientos * asientos;
  precioFinal = recaudaciónBruta * porcentaje * porcentajeAsientos;
  mensajeA = "La recaudacion bruta del vuelo es " + recaudaciónBruta;
  mensajeB = " la cantidad total de asientos ocupados es " + acumuladorAsientos;
  mensajeC = " la edad promedio por pasajeros es " + promedioEdad;
  mensajeD = " el precio final " + precioFinal;
  alert(mensajeA + mensajeB + mensajeC + mensajeD);
  
}
/*Ejercicio 3

UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar 
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros 
el mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, italia, cancún, japón), 
el precio por asiento es 1500 pesos, informar:
1) la recaudación total bruta del vuelo
2) la cantidad total asientos ocupados
3) la edad promedio por pasajero
4) El precio Final:
Tener en cuenta que:

dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento

según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento


*/
/*{
  var respuesta;
  var nombre;
  var duracionViaje;
  var turno;
  var tarifaInicial;
  var porcentaje;
  var banderaTurnoDia;
  var nombreMasTiempoDia;
  var Mastiempo;
  var nombreMasTiempoNoche;
  var masTiempoNoche;
  var banderaMasTiempoNoche;
  var acumuladorViaje;
  var contadorViaje;
  var contadorMaria;
  var contadorJuan;
  var contadorPedro;
  var acumuladorMaria;
  var acumuladorJuan;
  var acumuladorPedro;
  var contadorMasTreinta;


  contadorMasTreinta = 0;
  acumuladorJuan = 0;
  acumuladorMaria = 0;
  acumuladorPedro = 0;
  contadorJuan = 0;
  contadorMaria = 0;
  contadorPedro = 0;
  contadorViaje = 0;
  acumuladorViaje = 0;
  banderaMasTiempoNoche = 0;
  banderaTurnoDia = 0;
  tarifaInicial = 10;
  respuesta = true;
  
  while(respuesta == true)
  {
    nombre=prompt("Ingrese el nombre juan, maria o pedro");
    while(nombre!= "juan"|| nombre != "maria"|| nombre != "pedro")
    {
      nombre=prompt("Ingrese el nombre juan, maria o pedro");
    }
    duracionViaje=prompt("ingrese la duracion del viaje en minutos desde 1 a 300");
    duracionViaje=parseInt(duracionViaje);
    while(isNaN(duracionViaje)==true || duracionViaje <1 || duracionViaje >300)
    {
      duracionViaje=prompt("ingrese la duracion del viaje en minutos desde 1 a 300");
      duracionViaje=prompt("ingrese la duracion del viaje en minutos desde 1 a 300");
    }
    turno=prompt("Ingrese turno dia o noche");
    while(turno != "dia" || turno != "noche");
    {
      turno=prompt("Ingrese turno dia o noche");
    }
    if(turno == "dia")
    {
      if(banderaTurnoDia == 0)
      {
        Mastiempo = duracionViaje;
        nombreMasTiempoDia = nombre;
        banderaTurnoDia = 1;
      }
      else
      {
        if(duracionViaje > Mastiempo)
        {
          Mastiempo = duracionViaje;
          nombreMasTiempoDia = nombre;
        }
      }
    }
    else
    {
      if(duracionViaje > 30)
      {
        contadorMasTreinta++;
      }
      if(banderaMasTiempoNoche == 0)
      {
        Mastiempo = duracionViaje;
        nombreMasTiempoDia = nombre;
        banderaMasTiempoNoche = 1;
      }
      else
      {
        if(duracionViaje > masTiempoNoche)
        {
          Mastiempo = duracionViaje;
          nombreMasTiempoDia = nombre;
        }
      }
    }
    switch(nombre)
    {
      case "juan":
        contadorJuan++;
        acumuladorJuan = acumuladorJuan + duracionViaje;
      break;
      case "maria":
        contadorMaria++;
        acumuladorMaria = acumuladorMaria + duracionViaje;
      break;
      case "pedro":
        contadorPedro++;
        acumuladorPedro = acumuladorPedro + duracionViaje;
      break;    

    }
    contadorViaje++;
    acumuladorViaje = acumuladorViaje + duracionViaje;

    respuesta = confirm("Desea seguir ingresando datos?");
  }
}*/
/*Una empresa de radiotaxis le solicita la creacion de una aplicacion simple mediante la cual 
se registraran los viajes realizados en ciclos de 24hs
 y se volcara mas tarde a una base de datos para recolectar informacion.
  Se pide el ingreso (hasta que el usuario quiera):
- Nombre del empleado ("Juan", "Maria", "Pedro"),
- Duracion del viaje en minutos (Desde 1 hasta 300),
- Horario de trabajo ("dia", "noche").
El taximetro empieza en 10$ y le va sumando 1$ por cada minuto del viaje.
Los viajes nocturnos tienen un costo adicional del 20% sobre el precio final del viaje.
Se pide calcular e informar: 
a) El total recaudado entre los tres empleados.
b) El nombre del empleado que mas tiempo trabajo en horario diurno.
c) El nombre del empleado con el viaje mas largo en horario nocturno.
d) El duracion promedio de los viajes.
e) Porcentaje de viajes realizados por cada empleado.
f) Cantidad de viajes nocturnos con duracion mayor a 30minutos. */
/*{
  var respuesta;
  var marca;
  var peso;
  var importe;
  var tipo;
  var contadorImporte;
  var acumuladorImporte;
  var promedioTotal;
  var marcaMasLiviano;
  var importeMasLiviano;
  var masLiviano;
  var banderaMasLiviano;
  var masPesado;
  var marcaMasPesado;
  var banderaMasPesado;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeFinal;

  banderaMasPesado = 0;
  banderaMasLiviano = 0;
  contadorImporte = 0;
  acumuladorImporte = 0;
  respuesta = true;

  while(respuesta == true)
  {
    marca=prompt("Ingrese la marca");
    peso=prompt("Ingrese el peso entre 917 y 3000 kg");
    peso = parseInt(peso);
    while(isNaN(peso)==true || peso <917 || peso >3000)
    {
      peso=prompt("Ingrese el peso entre 917 y 3000 kg");
      peso = parseInt(peso);
    }
    importe=prompt("Ingrese un importe mayor a 600000");
    importe = parseInt(importe);
    while(isNaN(importe)==true || importe <600000)
    {
      importe=prompt("Ingrese un importe mayor a 600000");
      importe = parseInt(importe);
    }
    tipo=prompt("Ingrese si es sedan o coupe");
    while(tipo != "sedan" && tipo != "coupe")
    {
      tipo=prompt("Ingrese si es sedan o coupe");
    }
    contadorImporte++;
    acumuladorImporte = acumuladorImporte + importe;

    if(tipo == "sedan")
    {
      if(banderaMasLiviano == 0)
      {
        masLiviano = peso;
        marcaMasLiviano = marca;
        importeMasLiviano = importe;
        banderaMasLiviano = 1;
      }
      else
      {
        if(peso < masLiviano)
        {
          masLiviano = peso;
          marcaMasLiviano = marca;
          importeMasLiviano = importe;
        }
      }
    }
    else
    {
      if(banderaMasPesado == 0)
      {
        masPesado = peso;
        marcaMasPesado = marca;
        banderaMasPesado = 1;
      }
      else
      {
        if(peso > masPesado)
        {
          masPesado = peso;
          marcaMasPesado = marca;
        }
      }
    }


    respuesta = confirm("Desea seguir ingresando datos?")
  }
  promedioTotal = acumuladorImporte / contadorImporte;
  mensajeA = " El promedio total es " + promedioTotal;
  mensajeB = " La marca del mas liviano sedan es " + marcaMasLiviano + " y el importe es " + importeMasLiviano;
  mensajeC = " el auto mas pesado coupe es " + marcaMasPesado;
  mensajeFinal = mensajeA + mensajeB + mensajeC;
  alert(mensajeFinal);
}*/
/*Una agencia de autos nos contrata para generarle un software que permita el ingreso de sus autos,
 sin limite de
ingresos, al comenzar la carga de datos debemos pedir:
- Marca.
- El Peso en kg. del auto que ingresa (tiene que estar entre 917 y 3900).
- El importe del auto en pesos (mayor a 600000).
- Validar que tipo de auto es sedan o coupé.
Debemos informar:
a) Mostrar el promedio total del importe de todos los autos que ingresaron.
b) Mostrar La marca y el importe del auto más liviano que sea sedan.
c) El auto mas pesado que sea coupé.
*/
/*{
  var respuesta;
  var nombre;
  var destino;
  var cantidadPersonas;
  var tipoClase;
  var contadorPromoc;
  var contadorEjec;
  var contadorTuris;
  var masPasajero;
  var banderaMasUshuaia;
  var nombreMasUshuaia;
  var masUshuaia;
  var promedioPersonas;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeFinal;
  var acumuladorEjecutiva;

  acumuladorEjecutiva = 0;
  banderaMasUshuaia = 0;
  contadorEjec = 0;
  contadorPromoc = 0;
  contadorTuris = 0;
  respuesta = true;

  while(respuesta == true)
  {
    nombre=prompt("Ingrese el nombre");
    destino=prompt("Ingrese el destino: ushuaia, cordoba o jujuy");
    while(destino!= "cordoba" && destino != "ushuaia" && destino != "jujuy")
    {
      destino=prompt("Ingrese el destino: ushuaia, cordoba o jujuy");
    }
    cantidadPersonas=prompt("Ingrese las personas mayor a 0 y menor a 250");
    cantidadPersonas=parseInt(cantidadPersonas);
    while(isNaN(cantidadPersonas)==true || cantidadPersonas<1 || cantidadPersonas >250)
    {
      cantidadPersonas=prompt("Ingrese las personas mayor a 0 y menor a 250");
      cantidadPersonas=parseInt(cantidadPersonas);
    }
    tipoClase=prompt("Ingrese la clase promocional, turista o ejecutiva");
    while(tipoClase != "promocional" && tipoClase != "turista" && tipoClase != "ejecutiva")
    {
      tipoClase=prompt("Ingrese la clase promocional, turista o ejecutiva");
    }
    switch(tipoClase)
    {
      case "promocional":
        contadorPromoc++;
      break;
      case "turista":
        contadorTuris++;
      break;
      case "ejecutiva":
        contadorEjec++;  
        acumuladorEjecutiva = acumuladorEjecutiva + cantidadPersonas;
      break;    
    }
    if(contadorEjec > contadorPromoc || contadorEjec > contadorTuris)
    {
      masPasajero = "ejecutiva"
    }
    else
    {
      if(contadorPromoc > contadorTuris)
      {
        masPasajero = "promocional";
      }
      else
      {
        masPasajero = "turista";
      }
    }

    if(destino == "ushuaia")
    {
      if(banderaMasUshuaia == 0)
      {
        masUshuaia = cantidadPersonas;
        nombreMasUshuaia = nombre;
        banderaMasUshuaia = 1;
      }
      else
      {
        if(cantidadPersonas > masUshuaia)
        {
          masUshuaia = cantidadPersonas;
          nombreMasUshuaia = nombre;
        }
      }
    }


    respuesta = confirm("Desea ingresar mas datos?");
  }
  promedioPersonas = acumuladorEjecutiva / contadorEjec;
  mensajeA = " la clase con mas personas es " + masPasajero;
  mensajeB = " el nombre que mas lleva a ushuaia es " + nombreMasUshuaia;
  mensajeC = " el promedio de personas es " + promedioPersonas;
  mensajeFinal = mensajeA + mensajeB + mensajeC;
  alert(mensajeFinal);
}*/
/*Daniel Richter ej 2
La aerolínea UTN viajes nos pide generar un software para vender sus packs de viajes, 
la carga de datos pedirá lo
siguiente:
- Nombre del piloto.
- Destino (“Ushuaia”, “Córdoba” o ”Jujuy”).
- Cantidad de personas en el avión (tiene que ser mayor a 0 y menor 250).
- Tipo de clase en la que viaja (promocional, turista, ejecutiva).
Debemos informar:
a) La clase con más pasajeros.
b) El nombre del piloto que lleva más pasajeros a Ushuaia.
c) El promedio de personas que usan la clase Ejecutiva.
*/
/*{
  var respuesta;
  var nombreEquipo;
  var golesHechos;
  var golesRecibidos;
  var promedioVictorias;
  var mensaje;
  var acumuladorVictoria;
  var contadorVictoria;
  var contadorGolesHechos;
  var contadorGolesRecibidos;
  var banderaPrimerVictoria;
  var golesPrimerVictoria;
  var nombrePrimerVictoria;
  var localia;
  var contadorDerrota;
  var acumuladorDerrota;
  var contadorVicLocal
  var acumladorVicLocal;
  
  contadorVicLocal = 0;
  acumladorVicLocal = 0;
  acumuladorDerrota = 0;
  contadorDerrota = 0;
  banderaPrimerVictoria = 0;
  contadorGolesRecibidos = 0;
  contadorGolesHechos = 0;
  acumuladorVictoria = 0;
  contadorVictoria = 0;
  respuesta = true;
  
  while(respuesta == true)
  {
    nombreEquipo = prompt("Ingrese el nombre del equipo");
    localia = prompt("Ingrese local o visitante");
    while(localia != "local" || localia != "visitante")
    {
      localia = prompt("Ingrese local o visitante");
    }
    golesHechos = prompt("Ingrese la cantidad de goles mayor a 0");
    golesHechos = parseInt(golesHechos);
    while(isNaN(golesHechos)==true || golesHechos <0)
    {
      golesHechos = prompt("Ingrese la cantidad de goles mayor a 0");
      golesHechos = parseInt(golesHechos);
    }
    golesRecibidos = prompt("Ingrese la cantidad de goles mayor a 0");
    golesRecibidos = parseInt(golesRecibidos);
    while(isNaN(golesRecibidos)==true || golesRecibidos <0)
    {
      golesRecibidos = prompt("Ingrese la cantidad de goles mayor a 0");
      golesRecibidos = parseInt(golesRecibidos);
    }
    if(golesHechos < golesRecibidos)
    {
      contadorDerrota++;
      mensaje = "derrota";
    }
    else
    {
      if(golesHechos == golesRecibidos)
      {
        mensaje = "empate";
      }
      else
      {
        mensaje = "victoria"
        contadorVictoria++;
        acumuladorVictoria = acumuladorVictoria + contadorVictoria;
      }
    }
    if(golesHechos > 0)
    {
      contadorGolesHechos++;
    }
    else
    {
      if(golesRecibidos >0)
      {
        contadorGolesRecibidos++;
      }
    }
    if(banderaPrimerVictoria == 0)
    {
      golesPrimerVictoria = golesHechos;
      nombrePrimerVictoria = nombreEquipo;
      banderaPrimerVictoria = 1;
    }
    if(localia == "local")
    {
      contadorVicLocal++;
      acumladorVicLocal = acumladorVicLocal + contadorVicLocal;
    }


    
    promedioVictorias = acumuladorVictoria / contadorVictoria;
    respuesta = confirm("Desea ingresar mas datos?");
  }*/




/*3.  Debemos realizar un programa que lleve el registro de los partidos jugados por nuestro equipo.
     No se sabe cuántos.
    Se deberá cargar en cada entrada el nombre del equipo contrario, si jugamos de local o 
    visitante(validar) ,
     los goles hechos por nuestro equipo y los goles hechos por el equipo contrario (validar,
         la cantidad de goles no puede ser negativo).
    El programa deberá evaluar la cantidad de goles de cada equipo y determinará si fue empate,
     victoria o derrota.
    Al final se deberá mostrar:
    a) el promedio de victorias de nuestro equipo
    b) cantidad de goles hechos y recibidos.
    c) cantidad de goles realizado en nuestra primer victoria y el nombre del equipo rival
    d) promedio de victorias como local y promedio de derrotas como visitante.
    e) nombre y cantidad de goles del equipo que nos hizo más goles.*/