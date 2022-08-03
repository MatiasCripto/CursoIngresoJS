/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
/*{
	var productoIngresado;
	var precioIngresado;
	var cantidadUnidades;
	var fabricante;
	var contador;
	var bandera;
	var alcoholBarato;
	var fabricanteAlcoholBarato;
	var cantidadAlcoholBarato;
	var contadorBarbijo;
	var cantidadBarbijo;
	var contadorAlcohol;
	var cantidadAlcohol;
	var contadorJabon;
	var cantidadJabon;
	var promedioPorCompra;
	
	bandera = true;
	contadorDeUnidades = 0;
	contador = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	cantidadAlcohol = 0;
	cantidadAlcoholBarato = 0;
	cantidadBarbijo = 0;
	cantidadJabon = 0;
	cantidadUnidades = 0;

	while(contador < 2)
	{
		productoIngresado = prompt("Ingrese un producto : barbijo, jabon o alcohol");
		while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol")
		{
			productoIngresado = prompt("ERROR!! Ingrese un producto : barbijo, jabon o alcohol")
		}
		precioIngresado = prompt("Ingrese un precio entre 100 y 300");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado)== true || (precioIngresado <100 || precioIngresado > 300))
		{
			precioIngresado = prompt("ERROR!! Ingrese un valido entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}
		cantidadUnidades = prompt("Ingrese el numero de la cantidad");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(isNaN (cantidadUnidades) == true || (cantidadUnidades < 1 || cantidadUnidades > 1000))
		{
			cantidadUnidades = prompt("ERROR!! Ingrese el numero de la cantidad");
			cantidadUnidades = parseInt(cantidadUnidades);
		}
		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");
		
		switch(productoIngresado)
		{
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				cantidadBarbijo = cantidadBarbijo + cantidadUnidades; 
			break;
			case "alcohol":
				contadorAlcohol = contadorAlcohol + 1;
				cantidadAlcohol = cantidadAlcohol + cantidadUnidades;
				if(bandera == true)
				{
					alcoholBarato = precioIngresado;
					fabricanteAlcoholBarato = fabricante;
					cantidadAlcoholBarato = cantidadUnidades;
					bandera = false;
				}
				else
				{
					if(precioIngresado < alcoholBarato)
					{
						alcoholBarato = precioIngresado;
						fabricanteAlcoholBarato = fabricante;
						cantidadAlcoholBarato = cantidadUnidades;
					
					}
				}
			
			break;
			case "jabon":
				contadorJabon = contadorJabon + 1;
				cantidadJabon = cantidadJabon + cantidadUnidades;
			break;		
			
		}	
		contador = contador + 1;
		
	}	
	if(cantidadBarbijo > cantidadAlcohol && cantidadBarbijo > cantidadJabon)
	{
		promedioPorCompra = cantidadBarbijo / contadorBarbijo;
	}
	else
	{
		if(cantidadAlcohol > cantidadJabon)
		{
			promedioPorCompra = cantidadAlcohol / contadorAlcohol;
		}
		else
		{
			promedioPorCompra = cantidadJabon / contadorJabon;
		}
		
	}
			if(bandera == true)
			{
				mensajeA = ("no se vendio alcohol")
			}
			else
			{
				mensajeA = ("Del alcohol mas barato se llevaron " + cantidadAlcoholBarato + " unidades y el fabricante es" + fabricanteAlcoholBarato);
			}	
	mensajeB = (" Del producto que mas se vendio, el promedio de compra es " + promedioPorCompra);
	mensajeC = (" hay " + cantidadJabon + " cantidades de jabon");
	alert(mensajeA + mensajeB + mensajeC);
}*/
/**Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
/*{
	var productoIngresado;
	var precioIngresado;
	var cantidadUnidades;
	var i;
	var marca;
	var fabricante;
	var banderaAlcoholBarato;
	var contadorAlcohol;
	var cantidadAlcohol;
	var contadorBarbijo;
	var cantidadBarbijo;
	var contadorJabon;
	var cantidadJabon;
	var alcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var promedioCompra;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	
	banderaAlcoholBarato = true;
	contadorAlcohol = 0;
	cantidadAlcohol = 0;
	cantidadAlcoholBarato = 0;
	contadorBarbijo = 0;
	cantidadBarbijo = 0;
	contadorJabon = 0;
	cantidadJabon = 0;

	for(i = 0; i <2; i++)
	{
		productoIngresado = prompt("Ingrese un producto: jabon, alcohol o barbijo");
		while(productoIngresado != "jabon" && productoIngresado != "barbijo" && productoIngresado != "alcohol")
		{
			productoIngresado = prompt("ERROR!! Ingrese un producto: jabon, alcohol o barbijo");
		}
		precioIngresado = prompt("Ingrese un precio del " + productoIngresado + " entre 100 y  300");
		precioIngresado = parseFloat(precioIngresado);
		while(isNaN(precioIngresado)== true || (precioIngresado <100 || precioIngresado >300))
		{
			precioIngresado = prompt("ERROR!! Ingrese un precio del " + productoIngresado + " entre 100 y  300");
			precioIngresado = parseFloat(precioIngresado);
		}
		cantidadUnidades = prompt("Ingrese una cantidad entre 1 y 1000");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades)== true || (cantidadUnidades < 1 || cantidadUnidades > 1000))
		{
			cantidadUnidades = prompt("ERROR!! Ingrese una cantidad entre 1 y 1000");
			cantidadUnidades = parseInt(cantidadUnidades);	
		}
		marca = prompt("Ingrese una marca");
		fabricante = prompt("Ingrese una fabricante");
		
		switch(productoIngresado)
		{
			case "alcohol":
				contadorAlcohol = contadorAlcohol + 1;
				cantidadAlcohol = cantidadAlcohol + cantidadUnidades;
				if(	banderaAlcoholBarato == true)
				{
					alcoholBarato = precioIngresado;
					cantidadAlcoholBarato = cantidadUnidades;
					fabricanteAlcoholBarato = fabricante;
					banderaAlcoholBarato = false;
					
				}
				else
				{
					if(precioIngresado < alcoholBarato)
					{
						alcoholBarato = precioIngresado;
						cantidadAlcoholBarato = cantidadUnidades;
						fabricanteAlcoholBarato = fabricante;
					}
				}	
			break;
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				cantidadBarbijo = cantidadBarbijo + cantidadUnidades;
			break;
			case "jabon":
				contadorJabon = contadorJabon + 1;
				cantidadJabon = cantidadJabon + cantidadUnidades;
			break;
		}
	}
	if(cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon)
	{
		promedioCompra = cantidadAlcohol / contadorAlcohol;
	}
	else
	{
		if(cantidadBarbijo > cantidadJabon)
		{
			promedioCompra = cantidadBarbijo / contadorBarbijo;
			
		}
		else
		{
			promedioCompra = cantidadJabon / contadorJabon;
		}
	}
		if(banderaAlcoholBarato == true)
		{
			mensajeA = ("No se vendio ningun alcohol")
		}
		else
		{
			mensajeA = ("Del alcohol mas barato, se vendio " + cantidadAlcoholBarato + " unidades, y el fabricante es " + fabricanteAlcoholBarato);
		}
	mensajeB = ("  El promedio de compra dcel producto con mas unidades es " + promedioCompra);
	mensajeC = (" La cantidad de unidades de jabon es " + cantidadJabon);
	alert(mensajeA + mensajeB + mensajeC);
}*/

