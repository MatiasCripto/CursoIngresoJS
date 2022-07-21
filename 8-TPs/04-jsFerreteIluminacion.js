/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcentaje del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcentaje del 40 % y si es de otra marca el porcentaje es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcentaje del 25 % y si es de otra marca el porcentaje es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcentaje es del 15%, si es  “FelipeLamparas” se hace un porcentaje del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcentaje suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

 
function CalcularPrecio()
/*{
    var lampara;
    var cantidad;
    var porcentaje;
    var suma;
    var marca;
    var precioFinal;
    var impBrut;
    var mensaje;

    marca = document.getElementById("Marca").value;
    cantidad = document.getElementById("txtIdCantidad").value;
    porcentaje = document.getElementById("txtIdprecioDescuento").value;

    cantidad = parseFloat(cantidad);
    porcentaje = parseFloat(porcentaje);

    lampara = 35;

    suma = cantidad * lampara;


    //actividad A
    if (cantidad > 5) 
    {
        //LOS DESCUENTOS LOS HAGO A LA INVERSA.
        porcentaje = 50;
    }
    //actividad B
    else 
    {
        if (cantidad == 5) 
        {
            if (marca == "ArgentinaLuz") 
            {
                porcentaje = 60;
            }
            else 
            {
                porcentaje = 70;
            }

        }
        //actividad C
        if (cantidad == 4) 
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
            {
                porcentaje = 75;
            }

            else 
            {
                porcentaje = 80;
            }

        }
        //actividad D
        if (cantidad == 3) 
        {
            if (marca == "ArgentinaLuz") 
            {
                porcentaje = 85;
            }
            else 
            {
                if (marca == "FelipeLamparas") 
                {
                    porcentaje = 90;
                }
                else 
                {
                    porcentaje = 95;
                }


            }
        }



    }

    precioFinal = suma * porcentaje / 100;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    mensaje = ("Usted pago " +  impBrut + " siendo " +  (precioFinal * 10 / 100) + " el impuesto que se pagó");

    if(precioFinal > 120)
    {
        impBrut = precioFinal * 1.10;
        alert(mensaje);
    }
}*/ 
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcentaje del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcentaje del 40 % y si es de otra marca el porcentaje es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcentaje del 25 % y si es de otra marca el porcentaje es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcentaje es del 15%, si es  “FelipeLamparas” se hace un porcentaje del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcentaje suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*{
    var lampara;
    var cantidad;
    var suma;
    var porcentaje;
    var marca;
    var mensaje;
    var precioFinal;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseFloat(cantidad);
    porcentaje = parseFloat(porcentaje);

    lampara = 35;

    suma = cantidad * lampara;

    if (cantidad > 5) 
    {   
        //LOS DESCUENTOS LOS HAGO A LA INVERSA.
        porcentaje = 50;
    }
    else
    {
        if (cantidad == 5) 
        {
            
        
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 60;
            }
            else 
            {
                porcentaje = 70;
            }
        }   
        if (cantidad == 4) 
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
            {
                porcentaje = 75;
            }
            else 
            {
                porcentaje = 80;
            }

            }
        if (cantidad == 3) 
        {
            if (marca == "ArgentinaLuz") 
            {
                porcentaje = 85;
            }
            else 
            {
                if (marca == "FelipeLamparas") 
                {
                    porcentaje = 90;
                }
                else 
                {
                    porcentaje = 95;
                }
            }
        }

    }
    precioFinal = suma * porcentaje / 100;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    mensaje = ("Usted pago " +  impBrut + " siendo " +  (precioFinal * 10 / 100) + " el impuesto que se pagó");

    if(precioFinal > 120)
    {
        impBrut = precioFinal * 1.10;
        alert(mensaje);
    }

}*/



