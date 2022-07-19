function mostrar()
{
 var planeta;
 var mensaje;

 planeta = prompt("Ingrese el nombre de un planeta");

    switch(planeta)
    {
        case "mercurio":
        case "venus":
            mensaje = ("Aca hace mas calor");
        break;
        case "tierra":
            mensaje = ("Aca vivimos");
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            mensaje = ("Aca hace mas frio");
        break;      
        default:
            mensaje = ("No es un planeta valido");                              
        
    }
        
    
            
    alert(mensaje);


}
