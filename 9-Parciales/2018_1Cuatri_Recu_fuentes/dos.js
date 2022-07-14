function mostrar()
{
  var nombre;
  var localidad;
  var mensaje;

  nombre = document.getElementById("elNombre").value;
  localidad = document.getElementById("laLocalidad").value;

  mensaje = ("Usted de llama " + nombre + " y vive en la localidad de " + localidad);

  alert(mensaje);




}
