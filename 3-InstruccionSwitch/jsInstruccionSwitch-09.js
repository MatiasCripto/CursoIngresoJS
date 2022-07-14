function mostrar()
{
	var destino;
	var estacion;
	var tarifaBase;
	var precioFinal;
	var aumento;
	var descuento;

	aumento = 0;
	descuento = 0;

	tarifaBase = 15000
	
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				aumento = 20; 

			}else if(destino == "Mar del plata"){
				descuento = 20;
			}else{
				descuento = 10;
			}
			break;
		case "Verano":
			if(destino == "Bariloche"){
				descuento = 20;
			}else if (destino == "Mar del plata"){
				aumento = 20;
			}else {
				aumento = 10;
			}
			break;
		case "Otoño":
		case "Primavera":
			if(destino == "Cordoba"){
				aumento = 0
			}else {
				aumento = 10;
			}
			break;

	}	

	if(aumento != 0){
				precioFinal = tarifaBase + tarifaBase * aumento / 100;

			}else if(descuento != 0){
				precioFinal = tarifaBase - tarifaBase * descuento / 100;

			}else{
				precioFinal = tarifaBase;
	}
			alert("Precio Final es $" + precioFinal);



}//FIN DE LA FUNCIÓN