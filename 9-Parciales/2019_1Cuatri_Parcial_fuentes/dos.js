function mostrar()
{
  var personaUno;
  var personaDos;
  var primerPeso;
  var segundoPeso;
  var suma;
  var promedio;
  var mensaje;

  personaUno = prompt("Ingrese el nombre del caballero");
  personaDos = prompt("Ingrese el nombre de la dama");
  primerPeso = prompt("Ingrese el peso del caballero");
  segundoPeso = prompt("Ingrese el peso de la dama");

  primerPeso = parseInt(primerPeso);
  segundoPeso = parseInt(segundoPeso);

  suma = primerPeso + segundoPeso;

  promedio = suma / 2;

  mensaje = ("Ustedes se llaman " + personaUno + " y " + personaDos + " y pesan " + primerPeso + " y " + segundoPeso + " kilos, que sumados son " + suma + " kilos, y el promedio de peso es " + promedio + " kilos ");

  alert(mensaje);

  
}
