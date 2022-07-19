function mostrar() {
    var primerNum;
    var segundoNum;
    var suma;
    var mensaje;



    primerNum = prompt("Ingrese un numero.");
    segundoNum = prompt("Ingrese un numero.");

       
    if (primerNum == segundoNum) 
    {
        
        mensaje = (primerNum + segundoNum);
    }
    else 
    {
        if (primerNum > segundoNum)
             
        {
            primerNum = parseInt(primerNum);
            segundoNum = parseInt(segundoNum);
            
            mensaje = (primerNum - segundoNum);
        }
        else 
        {
            suma = primerNum + segundoNum;
            mensaje = (suma);
        }

    }

    if (suma > 10) 
    {
        mensaje = ("La suma es " + suma + " y supero el 10.");
    }
    alert(mensaje);
}
