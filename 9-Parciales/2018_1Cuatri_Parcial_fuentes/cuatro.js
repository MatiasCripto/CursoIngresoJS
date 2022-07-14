function mostrar() {
    var primerNum;
    var segundoNum;
    var suma;



    primerNum = prompt("Ingrese un numero.");
    segundoNum = prompt("Ingrese un numero.");

       
    if (primerNum == segundoNum) 
    {
        
        alert(primerNum + segundoNum);
    }
    else 
    {
        if (primerNum > segundoNum)
             
        {
            primerNum = parseInt(primerNum);
            segundoNum = parseInt(segundoNum);
            
            alert(primerNum - segundoNum);
        }
        else 
        {
            suma = primerNum + segundoNum;
            alert(suma);
        }

    }

    if ((suma) > 10) 
    {
        alert("La suma es " + suma + " y supero el 10.");
    }

}
