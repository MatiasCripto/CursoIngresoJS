/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
/*{
	var numero; 
	var alert;

	numero = 0;
	alert = "";

	while(numero < 10)
	{
		numero = numero + 1;
		alert = alert + numero + " ";
	}
	alert(alert);

}*///FIN DE LA FUNCIÓN

/*{
	
function mostrar()
{	
	//definicion
	let edadIngresada;
	let nombreIngresado;
	let contadorDeVueltas;
	let iteraciones;

	//inicializacion
	contadorDeVueltas=0;//1era iteracion

/*
	edadIngresada=prompt("ingrese edad");
	nombreIngresado=prompt("ingrese nombre");
	alert("su nombre es : "+ nombreIngresado);
	alert("su edad es: "+edadIngresada);

	console.log("su nombre es : "+ nombreIngresado+" su edad es: "+edadIngresada)

*/

	/*while(contadorDeVueltas<2) //2da logica
	{

		edadIngresada=prompt("ingrese edad");//1era iteracion
		//if(edadIngresada>0 && edadIngresada<80)//mal
		//while(edadIngresada>0 && edadIngresada<80)//mal
		//while(!(edadIngresada>0 && edadIngresada<80))//casi bien
		//while(edadIngresada<0 && edadIngresada>80)//mal no entra nunca
		while(edadIngresada<0 || edadIngresada>80)//2da logica
		{
			edadIngresada=prompt("error, ingrese edad");
		}
		nombreIngresado=prompt("ingrese nombre");
		alert("su nombre es : "+ nombreIngresado);
		alert("su edad es: "+edadIngresada);

		console.log("su nombre es : "+ nombreIngresado+" su edad es: "+edadIngresada)
		//contadorDeVueltas=contadorDeVueltas+1; //3era modificacion de la variable de control
		contadorDeVueltas++;
	}*/

/*
	for(iteraciones=0;iteraciones<3;iteraciones++)
	{
		edadIngresada=prompt("ingrese edad");//1era iteracion
		//if(edadIngresada>0 && edadIngresada<80)//mal
		//while(edadIngresada>0 && edadIngresada<80)//mal
		//while(!(edadIngresada>0 && edadIngresada<80))//casi bien
		//while(edadIngresada<0 && edadIngresada>80)//mal no entra nunca
		while(edadIngresada<0 || edadIngresada>80)//2da logica
		{
			edadIngresada=prompt("error, ingrese edad");
		}
		nombreIngresado=prompt("ingrese nombre");
		alert("su nombre es : "+ nombreIngresado);
		alert("su edad es: "+edadIngresada);

		console.log("su nombre es : "+ nombreIngresado+" su edad es: "+edadIngresada)
		
	}
	*/
	{	
		//definicion
		let edadIngresada;
		let nombreIngresado;
		let contadorDeVueltas;
		let iteraciones;
		let sumaDeEdades;
		let promedioDeEdades;
		let edadPersonaMasJoven;
		let nombrePersonaMasJoven;
	
	
		//inicializacion
		contadorDeVueltas=0;//1era iteracion
		sumaDeEdades=0;
	
	/*
		edadIngresada=prompt("ingrese edad");
		nombreIngresado=prompt("ingrese nombre");
		alert("su nombre es : "+ nombreIngresado);
		alert("su edad es: "+edadIngresada);
	
		console.log("su nombre es : "+ nombreIngresado+" su edad es: "+edadIngresada)
	
	*/
	
		while(contadorDeVueltas<2) //2da logica
		{
			//if(edadIngresada>0 && edadIngresada<80)//mal
			//while(edadIngresada>0 && edadIngresada<80)//mal
			//while(!(edadIngresada>0 && edadIngresada<80))//casi bien
			//while(edadIngresada<0 && edadIngresada>80)//mal no entra nunca
			edadIngresada=prompt("ingrese edad");//1era iteracion
			edadIngresada=parseInt(edadIngresada);
			while(edadIngresada<0 || edadIngresada>80)//2da logica
			{
				edadIngresada=prompt("error, ingrese edad");
				edadIngresada=parseInt(edadIngresada);
				/*-if(edadIngresada>edadPersonaMasVieja)
				{
					edadPersonaMasVieja
				}
				derecho al recuperatorio
				*/
			}
	
			alturaIngresada=prompt("ingrese altura");//1era iteracion
			alturaIngresada=parseInt(alturaIngresada);
			while(alturaIngresada<30 || alturaIngresada>300)//2da logica
			{
				alturaIngresada=prompt("error, ingrese altura");
				alturaIngresada=parseInt(alturaIngresada);
			}
	
			sexoIngresada=prompt("ingrese sexo");//1era iteracion
			//if(sexoIngresada=="f" || sexoIngresada=="m")//mal
			//while(sexoIngresada=="f" || sexoIngresada=="m")//mal
			//while(!(sexoIngresada=="f" || sexoIngresada=="m"))//casi bien
			while(sexoIngresada!="f" && sexoIngresada!="m")//2da logica
			{
				sexoIngresada=prompt("error, ingrese sexo");
				
			}
	
			nombreIngresado=prompt("ingrese nombre");
			//termino todos los ingresos validados
	
			if(contadorDeVueltas==0)
			{
				edadPersonaMasJoven=edadIngresada;
				nombrePersonaMasJoven=nombreIngresado;
			}else
			{
				if(edadIngresada<edadPersonaMasJoven)
				{
					edadPersonaMasJoven=edadIngresada;
					nombrePersonaMasJoven=nombreIngresado;
				}
				else
				{
					if(edadIngresada>edadPersonaMasVieja)
					{
						edadPersonaMasVieja=edadIngresada;
						nombrePersonaMasVieja=nombreIngresado;
					}
				}
				
			}
			sumaDeEdades=sumaDeEdades+edadIngresada;
	
			alert("su nombre es : "+ nombreIngresado);
			alert("su edad es: "+edadIngresada);
			console.log("su nombre es : "+ nombreIngresado+" su edad es: "+edadIngresada)
			//contadorDeVueltas=contadorDeVueltas+1; //3era modificacion de la variable de control
			contadorDeVueltas++;//3era modificacion de la variable de control
		}//fin del while(contadorDeVueltas<2)
		
		promedioDeEdades=sumaDeEdades/contadorDeVueltas;
	
	
	
	/*
		for(i=0;i<3;i++)
		{
			edadIngresada=prompt("ingrese edad");//1era iteracion
			//if(edadIngresada>0 && edadIngresada<80)//mal
			//while(edadIngresada>0 && edadIngresada<80)//mal
			//while(!(edadIngresada>0 && edadIngresada<80))//casi bien
			//while(edadIngresada<0 && edadIngresada>80)//mal no entra nunca
			while(edadIngresada<0 || edadIngresada>80)//2da logica
			{
				edadIngresada=prompt("error, ingrese edad");
			}
			nombreIngresado=prompt("ingrese nombre");
			alert("su nombre es : "+ nombreIngresado);
			alert("su edad es: "+edadIngresada);
	
			console.log("su nombre es : "+ nombreIngresado+" su edad es: "+edadIngresada)
			
		}
		*/
	
	
	
		
	
	}//FIN DE LA FUNCIÓN




	