/*El parcial se puede realizar en cualquier ejercicio de la guía o en los fuentes del parcial 2020 

1)De 5  personas que ingresan al hospital se deben tomar y validar los siguientes datos.

nombre ,sexo, latidos por minuto, peso y si está vacunado o no contra el sarampión:
a)informar la cantidad de personas vacunadas y no vacunadas.
b)el peso promedio en total
c)el hombre con menos latidos por minuto y la mujer con más latidos por minuto
pedir datos por prompt y mostrar por document.write*/
/*{

	var nombre;
	var sexo;
	var peso;
	var latidosXMinutos;
	var vacunado
	var contadorVacunados;
	var contadorNoVacunados;
	var banderaLAtidos;
	var hombreMenosLatidos;
	var mujerMasLatidos;
	var acumuladorDePeso;
	var contadorDePeso;
	var promedioPeso;

	contadorDePeso = 0;
	acumuladorDePeso = 0;
	banderaLAtidos = true;
	contadorVacunados = 0;
	contadorNoVacunados = 0;
		
	
	
	
	
	
	/*for(i = 0; i <5; i++)
		{
			nombre = prompt("Ingrese un nombre");
			sexo = prompt("Ingrese un sexo F o M");
			while(sexo != "F" && sexo != "M")
			{
				sexo = prompt("ERROR!! Ingrese un sexo F o M");
			}
			peso = prompt("Ingrese un peso");
			peso = parseInt(peso);
			while(isNaN(peso)==true)
			{
				peso = prompt("ERROR!! Ingrese un peso valido");
				peso = parseInt(peso);
			}
			latidosXMinutos = prompt("Ingrese los latidos entre 60 y 100 por minutos");
			latidosXMinutos = parseInt(latidosXMinutos);
			while(isNaN(latidosXMinutos) == true || (latidosXMinutos < 60 || latidosXMinutos> 100))
			{
				latidosXMinutos = prompt("ERROR!! Ingrese los latidos entre 60 y 100 por minutos");
				latidosXMinutos = parseInt(latidosXMinutos);
			}
			vacunado = prompt("Usted esta vacunado? ingrese si o no");
			while(vacunado != "no" && vacunado != "si")
			{
				vacunado = prompt("ERROR!! Usted esta vacunado? ingrese si o no");
			}
			if(vacunado == "si")
			{
				contadorVacunados = contadorVacunados + 1;

			}
			else
			{
				contadorNoVacunados = contadorNoVacunados + 1;
			}

			if(banderaLAtidos == true)
			{
				hombreMenosLatidos = latidosXMinutos;
				mujerMasLatidos = latidosXMinutos;
				banderaLAtidos = false;
			}
			else
			{
				if(latidosXMinutos < hombreMenosLatidos)
				{
					hombreMenosLatidos = latidosXMinutos;
				}
				else
				{
					if(latidosXMinutos > mujerMasLatidos)
					{
						mujerMasLatidos = latidosXMinutos;
					}
				}
			}

			contadorDePeso = contadorDePeso + 1;
			acumuladorDePeso = acumuladorDePeso + peso;

			
		}

		promedioPeso = acumuladorDePeso / contadorDePeso;
	
	document.write("la cantidad de personas vacunadas es"  + contadorVacunados + " y las no vacunadas es " + contadorNoVacunados);
	document.write("<br>");
	document.write(" el precio promedio total es  : " + promedioPeso);
	document.write("<br>");
	document.write(" el hombre con latidos mas bajos es " + hombreMenosLatidos + " y la mujer con mas latidos es " + mujerMasLatidos);
	document.write("<br>");
}*/
/*El parcial se puede realizar en cualquier ejercicio de la guía o en los fuentes del parcial 2020 

2)De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna,
 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso)
a)informar el peso total de la compra.
b)el nombre del corte más caro de los sin hueso.
c)el nombre del corte más liviano de los con hueso.*/
/*{
	var nombreDelCorte;
	var precioDelCorte;
	var peso;
	var tieneHueso;
	var respuesta;
	var banderaCorteMasLiviano;
	var acumuladorDePeso;
	var banderaCorteMasCaro;
	var corteMasCaro;
	var nombreCorteMasCaro;
	var corteMasLiviano;
	var nombreCorteMasLiviano;
	var mensajeA;  
	var mensajeB;
	var mensajeC;
	
	banderaCorteMasCaro = true;
	contadorDePeso = 0;
	acumuladorDePeso = 0;
	respuesta = true;

	while(respuesta == true)
	{
		nombreDelCorte = prompt("Ingrese el nombre del corte");
		
		while(isNaN(nombreDelCorte)== false)
		{
			nombreDelCorte = prompt("ERROR!! Ingrese el nombre del corte");
		}
		precioDelCorte = prompt("Ingrese el precio");
		precioDelCorte = parseInt(precioDelCorte);
		
		while(isNaN(precioDelCorte)==true)
		{
			precioDelCorte = prompt("ERROR!! Ingrese el precio");
			precioDelCorte = parseInt(precioDelCorte);	
		}
		peso = prompt("Ingrese el peso en KG");
		peso = parseInt(peso);
		
		while(isNaN(peso)==true)
		{
			peso = prompt("ERROR!! Ingrese el peso en KG");
			peso = parseInt(peso);	
		}
		tieneHueso = prompt("tiene hueso? si o no");
		
		while(isNaN(tieneHueso)== false && (tieneHueso != "si" || tieneHueso != "no"))
		{
			tieneHueso = prompt("ERROR!! tiene hueso? si o no");
		}
		
		if( tieneHueso == "no") //si es sin hueso
		{
			if(banderaCorteMasCaro == true)//primera vez del corte mas caro
			{
				corteMasCaro = precioDelCorte;
				nombreCorteMasCaro = nombreDelCorte;
				banderaCorteMasCaro = false //cambio valor
			}
			else // si no es la primera vez
			{
				if(precioDelCorte > corteMasCaro) // si ingresa un valor mayor, lo asigno
				{
					corteMasCaro = precioDelCorte;
					nombreCorteMasCaro = nombreDelCorte;
				}
			}
		}
		else // si es con hueso
		{	
			if(banderaCorteMasLiviano == true) // si ingresa un corte mas liviano, lo asigno
			{
				corteMasLiviano = peso;
				nombreCorteMasLiviano = nombreDelCorte;
				banderaCorteMasLiviano = false;
			}
			else
			{
					
				if(peso < corteMasLiviano)
				{
					corteMasLiviano = peso;
					nombreCorteMasLiviano = nombreDelCorte;
				}
				
			}
		}	
		acumuladorDePeso = acumuladorDePeso + peso;
		respuesta = confirm("desea continuar?");
	}
	mensajeA = "El peso total de la compra es " + acumuladorDePeso;
	mensajeB = " El nombre del corte mas caro de los sin hueso es " + nombreCorteMasCaro;
	if(nombreCorteMasLiviano == 0)
	{
		mensajeC = "No se encontraron datos"
	}
	else
	{
		mensajeC = " El nombre del corte mas liviano de los con hueso es " + nombreCorteMasLiviano;
	}
	
	alert(mensajeA + mensajeB + mensajeC);

}

/*a)informar el peso total de la compra.
b)el nombre del corte más caro de los sin hueso.
c)el nombre del corte más liviano de los con hueso.*/

