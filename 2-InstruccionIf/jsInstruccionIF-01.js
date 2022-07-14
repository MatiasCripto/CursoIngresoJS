function mostrar()
{
var edad;
var mensaje;

edad = document.getElementById("txtIdEdad").value;

edad = parseInt(edad);

mensaje = "Niña bonita";

if( edad == 15){
	alert(mensaje);
}

}