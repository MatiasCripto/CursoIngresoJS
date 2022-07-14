function mostrar() {
	var edad;
	var estado;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	mensaje = "Es soltero y no es menor";

	if (edad >= 18 && estado == "Soltero") {

		alert(mensaje);
	}






}//FIN DE LA FUNCIÓN