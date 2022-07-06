/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambre;
var mensaje;

largo = document.getElementById("txtIdLargo").value;
ancho = document.getElementById("txtIdAncho").value;

largo = parseFloat(largo);
ancho = parseFloat(ancho);

perimetro = (largo + ancho) * 2;

alambre = perimetro * 3;

mensaje = ("Se necesitan " + alambre + " metros de alambre");

alert(mensaje);

}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;
    var mensaje;
    const PI = 3.14;
    
    radio = document.getElementById("txtIdRadio").value;

    radio = parseFloat(radio);

    perimetro = 2 * PI * radio;
    
    alambre = perimetro * 3;
	
    mensaje = ("Se necesitan " + alambre + " metros de alambre");

    alert(mensaje);


}
function Materiales () 
{
	var ancho;
    var largo;
    var cemento;
    var cal;
    var area;
    var mensaje;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;
    
    cemento = area * 2;
    cal = area * 3;
      
    mensaje = "Para hacer un contrapiso de " + area + " metros cuadrados, se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal";
    
    alert(mensaje);
    
    
    
    area = largo * ancho;







}