/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcentaje del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcentaje del 40 % y si es de otra marca el porcentaje es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcentaje del 25 % y si es de otra marca el porcentaje es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcentaje es del 15%, si es  “FelipeLamparas” se hace un porcentaje del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcentaje suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 //Aca es con switch y empezando por cantidad!!!
/*{

    var lampara;
    var cantidad;
    var suma;
    var porcentaje;
    var marca;
    var precioFinal;
    var mensaje;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseFloat(cantidad);
    porcentaje = parseFloat(porcentaje);

    lampara = 35;

    suma = cantidad * lampara;

    switch(cantidad)
    {
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    //LOS DESCUENTOS LOS HAGO A LA INVERSA.    
                    porcentaje = 60;
                break;
                default:
                    porcentaje = 70;
                break;
            }
        break;    
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 75;
                break;
                default:
                    porcentaje = 80;
                break;        
            }
        break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 85;
                break;    
                case "FelipeLamparas":
                    porcentaje = 90;
                break;
                default:
                    porcentaje = 95;
                break;        
            }    
        break;
        default:
            porcentaje = 50;
        break;        
    }
    precioFinal = suma * porcentaje / 100;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    mensaje = ("Usted pago " +  (precioFinal * 10 / 100) + " de IIBB ");

    if(precioFinal > 120)
    {
        impBrut = precioFinal * 1.10;
        
        alert(mensaje);
    }

}*/
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcentaje del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcentaje del 40 % y si es de otra marca el porcentaje es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcentaje del 25 % y si es de otra marca el porcentaje es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcentaje es del 15%, si es  “FelipeLamparas” se hace un porcentaje del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcentaje suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
//aca es con switch y empezando por marcas!!!
{
    var lampara;
    var cantidad;
    var suma;
    var porcentaje;
    var marca;
    var precioFinal;
    var mensaje;

    cantidad = document.getElementById("txtIdCantidad").value;    
    marca = document.getElementById("Marca").value;

    cantidad = parseFloat(cantidad);
    porcentaje = parseFloat(porcentaje);

    lampara = 35;

    suma = cantidad * lampara;

    switch(marca)
    {
        case "ArgentinaLuz":
            switch(cantidad)
            {
                case 5:
                    //LOS DESCUENTOS LOS HAGO A LA INVERSA.
                    porcentaje = 60;
                break;    
                case 4:
                    porcentaje = 75;
                break;    
                case 3:        
                    porcentaje = 85;
                break;    
                case 2:
                case 1:
                    porcentaje = 0;         
                break;   
                default:
                    porcentaje = 50;
                break;                            
            }
        break;    
        case "FelipeLamparas":
            switch(cantidad)
            {
                case 5:
                    porcentaje = 70;
                break;    
                case 4:
                    porcentaje = 75;
                break;    
                case 3:        
                    porcentaje = 90; 
                case 2:
                case 1:
                    porcentaje = 0                
                break;
                default:
                    porcentaje = 50;
                break; 
                        
            }
        break;    
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":        
            switch(cantidad)
            {
                case 5:
                    porcentaje = 70;
                break;    
                case 4:
                    porcentaje = 80;
                break;    
                case 3:        
                    porcentaje = 95;               
                break;
                case 2:
                case 1:
                    porcentaje = 0                
                break;
                default:
                    porcentaje = 50;
                break;                       
            }
        break;             

    }
    precioFinal = suma * porcentaje / 100;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    mensaje = ("Usted pago " +  (precioFinal * 10 / 100) + " de IIBB ");

    if(precioFinal > 120)
    {
        impBrut = precioFinal * 1.10;
        
        alert(mensaje);
    }

}
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcentaje del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcentaje del 40 % y si es de otra marca el porcentaje es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcentaje del 25 % y si es de otra marca el porcentaje es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcentaje es del 15%, si es  “FelipeLamparas” se hace un porcentaje del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcentaje suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*{
    var lampara;
    var cantidad;
    var marca;
    var porcentaje;
    var suma;
    var precioFinal;
    var impBruto;
    var mensaje;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);

    lampara = 35;

    suma = cantidad * lampara;

    

    if(cantidad > 5)
    {
        //LOS DESCUENTOS LOS HAGO A LA INVERSA.
        porcentaje = 50;
    }
    
    
    switch(cantidad)
    {
        case 5:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 60;
            }
            else
            {
                porcentaje = 70;
            }
        break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 75;
            }   
            else
            {
                porcentaje = 80;
            } 
        break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 85;
                
            }
            else
            {
                if(marca == "FelipeLamparas")
                {
                    porcentaje = 90;                          
                }
                else
                {
                    porcentaje = 95;
                }
            }        
        break;

    }
    precioFinal = suma * porcentaje / 100;
    
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    impBruto = precioFinal * 10 / 100;

    mensaje = ("Usted pago " + impBruto + " de IIBB");

    if(precioFinal > 120)
    {
        precioFinal * 1.10;
    }

    alert(mensaje);
}*/