/*3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados:

nombre del titular ,lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),temporada(“otoño”,“invierno”, “verano”,“primavera”),
cantidad de días que durará el viaje.
informar:
a)el lugar más elegido 
b)el nombre del titular que más días viaje.
c)el promedio de días por viaje, de la temporada verano.*/

/*{
	var nombreTitular;
	var lugar;
	var temporada;
	var cantidadDeDias;
	var respuesta;
	var lugarMasElegido;
	var banderaPrimerTurista;
	var mayorDias;
	var contadorVerano;
	var nombreMasDias;

	contadorVerano = 0;
	acumuladorDiasVerano = 0;
	banderaTitularMasViaja = true;
	contadorCordoba = 0;
	contadorPM = 0;
	contadorVG = 0;
	respuesta = true;
	

	while(respuesta == true)
	{
		nombreTitular = prompt("Ingrese un nombre");

		while(isNaN(nombreTitular)== false)
		{
			nombreTitular = prompt("ERROR!! Ingrese un nombre");
		}

		lugar = prompt("Ingrese uno de estos destinos: Puerto Madryn, Villa gessel o Cordoba");

		while(lugar != "Puerto Madryn" && lugar != "Villa Gessel" && lugar != "Cordoba")
		{
			lugar = prompt("ERROR!! Ingrese uno de estos destinos: Puerto Madryn, Villa gessel o Cordoba")
		}
		temporada = prompt("Ingrese una temporada: otoño, verano, invierno o primavera");
		
		while(temporada =! "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera")
		{
			temporada = prompt("ERROR!!Ingrese una temporada: otoño, verano, invierno o primavera");
		}

		cantidadDeDias = prompt("Ingrese la cantidad de dias");
		cantidadDeDias = parseInt(cantidadDeDias);
		while(isNaN(cantidadDeDias)==true)
		{
			cantidadDeDias = prompt("ERROR!! Ingrese la cantidad de dias");
			cantidadDeDias = parseInt(cantidadDeDias);
		}
		switch(lugar)
		{
			case "Cordoba":
				contadorCordoba++
			break;
			case "Villa Gessel":
				contadorVG++	
			break;
			case "Puerto Madryn":
				contadorPM++
			break;										
		}	
		if(cantidadDeDias > mayorDias || banderaPrimerTurista == 0)
        {
            mayorDias = cantidadDeDias;
            nombreMasDias = nombreTitular;
            banderaPrimerTurista = 1;                        
        }

        if(temporada == "verano")
        {
            contadorVerano++;
            acumuladorDiasVerano = acumuladorDiasVerano + cantidadDeDias;
        }
		respuesta = confirm("Desea seguir ingresando datos?")
	}
	if(contadorCordoba > contadorPM || contadorCordoba > contadorVG)
		{
			lugarMasElegido = "Cordoba";
		}
		else
		{
			if(contadorPM > contadorVG)
			{
				lugarMasElegido = "Puerto Madryn";
			}
			else
			{
				lugarMasElegido = "Villa Gessel";
			}
		}

	promedio = acumuladorDiasVerano / contadorVerano ;
	
	mensajeA = "EL lugar mas elegido es " + lugarMasElegido;
	mensajeB = " La persona que mas viaja es " + nombreMasDias;
	mensajeC = " el promedio de viajes de la temporada de verano es " + promedio;
	alert(mensajeA + mensajeB + mensajeC);
}*/

