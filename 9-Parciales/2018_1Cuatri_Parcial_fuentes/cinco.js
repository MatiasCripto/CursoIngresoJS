function mostrar()
{
 var planeta;
 var mensaje;

 planeta = prompt("Ingrese el nombre de un planeta");

    if(planeta == "tierra")
    {
        mensaje = "Aca vivimos."
    }
    else
    {
       if( planeta == "mercurio" || planeta == "venus")
        {
            mensaje = "Aca hace mas calor."
        }
        else
        {
            mensaje = "Aca hace mas frio."
        }
                
    
            
    }

    
            
    alert(mensaje);


}
