function mostrar() {
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	mensaje = "Es adulto";

	if (edad < 13) {

		mensaje = "Es niño";

	} else {

		if (edad < 18) {

			mensaje = "Es adolecente";

		} else {


		}

	}
	alert(mensaje);


}