/*{
    var nombreTitular;
    var respuesta;
    var lugar;
    var temporada;
    var contadorVillaGessell;
    var contadorPuertoMadryn;
    var contadorCordoba;
    var mensajeLugar;
    var mayorDias;
    var banderaPrimerTurista;
    var nombreMasDias;
    var acumuladorDiasVerano;
    var contadorVerano;
    var promedio;

    acumuladorDiasVerano = 0;
    contadorVerano = 0;
    banderaPrimerTurista = 0;
    contadorVillaGessell = 0;
    contadorPuertoMadryn = 0;
    contadorCordoba = 0;
    respuesta = "si"

    while(respuesta == "si")
    {
        nombreTitular = prompt("Ingrese nombre del titular");
        
        lugar = prompt("Ingrese un lugar entre Puerto Madryn, Villa Gessel, “Cordoba” ");
        while(lugar !="Puerto Madryn" && lugar != "Villa Gessel" && lugar != "Cordoba" )
        {
            lugar = prompt("Error, Ingrese un lugar entre Puerto Madryn, Villa Gessel, “Cordoba” ");
        }

        temporada = prompt("Ingrese una temporada”  “otoño”,“invierno”, “verano”, ”Primavera” ");
        while(temporada !="otoño" && temporada != "invierno " && temporada != "verano" && temporada != "primavera" )
        {
            temporada = prompt("Ingrese una temporada”  “otoño”,“invierno”, “verano”, ”Primavera” ");
        }

        cantidadDias = prompt("Ingrese cantidad de dias");
        cantidadDias = parseInt(cantidadDias);
        while(cantidadDias < 0)
        {   
            cantidadDias = prompt("Errror, Ingrese cantidad de dias");
            cantidadDias = parseInt(cantidadDias);
        }

        switch(lugar)
        {
            case "Puerto Madryn":
                contadorPuertoMadryn++;
                break;
            case "Villa Gessel":
                contadorVillaGessell++;
                break;
            case "Cordoba":
                contadorCordoba++;
                break;     
        }
        
        if(cantidadDias > mayorDias || banderaPrimerTurista == 0)
        {
            mayorDias = cantidadDias;
            nombreMasDias = nombreTitular;
            banderaPrimerTurista = 1;                        
        }

        if(temporada == "verano")
        {
            contadorVerano++;
            acumuladorDiasVerano = acumuladorDiasVerano + cantidadDias;
        }
       
        respuesta = prompt("Quiere seguir cargando datos 'si' o 'no' ");

    }//cierrre

    if(contadorPuertoMadryn > contadorVillaGessell && contadorPuertoMadryn > contadorCordoba)
    {
       mensajeLugar = "Puerto Madryn" ;
    }
    else
    {
        if(contadorVillaGessell > contadorCordoba)
        {
            mensajeLugar = "Villa Gessell";
        }
        else
        {
            mensajeLugar = "Cordoba";
        }
    }

    
    promedio = acumuladorDiasVerano / contadorVerano ;

    
    alert("El nombre del que mas viajo "+ nombreMasDias);
    alert("El lugar mas elegido " + mensajeLugar);
    alert("Promedio dias por viaje " + promedio);

}*/
/*
	Para el nuevo videojuego "surviving the UTN admission test" se ha solicitado desarrollar 
	el sistema de estadísticas que nos mostrará información sobre los jugadores registrados en el juego.
	Para ello por cada jugador, debemos ingresar:
	Nombre del jugador,
	Tipo de personaje("guerrero", "arquero" o "mago"),
	Fuerza de ataque ( 1 a 10 inclusive ),
	Resistencia a ataques (1 a 5 inclusive),
	Tiene bonificación (si o no). Si tiene bonificación, el ataque y la resistencia se duplican.
	Se nos pide mostrar:
	a) Nombre y tipo de personaje del personaje más poderoso y el más débil con y sin bonificación.
	b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.
	c) Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3.
	d) Cual es el promedio de fuerza de ataque de todos los guerreros sin bonificación,
	y cual de todos los magos con bonificación.
	e) Que porcentaje del total de personajes ingresados representa cada tipo de personaje.*/

