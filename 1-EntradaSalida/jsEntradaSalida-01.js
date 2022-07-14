/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
/*
{
	let saludo;

	saludo = "Esto funciona de maravilla"
	alert(saludo);
}

*/
{
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







}