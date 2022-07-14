/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno;
var numeroDos;
var porcentaje;
var mensaje;


numeroUno = document.getElementById("txtIdNumeroUno").value;
numeroDos = document.getElementById("txtIdNumeroDos").value;

numeroUno = parseFloat(numeroUno);
numeroDos = parseFloat(numeroDos);

porcentaje = (numeroDos - numeroUno) / numeroUno * 100;



mensaje = "El porcentaje de diferencia es " + porcentaje + "%";
alert(mensaje);




}