/*{
	var nombre;
	var tipoP;
	var fuerzaAtaque;
	var resistenciaAtaque;
	var bonificacion;
	var respuesta;
	var banderaDelPrimero;
	var nombreMasDebil;
	var tipoMasDebil;
	var nombreMasP;
	var tipoMasP;
	var masP;
	var masD;
	var contadorPersonajes;
	var contadorArqueros;
	var contadorGuerreros;
	var nombreSBP;
	var nombreSBD;
	var tipoSBP;
	var tipoSBD;
	var masDSB;
	var masPSB;
	var banderaSinB;
	var contadorArquerosSinBonificacion;
	var contadorArquero;
	var contadorGuerrero;
	var contadorMago;
	var acumuladorArqueroFA;
	var promedioArqueroSB;
	var promedioMagoCB;
	var contaArque;
	var contaMago;
	var contaGuerrero;
	var promedioGuerreroSB;
	var contadorGuerreros;
	var acumuladorGuerrero ;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;
	var mensajeE;
	var acumuladorMago;
	var porcGuerrero;
	var porcMago;
	var porcArquero;
	

	acumuladorMago = 0;
	acumuladorGuerrero = 0;
	contaArque = 0;
	contaGuerrero = 0;
	contaMago = 0;
	acumuladorTotalSB = 0;
	contadorTotalSB = 0;
	acumuladorArqueroFA = 0;
	contadorArquero = 0;
	contadorGuerrero = 0;
	contadorMago = 0;
	contadorArquerosSinBonificacion = 0;
	banderaSinB = true;
	contadorGuerreros = 0;
	contadorArqueros = 0;
	contadorPersonajes = 0;
	banderaDelPrimero = true;
	respuesta = true;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese un nombre");
		while(isNaN(nombre)== false)
		{
			nombre = prompt("ERROR: Ingrese un nombre valido");
		}
		tipoP = prompt("Ingrese un tipo de personaje: guerrero, arquero o mago");
		while(tipoP != "guerrero" && tipoP != "arquero" && tipoP != "mago")
		{
			tipoP = prompt("ERROR!! Ingrese un tipo de personaje: guerrero, arquero o mago");
		}
		fuerzaAtaque = prompt("Ingrese una fuerza de ataque de 1 a 10");
		fuerzaAtaque = parseInt(fuerzaAtaque);
		while(isNaN(fuerzaAtaque)== true || (fuerzaAtaque <1 || fuerzaAtaque >10))
		{
			fuerzaAtaque = prompt("ERROR!! Ingrese una fuerza de ataque de 1 a 10");
			fuerzaAtaque = parseInt(fuerzaAtaque);
		}

		resistenciaAtaque = prompt("Ingrese una resistencia de ataque de 1 a 5");
		resistenciaAtaque = parseInt(resistenciaAtaque);
		while(isNaN(resistenciaAtaque)== true || (resistenciaAtaque <1 || resistenciaAtaque >5))
		{
			resistenciaAtaque = prompt("Ingrese una resistencia de ataque de 1 a 5");
			resistenciaAtaque = parseInt(resistenciaAtaque);
		}
		bonificacion = prompt("Tiene bonificacion? Ingrese s o n");
		while(bonificacion != "s" && bonificacion != "n")
		{
			bonificacion = prompt("ERROR!! Tiene bonificacion? Ingrese s o n");
		}
		if(bonificacion == "s")
		{
			if(tipoP == "mago")
			{
				contadorMago++;
				acumuladorMago = acumuladorMago + fuerzaAtaque;
			}
			if(banderaDelPrimero == true)
			{
				nombreMasDebil = nombre;
				nombreMasP = nombre;
				tipoMasDebil = tipoP;
				tipoMasP = tipoP;
				masD = fuerzaAtaque;
				masP = fuerzaAtaque;
				banderaDelPrimero = false;

			}
			else
			{
				
				if(fuerzaAtaque > masP)
				{
					nombreMasP = nombre;
					masP = fuerzaAtaque;
					tipoMasP = tipoP;

				}
				if(fuerzaAtaque < masD)
				{
					nombreMasDebil = nombre;
					tipoMasDebil = tipoP;
					masD = fuerzaAtaque;
				}
				
			}
		
		}
		else
		{
			if(banderaSinB == true)
			{
				nombreSBD = nombre;
				nombreSBP = nombre;
				tipoSBD= tipoP;
				tipoSBP = tipoP;
				masDSB = fuerzaAtaque;
				masPSB = fuerzaAtaque;
				banderaSinB = false;

			}
			else
			{
				
				if(fuerzaAtaque > masPSB)
				{
					nombreSBP = nombre;
					masPSB = fuerzaAtaque;
					tipoSBP = tipoP;

				}
				if(fuerzaAtaque < masDSB)
				{
					nombreSBD = nombre;
					tipoSBD = tipoP;
					masDSB = fuerzaAtaque;
				}
			}
			contadorGuerreros++
			acumuladorGuerrero = acumuladorGuerrero + fuerzaAtaque;
		}	
		switch(tipoP)
			{
				case "arquero":
					contaArque++;
					if(fuerzaAtaque <3 && resistenciaAtaque >3 && bonificacion == "n")
					{
						contadorArquerosSinBonificacion++;
						acumuladorArqueroFA = acumuladorArqueroFA + fuerzaAtaque;
					}
					if(fuerzaAtaque > 5 && resistenciaAtaque > 3)
					{
						contadorArquero++;
					}
				break;
				case "mago":
					contaMago++;
					if(fuerzaAtaque > 5 && resistenciaAtaque > 3)
					{
						contadorMago++;
					}
				break;
				case "guerrero":
					contaGuerrero++;
					if(fuerzaAtaque > 5 && resistenciaAtaque > 3)
					{
						contadorGuerrero++;
					}
				break;	
					
				
			}
		
		
	contadorPersonajes++
	porcArquero = contaArque * 100 / contadorPersonajes;
	porcGuerrero = contaGuerrero * 100 / contadorPersonajes;
	porcMago = contaMago * 100 / contadorPersonajes;

	respuesta = confirm("Desea seguir ingresando datos?");	
	}
		promedioMagoCB = acumuladorMago / contadorMago;
		promedioGuerreroSB = acumuladorGuerrero / contadorGuerreros;		
	
	mensajeA = "el nombre del personaje mas poderoso con bonificacion es " + nombreMasP + " y es de tipo " + tipoMasP +
	" y el nombre del personaje mas poderoso sin bonificacion es " + nombreSBP + " y es de tipo " + tipoSBP;
	mensajeB = " los arqueros que atacan con mas de 5 y resisten con mas de 3 son "  + contadorArquero + " los guerreros son " + contaGuerrero + " y los magos son " + contadorMago;
	mensajeC = " los arqueson sin bonificacion que tienen fuera de ataque menor a 3 y resistencia mayor a 3 son " + contadorArquerosSinBonificacion;
	mensajeD = " El promedio de fuerza de ataque de los guerreros sin bonificacion es " + promedioGuerreroSB + " y de los magos es " + promedioMagoCB;
	mensajeE = " el porcentaje de arqueros es " + porcArquero + " El porcentaje de guerreros es " + porcGuerrero + " El porcentaje de magos es " + porcMago;
	alert(mensajeA + mensajeB + mensajeC + mensajeD + mensajeE);
}*/
/*

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
{
	var plato;
	var precioDelPlato;
	var cantidad;
	var medioDePAgo;
	var respuesta;
	var contador;
	var acumuladorTotal;
	var procentaje;
	var precioDebito;
	var precioEfectivo;
	var precioCredito;
	var acumuladorEfectivo;
	var acumuladorDebito;
	var promedioDebito;
	var contadorDebito;
	var banderaPlato;
	var acumuladorPlato;
	var promedioPlato;
	var platoMasBarato;
	var nombrePlatoBarato;
	var precioTotal;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeD;

	promedioDebito = 0;
	promedioPlato = 0;
	acumuladorPlato = 0;
	banderaPlato = true;
	contadorDebito = 0;
	acumuladorDebito = 0;
	acumuladorEfectivo = 0;
	acumuladorTotal = 0;
	contador = 0;
	respuesta = true;

	while(respuesta == true)
	{
		plato= prompt("Ingrese un plato: milanesa, ravioles o pizza");
		while(plato != "milanesa" && plato != "ravioles" && plato != "pizza" )
		{
			plato= prompt("Ingrese un plato: milanesa, ravioles o pizza");
		}
		precioDelPlato = prompt("Ingrese un precio entre 100 y 500");
		precioDelPlato = parseInt(precioDelPlato);
		while(isNaN(precioDelPlato)==true || (precioDelPlato <100 || precioDelPlato>500))
		{
			precioDelPlato = prompt("ERROR!! Ingrese un precio entre 100 y 500");
			precioDelPlato = parseInt(precioDelPlato);
		}
		cantidad = prompt("Ingrese una cantidad mayor a 0");
		cantidad = parseInt(cantidad);
		while(isNaN(cantidad)==true || cantidad < 0)
		{
			cantidad = prompt("ERROR!!! Ingrese una cantidad mayor a 0");
			cantidad = parseInt(cantidad);
		}
		medioDePAgo = prompt("Ingrese un medio de pago: efectivo, debito o credito");
		while(medioDePAgo != "efectivo" && medioDePAgo != "debito" && medioDePAgo != "credito")
		{
			medioDePAgo = prompt("ERROR!!! Ingrese un medio de pago: efectivo, debito o credito");
		}
		if(medioDePAgo == "efectivo")
		{
			procentaje = 0.9;
			precioEfectivo = precioDelPlato * cantidad * procentaje;
			acumuladorEfectivo = acumuladorEfectivo + precioEfectivo;
		}
		else
		{
			if(medioDePAgo == "credito")
			{
				procentaje = 0.85;
				precioCredito = precioDelPlato * procentaje;
			}
			else
			{
				precioDebito = precioDelPlato
				contadorDebito++;
				acumuladorDebito = acumuladorDebito + precioDebito;
			}
		}
		if(banderaPlato == true)
		{
			platoMasBarato = precioDelPlato;
			nombrePlatoBarato = plato;
			banderaPlato = false;
		}
		else
		{
			if(precioDelPlato < platoMasBarato)
			{
				platoMasBarato = precioDelPlato;
				nombrePlatoBarato = plato;
			}
		}
		
	
		
	
	
		contador++
		acumuladorTotal = acumuladorTotal + precioDelPlato;
		acumuladorPlato = acumuladorPlato + cantidad;
		
		respuesta = confirm("Desea seguir ingresando datos?");	
	}
	precioTotal = acumuladorPlato * precioDelPlato;
	promedioPlato = acumuladorTotal / acumuladorPlato;
	promedioDebito = acumuladorDebito / contadorDebito;

	mensajeA = "El importe total de todos los clientes es  " + acumuladorTotal;
	mensajeB = " El importe total que pagaron en efectivo es " + acumuladorEfectivo;
	mensajeC = " El promedio de ventas con debito es " + promedioDebito;
	mensajeD = " El promedio por plato es " + promedioPlato + " y el mas barato es " + nombrePlatoBarato;
	alert(mensajeA + mensajeB + mensajeC + mensajeD);

}
/*a)	El importe total de todos los clientes.
		Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
c)	Promedio de ventas con Debito.
d)	Promedio por plato y el más barato.*/
/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/
/*{
	var tipoMascota;
	var raza;
	var otraRaza;
	var edadGyP;
	var edadtros;
	var nombre;
	var i;
	var banderaGatoMV;
	var banderaPerroMV;
	var nmbreGatoMV;
	var nombrePerroMV;
	var gatoMVV;
	var perroMV;
	var otrosMV
	var nombreOtrosMV;
	var banderaOtrosMV;
	var mensajeA;

	banderaGatoMV = true;
	banderaPerroMV = true;
	banderaOtrosMV = true;

	for(i=0; i<2; i++)
	{
		tipoMascota = prompt("Ingrese clase de mascota: gato, peroo o otros");
		while(tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "otros")
		{
			tipoMascota = prompt("ERROR!! Ingrese clase de mascota: gato, perro o otros");
		}
		while(tipoMascota != "otros")
		{
			raza = prompt("Ingrese una raza, si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)");
		}
		while(tipoMascota == "gato" && raza != "siames" && raza != "turco" &&  raza != "mestizo")
		{
			raza = prompt("Ingrese una raza valida: turco, siames o mestizo");
		}
		if(tipoMascota == "perro" || tipoMascota == "gato")
		{
			edadGyP = prompt("Ingrese una edad entre 1 y 20");
			while(isNaN(edadGyP)==true || edadGyP < 1 || edadGyP > 20 )
			{
				edadGyP = prompt("ERROR!! Ingrese una edad entre 1 y 20");
			}
		}	
							
		if(banderaGatoMV == true || tipoMascota == "gato")
		{
			gatoMVV = edadGyP;
			nmbreGatoMV = nombre;
			banderaGatoMV = false;
		}
		else
		{
			if(edadGyP > gatoMVV)
			{
				gatoMVV = edadGyP;
				nmbreGatoMV = nombre;
			}
		}
			
		while(tipoMascota == "perro" && raza != "pastor" && raza  != "toy" && raza != "caejero")
		{
			raza = prompt("Ingrese una raza valida: pastor, toy o callejero");
		}
								
		if(banderaPerroMV == true || tipoMascota== "perro")
		{
			perroMV = edadGyP;
			nombrePerroMV = nombre;
			banderaPerroMV = false;
		}
		else
		{
			if(edadGyP > perroMV)
			{
				perroMV = edadGyP;
				nombrePerroMV = nombre;
			}
		}
	
		if(tipoMascota == "otros")
		{
			edadtros = prompt("Ingrese una edad entre 1 y 100");
			while(isNaN(edadtros)==true || edadtros <1 || edadtros>100)
			{
				edadtros = prompt("ERROR!! Ingrese una edad entre 1 y 100");
			}
		}
		
		if(tipoMascota == "otros")
		{

			raza = prompt("Ingrese la raza");				
			if(banderaOtrosMV == true)
			{
				otrosMV = edadtros;
				nombreOtrosMV = nombre;
				banderaOtrosMV = false;
			}
			else
			{
				if(edadtros > otrosMV)
				{
					otrosMV = edadtros;
					nombreOtrosMV = nombre;
				}
			}
		}
			
			
			
			
			
		
		

	

	}
	
	mensajeA = "El nombre del gato mas viejo es " + nmbreGatoMV + " El nombre del perro mas viejo es " + nombrePerroMV + " El nombre de otros mas viejos es " + nombreOtrosMV;
	alert(mensajeA);
}*/
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

