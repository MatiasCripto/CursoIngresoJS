/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
/*
{
	let saludo;

	saludo = "Soy Kiara"
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
/*{
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
  
}*/
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

/*{
  var nombre;
  var edad;
  var peso;
  var altura;
  var i;
  var banderaMasJoven;
  var jugadorMasJoven;
  var nombreJugadoMasJoven;
  var banderaMAsALto;
  var pesoMasALto;
  var masAlto;
  var contadorAltura;
  var acumuladorAltura;
  var promedioAltura;
  var acumuladorPeso;
  var contadorPeso;
  var promedioPeso;
  var contadorJugadoresG;

  contadorJugadoresG = 0;
  acumuladorPeso = 0;
  contadorPeso = 0;
  acumuladorAltura = 0;
  contadorAltura = 0;
  banderaMasJoven = 0;
  banderaMAsALto = 0;

  for(i=0;i<11;i++)
  {
    nombre=prompt("Ingrese su nombre");
    edad = prompt("Ingrese la edad");
    edad=parseInt(edad);
    while(isNaN(edad)==true || edad <0)
    {
      edad = prompt("Ingrese la edad");
      edad=parseInt(edad);
    }
    peso=prompt("Ingrese el peso mayor a 0");
    peso=parseFloat(peso);
    while(isNaN(peso)==true || peso <0)
    {
      peso=prompt("Ingrese el peso mayor a 0");
      peso=parseFloat(peso);
    }
    altura=prompt("Ingrese la altura en cm mayor a 0");
    altura=parseFloat(altura);
    while(isNaN(altura)== true || altura<0)
    {
      altura=prompt("Ingrese la altura en cm mayor a 0");
      altura=parseFloat(altura);
    }
    if(banderaMasJoven == 0)
    {
      nombreJugadoMasJoven = nombre;
      jugadorMasJoven = edad;
      banderaMasJoven = 1;
    }
    else
    {
      if(edad < jugadorMasJoven)
      {
        nombreJugadoMasJoven = nombre;
        jugadorMasJoven = edad;
      }
    }
    if(banderaMAsALto)
    {
      pesoMasALto = peso;
      masAlto = altura;   
      banderaMAsALto = 1;   
    }
    else
    {
      if(altura > masAlto)
      {
        pesoMasALto = peso;
        masAlto = altura;   
      }
    }
    if(altura > 1.7 && peso >85)
    {
      contadorJugadoresG++

    }
    contadorAltura++;
    acumuladorAltura = acumuladorAltura + altura;
    contadorPeso++;
    acumuladorPeso = acumuladorPeso + peso;
  }
  promedioPeso = acumuladorPeso / contadorPeso;
  promedioAltura = acumuladorAltura / contadorAltura;

} */
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
  var nombre;
  var edad;
  var cantidadVistas;
  var tipoSuscriptor;
  var respuesta;
  var nombreSuscMasViejo;
  var suscMasViejo;
  var banderaSuscMasViejo;
  var acumuladorVistas;
  var contadorVistas;
  var promedioVistas;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeFinal;

  contadorVistas = 0;
  acumuladorVistas = 0;
  banderaSuscMasViejo = 0;
  respuesta = true;

  while(respuesta == true)
  {
    nombre = prompt("Ingrrese el nombre");
    edad = prompt("Ingrese la edad mayor a 10");
    edad=parseInt(edad);
    while(isNaN(edad)==true || edad <11) 
    {
      edad = prompt("Ingrese la edad mayor a 10");
      edad=parseInt(edad);
    }
    cantidadVistas=prompt("ingrese la cantidadd mayor a 0");
    cantidadVistas=parseInt(cantidadVistas);
    while(isNaN(cantidadVistas)==true || cantidadVistas<0)
    {
      cantidadVistas=prompt("ingrese la cantidadd mayor a 0");
      cantidadVistas=parseInt(cantidadVistas);
    }
    tipoSuscriptor=prompt("Ingrese el tipo: follow o suscriptor");
    while(tipoSuscriptor != "follow" && tipoSuscriptor != "suscriptor")
    {
      tipoSuscriptor=prompt("Ingrese el tipo: follow o suscriptor");
    }
    if(tipoSuscriptor == "suscriptor")
    {
      if(banderaSuscMasViejo == 0)
      nombreSuscMasViejo = nombre;
      suscMasViejo = edad;
      banderaSuscMasViejo = 1;
    }
    else
    {
      if(edad > suscMasViejo)
      {
        nombreSuscMasViejo = nombre;
        suscMasViejo = edad;
      }
    }

    contadorVistas++;
    acumuladorVistas = acumuladorVistas + cantidadVistas;

    respuesta = confirm("Desea ingresar mas datos?");

  }
  promedioVistas = acumuladorVistas / contadorVistas;
  mensajeA = "El nombre del suscriptor mas viejo es " + nombreSuscMasViejo;
  mensajeB = " la canatidad de viwers es " + acumuladorVistas;
  mensajeC = " el promedio de vistas es " + promedioVistas;
  mensajeFinal = mensajeA + mensajeB + mensajeC;
  alert(mensajeFinal);
}*/
/*{
  var i;
  var tipo;
  var cantidad;
  var marca;
  var precio;
  var acumuladorProductos;
  var contadorProductos;
  var promedioStock;
  var banderaPelotaMasCara;
  var marcaPelotaMasCara;
  var pelotaMasCara;
  var acumuladorCamiseta;
  var acumuladorPantalon;
  var acumuladorPelota;
  var tipoMasCargas;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeFinal;

  acumuladorPelota = 0;
  acumuladorPantalon = 0;
  acumuladorCamiseta = 0;
  banderaPelotaMasCara = 0;
  acumuladorProductos = 0;
  contadorProductos = 0;

  for(i=0;i<2;i++)
  {
    tipo = prompt("ingrese pantalon, camiseta o pelotas");
    while(tipo != "pantalon" && tipo != "camiseta" && tipo != "pelota")
    {
      tipo = prompt("ingrese pantalon, camiseta o pelotas");
    }
    cantidad = prompt("Ingrese la cantidad de stock");
    cantidad = parseInt(cantidad);
    while(isNaN(cantidad)==true || cantidad <0)
    {
      cantidad = prompt("Ingrese la cantidad de stock");
      cantidad = parseInt(cantidad);
    }
    marca = prompt("Ingrese lotto, fila o lacoste");
    while(marca != "lotto" && marca != "fila" && marca != "lacoste")
    {
      marca = prompt("Ingrese lotto, fila o lacoste");
    }
    precio = prompt("Ingrese un precio entre 900 y 25000");
    precio = parseInt(precio);
    while(isNaN(precio)==true || precio <900 || precio >25000)
    {
      precio = prompt("Ingrese un precio entre 900 y 25000");
      precio = parseInt(precio);
    }
    if(banderaPelotaMasCara == 0)
    {
      if(tipo == "pelota")
      {
        pelotaMasCara = precio;
        marcaPelotaMasCara = marca;
        banderaPelotaMasCara = 1;
      }
      else
      {
        if(precio > pelotaMasCara)
        {
          pelotaMasCara = precio;
          marcaPelotaMasCara = marca;
        }
      }

    }
    switch(tipo)
    {
      case "camiseta":
        acumuladorCamiseta = acumuladorCamiseta + precio;
      break;
      case "pantalon":
        acumuladorPantalon = acumuladorPantalon + precio;
      break;  
      case "pelota":
        acumuladorPelota = acumuladorPelota + precio;
      break;   
    }
    contadorProductos++;
    acumuladorProductos = acumuladorProductos + cantidad;


  }
  if(acumuladorCamiseta > acumuladorPantalon && acumuladorCamiseta > acumuladorPelota)
  {
    tipoMasCargas = "camiseta"
  }
  else
  {
    if(acumuladorPantalon > acumuladorPelota)
    {
      tipoMasCargas = "pantalon"
    }
    else
    {
      tipoMasCargas = "pelota"
    }
  }
  promedioStock = acumuladorProductos / contadorProductos;

  mensajeA = " el promedio de stock es " + promedioStock;
  mensajeB = " la marca de la pelota mas cara es " + marcaPelotaMasCara;
  mensajeC = " el tipo con mas cargas es " + tipoMasCargas;
  mensajeFinal = mensajeA + mensajeB + mensajeC;
  alert(mensajeFinal);
}*/
/*{
  var nombre;
  var empresa;
  var destino;
  var horas;
  var respuesta;
  var contadrPlus;
  var contadorFlecha;
  var contadorPlus;
  var contadorCheva;
  var empresaMasViajo;
  var banderaChofer;
  var nombreChofer;
  var menosHoras;
  var acumuladorHoras;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeFinal;

  acumuladorHoras = 0;
  banderaChofer = 0;
  contadorCheva = 0;
  contadorPlus = 0;
  contadorFlecha = 0;
  contadrPlus = 0;
  respuesta = true;

  while(respuesta == true)
  {
    nombre = prompt("Ingrese el nombre");
    empresa = prompt("Ingrese la emprewsa: plusmar, flechabus o chevalier");
    while(empresa != "flecahbus" && empresa != "plusmar" && empresa != "chevalier")
    {
      empresa = prompt("Ingrese la emprewsa: plusmar, flechabus o chevalier");
    }
    destino = prompt("Ingrese el destino: jujuy, cordoba o chubut");
    while(destino != "cordoba" && destino != "jujuy" && destino != "chubut")
    {
      destino = prompt("Ingrese el destino: jujuy, cordoba o chubut");
    }
    horas = prompt("Ingrese la cantidad de horas mayor a 0");
    horas = parseInt(horas);
    while(isNaN(horas)==true || horas < 0)
    {
      horas = prompt("Ingrese la cantidad de horas mayor a 0");
      horas = parseInt(horas);
    }
    switch(empresa)
    {
      case "chevalier":
        contadorCheva++;
      break;
      case "flecahbus":
        contadorFlecha++;
      break;
      case "plusmar":
        contadorPlus++;
      break;      
    }
    if(banderaChofer == 0)
    {
      menosHoras = horas;
      nombreChofer = nombre;
      banderaChofer = 1;
    }
    else
    {
      if(horas < menosHoras)
      {
        menosHoras = horas;
        nombreChofer = nombre;
      }
    }

    acumuladorHoras = acumuladorHoras + horas;
    respuesta = confirm("Desea ingresar mas datos?");
  }

  
  if(contadorCheva > contadorFlecha && contadorCheva > contadorPlus)
  {
    empresaMasViajo = "chevalier";
  }
  else
  {
    if(contadorFlecha > contadorPlus)
    {
      empresaMasViajo = "flechabus"
    }
    else
    {
      empresaMasViajo = "plusmar";
    }
  }
  mensajeA = "la empresa mas elegida es " + empresaMasViajo;
  mensajeB = " El nombre del chofer que menos hras viajo es " +nombreChofer;
  mensajeC = " la cantidad total de horas es " + acumuladorHoras;
  mensajeFinal = mensajeA + mensajeB + mensajeC;
  alert(mensajeFinal);

}*/

