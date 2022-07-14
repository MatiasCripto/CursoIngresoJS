function mostrar() {
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	mensaje = "Es menor de edad";

	if (edad >= 18) {

		mensaje = "Es mayor de edad"

	}

	alert(mensaje);









}//FIN DE LA FUNCIÓN