/*{
	var tipo;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var i;
	var banderaAlcoholBarato;
	var acoholMasBarato;
	var fabricanteAlcoholBarato;
	var contadorAlcohol;
	var contadorBarbijo;
	var acumuladorBarbijo;
	var contadorAlcoholCant;
	var acumuladorAlcohol;
	var contadorJabon;
	var acumuladorJabon;
	var tipoMasUnidades;
	var mensajeA;
	var mensajeB;
	var mensajeC;

	acumuladorJabon = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	contadorAlcoholCant = 0;
	acumuladorBarbijo = 0;
	contadorBarbijo = 0;
	contadorAlcohol = 0;
	banderaAlcoholBarato = true;
	
	for(i = 0; i <2; i++)
	{
		tipo=prompt("Ingrese un producto: barbijo, jabon o alcohol");
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo=prompt("ERROR!! Ingrese un producto: barbijo, jabon o alcohol");
		}
		precio = prompt("Ingrese un precio entre 100 y 300");
		precio=parseInt(precio);
		while(isNaN(precio)== true || precio <100 || precio > 300)
		{
			precio = prompt("ERROR!! Ingrese un precio entre 100 y 300");
			precio=parseInt(precio);
		}
		unidades=prompt("Ingrese una cantidad entre 1 y 1000");
		unidades=parseInt(unidades);
		while(isNaN(unidades)==true || unidades <1 || unidades > 1000)
		{
			unidades=prompt("ERROR!! Ingrese una cantidad entre 1 y 1000");
			unidades=parseInt(unidades);
		}
		marca=prompt("Ingrese una marca");
		fabricante = prompt("ingrese un fabricante");
		
		switch(tipo)
		{
			case "barbio":
				contadorBarbijo++
				acumuladorBarbijo = acumuladorBarbijo + unidades;
			break;
			case "alcohol":
				contadorAlcoholCant++
				acumuladorAlcohol = acumuladorAlcohol + unidades;	
			if(banderaAlcoholBarato == true)
			{
				contadorAlcohol++;
				acoholMasBarato = precio;
				fabricanteAlcoholBarato = fabricante;		
				banderaAlcoholBarato = false;	
			}
			else
			{
				if(precio < acoholMasBarato)
				{
					acoholMasBarato = precio;
					fabricanteAlcoholBarato = fabricante;
				}
			}
			break;
			case "jabon":
				contadorJabon++
				acumuladorJabon = acumuladorJabon + unidades;	
			break;	
		}
		if(contadorBarbijo > contadorAlcoholCant && contadorBarbijo > contadorJabon)
		{
			tipoMasUnidades = acumuladorBarbijo / contadorBarbijo;
		}
		else
		{
			if(contadorAlcoholCant > contadorJabon)
			{
				tipoMasUnidades = acumuladorAlcohol / contadorAlcoholCant;
			}
			else
			{
				tipoMasUnidades = acumuladorJabon / contadorJabon;
			}
		}	
	}
	mensajeA="Del alcohol mas barato, la cantidad de unidades es " + contadorAlcohol + " y el fabricante es " + fabricanteAlcoholBarato;
	mensajeB=" el promedio de compra del tipo con mas unidades es " + tipoMasUnidades
	mensajeC=" la cantidad de jabones es " + acumuladorJabon;

	alert(mensajeA + mensajeB + mensajeC);
}*/
/*2)De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna,
 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso)
a)informar el peso total de la compra.
b)el nombre del corte más caro de los sin hueso.
c)el nombre del corte más liviano de los con hueso.
*/