/*{
  var nombre;
  var genero;
  var tipoDeventa;
  var importe;
  var i;
  var discosMasBarato;
  var importeDiscoMasBarato;
  var banderaDiscoMasBarato;
  var banderaVentaMasCara;
  var ventaMasCara;
  var nombreVentaMasCara;
  var contadorTotal;
  var acumuladorTotal;
  var promedioTotal;
  var contadorVentasMemoria;
  var mensajeA;
  var mensajeB;
  var mensajeC;
  var mensajeD;
  var mensajeFinal;

  contadorVentasMemoria = 0;
  contadorTotal = 0;
  acumuladorTotal = 0;
  banderaVentaMasCara = 0;
  banderaDiscoMasBarato = 0;

  for(i=0;i<2;i++)
  {
    nombre=prompt("Ingrese el nombre del producto");
    genero = prompt("Ingrese el genero: memorias, discos, motherboards");
    while(genero != "memorias" && genero != "discos" && genero != "motherboards")
    {
      genero = prompt("Ingrese el genero: memorias, discos, motherboards");
    }
    tipoDeventa = prompt("ingrese online o local");
    while(tipoDeventa != "online" && tipoDeventa != "local")
    {
      tipoDeventa = prompt("ingrese online o local");
    }
    importe=prompt("Ingrese el importe entre 0 y 30000");
    importe=parseInt(importe);
    while(isNaN(importe)==true || importe< 0 || importe > 30000)
    {
      importe=prompt("Ingrese el importe entre 0 y 30000");
      importe=parseInt(importe);
    }
    if(genero == "discos")
    {

      if(banderaDiscoMasBarato == 0)
      {
        discosMasBarato = nombre;
        importeDiscoMasBarato = importe;
        banderaDiscoMasBarato = 1;
      }
    else
    {
      if(importe < importeDiscoMasBarato)
      {
        discosMasBarato = nombre;
        importeDiscoMasBarato = importe;
      }
    }
    }

    if(banderaVentaMasCara == 0)
    {
      ventaMasCara = importe;
      nombreVentaMasCara = nombre;
      banderaVentaMasCara = 1;
    }
    else
    {
      if(importe > ventaMasCara)
      {
        ventaMasCara = importe;
        nombreVentaMasCara = nombre;
      }
    }
    if(genero == "memoria" && importe < 850)
    {
      contadorVentasMemoria++;
    }
    contadorTotal++;
    acumuladorTotal = acumuladorTotal + importe;

  }
  promedioTotal = acumuladorTotal / contadorTotal;
  mensajeA = " El mas baratos de los discos cuesta " + importeDiscoMasBarato + " y su nombre es " + discosMasBarato;  
  mensajeB = " el nombre del producto d ela venta mas cara es " + nombreVentaMasCara;
  mensajeC = " el importe promedio total es " + promedioTotal;
  mensajeD = " la cantidad de memorias que valen menos que $850 son " + contadorVentasMemoria;
  mensajeFinal = mensajeA + mensajeB + mensajeC + mensajeD;
  alert(mensajeFinal);
}
/*Una casa de computación que se especializa en venta de insumos importados
 desea calcular ciertas métricas en base a las ventas de sus productos.
  Se ingresa de cada venta: (Ingresa mínimo 5 ventas)
-Nombre del producto.
-Género: (Memorias – Discos – Motherboards)
-Tipo de Venta: (Online – Local)
-Importe: (No pueden ser números negativos ni mayor a los 30000)
Se pide:
A- El más barato de “Discos” con su importe .
B- De la venta más cara, el nombre del producto.
C- El importe promedio del total.
D- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.*/