/*{
	var respuesta;
	var nombreDelCorte;
	var precio;
	var peso;
	var conHueso;
	var acumuladorPeso;
	var nombreCorteMasCaro;
	var nombreCorteMasLiviano;
	var corteMasCaro;
	var corteMasLiviano;
	var banderaCorteMasCaro;
	var banderaCorteMasLiviano;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var mensajeFinal;

	banderaCorteMasCaro = true;
	banderaCorteMasLiviano = true;
	acumuladorPeso = 0;
	respuesta = true;

	while(respuesta == true)
	{
		nombreDelCorte = prompt("Ingrese el nombre del corte");
		while(isNaN(nombreDelCorte)==false)
		{
			nombreDelCorte = prompt("ERROR!! Ingrese el nombre del corte");
		}
		precio = prompt("Ingrese un precio del corte " + nombreDelCorte);
		precio = parseInt(precio);
		while(isNaN(precio)==true)
		{
			precio = prompt("ERROR!! Ingrese un precio valido");
			precio = parseInt(precio);
		}
		peso = prompt("Ingrese un peso del corte " + nombreDelCorte);
		peso = parseInt(peso);
		while(isNaN(peso)==true)
		{
			peso = prompt("Ingrese un peso del corte " + nombreDelCorte);
			peso = parseInt(peso);
		}
		conHueso = prompt("Si tiene hueso ponga s y si no n");
		while(conHueso != "s" && conHueso != "n")
		{
			conHueso = prompt("ERROR!! Si tiene hueso ponga s y si no n");
		}
		acumuladorPeso = acumuladorPeso + peso;

		if(conHueso == "n")
		{	
			if(banderaCorteMasCaro == true)
			{
				corteMasCaro = precio;
				nombreCorteMasCaro = nombreDelCorte;
				banderaCorteMasCaro = false;
			}
			else
			{
				if(precio > corteMasCaro)
				{
					corteMasCaro = precio;
					nombreCorteMasCaro = nombreDelCorte;
				}
			}
		}
		if(conHueso == "s")
		{	
			if(banderaCorteMasLiviano = true)
			{
				corteMasLiviano = peso;
				nombreCorteMasLiviano = nombreDelCorte;
				banderaCorteMasLiviano = false;
			}
			else
			{
				if(peso < corteMasLiviano)
				{
					corteMasLiviano = peso;
					nombreCorteMasLiviano = nombreDelCorte;
				}
			}
	
		}	
		respuesta = confirm("Desea ingresar mas datos?");

	}
	mensajeA = "El peso total de la compra es " + acumuladorPeso + "KG";
	mensajeB = " El nombre del corte mas caro de los sin hueso es " + nombreCorteMasCaro;
	mensajeC = " El nombre del corte mas liviano de los con hueso es " + nombreCorteMasLiviano;
	mensajeFinal = (mensajeA + mensajeB + mensajeC);

	alert(mensajeFinal);

}	*/