/*{
  var nombre;
  var edad;
  var tipoVehiculo;
  var preferencia;
  var precio;
  var cantidad;
  var i;
  var banderaCompraMasGrande;
  var compraMasGrande;
  var edadCompraMasGrande;
  var nombreCompraMasGrande;
  var porcentaje;
  var banderaMinima;
  var cantidadMinima;
  var contadorAuto;
  var contadorCamioneta;
  var contadorPickup;
  var contadorNafta;
  var contadorDiesel;
  var contador;
  var banderaMasViejo;
  var nombreMasViejo;
  var masViejo;
  var porcentajeAuto;
  var porcentajePickup;
  var porcentajeCamioneta;
  
  banderaMasViejo = 0;
  contador = 0;
  contadorDiesel = 0;
  contadorNafta = 0;
  contadorAuto = 0;
  contadorCamioneta = 0;
  contadorPickup = 0;
  banderaMinima = 0;
  banderaCompraMasGrande = 0;

  for(i=0;i<10;i++)
  {
    nombre = prompt("Ingrese el nombre");
    edad = prompt("Ingrese la edad mayor a 18");
    edad = parseInt(edad);
    while(isNaN(edad) == true || edad < 18)
    {
      edad = prompt("Ingrese la edad mayor a 18");
      edad = parseInt(edad);
    }
    tipoVehiculo = prompt("Ingrese el tipo: auto, camioneta o pickup");
    while(tipoVehiculo != "auto" && tipoVehiculo != "camioneta" && tipoVehiculo != "pickup")
    {
      tipoVehiculo = prompt("Ingrese el tipo: auto, camioneta o pickup");
    }
    preferencia = prompt("Ingrese la preferencia: nafta o diesel");
    while(preferencia != "nafta" && preferencia != "diesel")
    {
      preferencia = prompt("Ingrese la preferencia: nafta o diesel");
    } 
    precio = prompt("Ingrese el precio mayor que 0");
    precio = parseInt(precio);
    while(isNaN(precio)==true || precio < 0)
    {
      precio = prompt("Ingrese el precio mayor que 0");
      precio = parseInt(precio);
    }
    cantidad = prompt("Ingrese una cantidad mayor a 0");
    cantidad = parseInt(cantidad);
    while(isNaN(cantidad)==true || cantidad <0)
    {
      cantidad = prompt("Ingrese una cantidad mayor a 0");
      cantidad = parseInt(cantidad);
    }

    if(banderaCompraMasGrande == 0)
    {
      compraMasGrande = precio;
      nombreCompraMasGrande = nombre;
      edadCompraMasGrande = edad;
      banderaCompraMasGrande = 1;
    }
    else
    {
      if(precio > compraMasGrande)
      {
        compraMasGrande = precio;
        nombreCompraMasGrande = nombre;
        edadCompraMasGrande = edad;
        porcentaje = 0.90;
      }

    }
    if(banderaMinima == 0)
    {
      cantidadMinima = cantidad;
      banderaMinima = 1;
    }
    else
    {
      if(cantidad < cantidadMinima)
      {
        cantidadMinima = cantidad;
      }
    }
    switch(tipoVehiculo)
    {
      case "auto":
        contadorAuto++
      break;
      case "camioneta":
        contadorCamioneta++; 
        if(preferencia == "nafta")
        {
          contadorNafta++;
        } 
      break;
      case "pickup":
        contadorPickup++;
        if(preferencia == "diesel")
        {
          contadorDiesel++;
        }
        if(banderaMasViejo == 0)
        {
          masViejo = edad;
          nombreMasViejo = nombre;
          banderaMasViejo = 1;
        }
        else
        {
          if(edad > masViejo)
          {
            masViejo = edad;
            nombreMasViejo = nombre;
          }
        }
      break;    
    }
    contador++

  }
  porcentajeAuto = contadorAuto * 100 / contador;
  porcentajeCamioneta = contadorCamioneta * 100 / contador;
  porcentajePickup = contadorPickup * 100 / contador;
  document.write("la compra mas grande realizada es " + (compraMasGrande * porcentaje) + " el clientes es " + nombreCompraMasGrande + " y su edad es " + edadCompraMasGrande);
	document.write("<br>");
	document.write("la minima cantidad de vehiculos vendidos es " + cantidadMinima);
	document.write("<br>");
	document.write(" se compraron " + contadorNafta + " camionestas a nafta");
	document.write("<br>");
  document.write(" el cliente mas viejo que compro una pickup es " + nombreMasViejo);
	document.write("<br>");
  document.write(" el porcentaje de autos es " + porcentajeAuto + " el de camionetas es " + porcentajeCamioneta +  " y el de pickup es " + porcentajePickup);
}*/
/*Una concesionaria necesita realizar un sistema de ventas online, donde se calculará 
las preferencias de 10 clientes. Los datos necesarios son:
-Nombre del cliente: (no puede contener números)
-Edad: (validar que sea mayor a 18 años)
-Tipo de vehículo: (Auto - Camioneta - PickUp)
-Preferencia: (Nafta – Diesel)
-Precio por vehículo.
-Cantidad de vehículos.
Calcular y mostrar en un document.write: A- A la compra más grande realizada, 
se le otorgará un 10% de descuento, mostrando el nombre del cliente y su edad.
B- La mínima cantidad de vehículos vendidos.
C- Cuántas Camionetas a Nafta se compraron.
D- El cliente más viejo que compró una PickUp Diesel.
E- El porcentaje de clientes que compraron Auto, Camioneta y PickUp.*/
/*{
  var codigo;
  var producto;
  var totalVenta;
  var respuesta;
  var porcentaje;
  var contadorBarniz;
  var contadorEnduido;
  var contadorPintura;
  var productoMasVendido;
  var banderaMasRecaudado;
  var vendedorMasRecaudo;
  var masRecaudado;
  var contadorVentas;
  var acumuladorVentas;

  contadorVentas = 0;
  acumuladorVentas = 0;
  banderaMasRecaudado = 0;
  contadorBarniz = 0;
  contadorEnduido = 0;
  contadorPintura = 0;
  respuesta = true;

  while(respuesta == true)
  {  codigo = prompt("Ingrese el codigo del vendedor: v100, v102 o v103");
    while(codigo!= "v100" && codigo != "v102" && codigo != "v103")
    {
      codigo = prompt("Ingrese el codigo del vendedor: v100, v102 o v103");
    }
    producto = prompt("Ingrese le producto: pintura, barniz o enduido");
    while(producto != "pintura" && producto != "barniz" && producto != "enduido")
    {
      producto = prompt("Ingrese le producto: pintura, barniz o enduido");
    }
    totalVenta=prompt("Ingrese el total de la venta mayor a 0");
    totalVenta = parseInt(totalVenta);
    while(isNaN(totalVenta)==true || totalVenta < 0)
    {
      totalVenta=prompt("Ingrese el total de la venta mayor a 0");
      totalVenta = parseInt(totalVenta);
    }
    if(totalVenta > 7000)
    {
      porcentaje = 0.80;
    }
    else
    {
      porcentaje = 0.90;
    }
    switch(producto)
    {
      case "barniz":
        contadorBarniz++;
      break;
      case "enduido":
        contadorEnduido++;
      break;
      case "pintura":
        contadorPintura++;
      break;      
      
    }
    if(contadorBarniz > contadorEnduido && contadorBarniz > contadorPintura)
    {
      productoMasVendido = "barniz";
    }
    else
    {
      if(contadorEnduido > contadorPintura)
      {
        productoMasVendido = "enduido";
      }
      else
      {
        productoMasVendido = "pintura";
      }
    }
    if(banderaMasRecaudado == 0)
    {
      masRecaudado = totalVenta;
      vendedorMasRecaudo = codigo;
      banderaMasRecaudado = 1;
    }
    else
    {
      if(totalVenta > masRecaudado)
      {
        
        masRecaudado = totalVenta;
        vendedorMasRecaudo = codigo;
      }
    }
    contadorVentas++;
    acumuladorVentas = acumuladorVentas + totalVenta;


    respuesta = confirm("Desea ingresar mas datos?");
  }
  mensajeA = " el producto mas comprado es " + productoMasVendido;
  mensajeB = " el codigo del vendedor que mas recaudo es "  + vendedorMasRecaudo + " el dinero recaudado es " + acumuladorVentas + " y la cantidad de ventas es " + contadorVentas;
  mensajeFinal = mensajeA + mensajeB;
  alert(mensajeFinal);
}*/
/*Una pinturería necesita un programa que permita la carga de productos vendidos, 
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
-Código del vendedor (v100 -v102 -v103)
-Producto elegido: (Pintura, Barniz, Enduido)
-Total de la venta.
No hay un límite total de ventas.
Una vez finalizada la carga de productos se debe calcular la comisión del vendedor.
-Si el vendedor superó la cantidad de ventas de $7000 le corresponde una comisión del %20. Sino del %10.
Se debe mostrar:
*El producto más comprado.
*El código del vendedor con más dinero recaudado y la cantidad de ventas realizadas.
 (Mostrando el código, la cantidad de dinero recaudada y la cantidad total de ventas).*/

 {
   var nombre;
   var tipoProducto;
   var cantidad;
   var cafe;
   var medialuna;
   var churros;
   var respuesta;
   var acumuladorMedialunas;
   var contadorCafe;
   var contadorChurros;
   var contadorMedialuna;
   var productoMasVendido;
   var banderaMayorCompras;
   var mayorCantidad;
   var nombreMayorCantidad;
   var ptoductoMAyorCantidad;
   var totalCompra;
   var productoMenosVendido;
   var mensajeA;
   var mensajeB;
   var mensajeC;
   var mensajeD;
   var mensajeFinal;

   banderaMayorCompras = 0;
   contadorCafe = 0;
   contadorChurros = 0;
   contadorMedialuna = 0;
   acumuladorMedialunas = 0;
   cafe = 100;
   medialuna = 60;
   churros = 50;   
   respuesta = true;

   while(respuesta == true)
   {
    nombre = prompt("Ingrese el nombre");
    tipoProducto = prompt("Ingrese el producto: cafe, medialuna o churro");
    while(tipoProducto != "cafe" && tipoProducto != "medialuna" && tipoProducto != "churros")
    {
      tipoProducto = prompt("Ingrese el producto: cafe, medialuna o churro");
    }
    cantidad = prompt("Ingrese la cantidad mayor a 0");
    cantidad = parseInt(cantidad);
    while(isNaN(cantidad) || (cantidad <0))
    {
      cantidad = prompt("Ingrese la cantidad mayor a 0");
      cantidad = parseInt(cantidad);
    }
    if(cantidad == 24)
    {
      if(tipoProducto == "medialuna" || tipoProducto == "churros")
      {
        porcentaje = 0.7
      }
    }
    else
    {
      if(cantidad == 12)
      {
        porcentaje = 0.8
      }
      else 
      {
        if(cantidad == 10)
        {
          porcentaje = 0.9
        }
      }
    }
    switch(tipoProducto)
    {
      case "cafe":
        if(cantidad == 1)
        {
          porcentaje = 0.95;
        }
        contadorCafe++;
      break;
      case "churros":
        if(cantidad == 5)
        {
          porcentaje = 0.95;
        }  
        contadorChurros++;
      break;  
      case "medialuna":  
        if(cantidad == 5)
        {
          porcentaje = 0.95;
        }  
        contadorMedialuna++;
      break;   
          
    }

    if(banderaMayorCompras ==0)
    {
      mayorCantidad = cantidad;
      nombreMayorCantidad = nombre;
      ptoductoMAyorCantidad = tipoProducto;
      banderaMayorCompras = 1;
    }
    else
    {
      if(cantidad > mayorCantidad)
      {
        mayorCantidad = cantidad;
        nombreMayorCantidad = nombre;
        ptoductoMAyorCantidad = tipoProducto;
      }
    }
    totalCompra = (cafe * cantidad) + (medialuna * cantidad) + (churros * cantidad);
    acumuladorMedialunas = acumuladorMedialunas + cantidad;

    respuesta = confirm("Desea ingresar mas datos?")
  }

  if(contadorCafe > contadorChurros && contadorCafe > contadorMedialuna)
  {
  productoMasVendido = "cafe";
  }
  else
  {
    if(contadorChurros > contadorMedialuna)
    {
      productoMasVendido = "churros";
    }
    else
    {
      productoMasVendido = "medialuna"
    }
  }

  if(totalCompra > 1300)
  {
    porcentaje = 1.20
  }
  if(contadorCafe < contadorChurros && contadorCafe < contadorMedialuna)
  {
    productoMenosVendido = "cafe";
  }
  else
  {
    if(contadorChurros < contadorMedialuna)
    {
      productoMenosVendido = "churros";
    }
    else
    {
      productoMenosVendido = "medialuna";
    }
  }
  mensajeA = " \n se compraron " + acumuladorMedialunas + " medialunas";
  mensajeB = " \n el producto mas vendido fue " + productoMasVendido;
  mensajeC = " \n el nombre del cliente con mayor cantidad de compras fue " + nombreMayorCantidad + " y el producto mas comprado fue " + productoMasVendido;
  mensajeD = " \n el producto menos vendido fue " + productoMenosVendido;
  mensajeFinal = mensajeA + mensajeB + mensajeC + mensajeD;
  alert(mensajeFinal);

   
}
 /**
Ejercicio 3

Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro 
de la venta diaria de cafés, medialunas y churros, esto durante las siguientes 12 horas.
Para eso, al momento de cada venta, se debe ingresar:
Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.
El precio por unidad de cada producto es:
Café $100.
Medialunas $60.
Churros $50.
Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.
Informes:
a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el producto con más unidades vendidas.
c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
e) Informar cuál fue el producto menos vendido para poder sacarlo de la venta.
***/


