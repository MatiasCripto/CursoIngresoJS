/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    var lampara;
    var cantidad;
    var descuento;
    var suma;
    var marca;
    var precioFinal;
    var impBrut;

    marca = document.getElementById("Marca").value;
    cantidad = document.getElementById("txtIdCantidad").value;
    descuento = document.getElementById("txtIdprecioDescuento").value;

    cantidad = parseFloat(cantidad);
    descuento = parseFloat(descuento);

    lampara = 35;

    suma = cantidad * lampara;


    //actividad A
    if (cantidad > 5) 
    {
        descuento = 50;
    }
    //actividad B
    else 
    {
        if (cantidad == 5) 
        {
            if (marca == "ArgentinaLuz") 
            {
                descuento = 60;
            }
            else 
            {
                descuento = 70;
            }

        }
        //actividad C
        if (cantidad == 4) 
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
            {
                descuento = 75;
            }

            else 
            {
                descuento = 80;
            }

        }
        //actividad D
        if (cantidad == 3) 
        {
            if (marca == "ArgentinaLuz") 
            {
                descuento = 85;
            }
            else 
            {
                if (marca == "FelipeLamparas") 
                {
                    descuento = 90;
                }
                else 
                {
                    descuento = 95;
                }


            }
        }



    }

    precioFinal = suma * descuento / 100;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 120)
    {
        impBrut = precioFinal * 1.10;
        alert("Usted pago " +  impBrut + " siendo " +  (precioFinal * 10 / 100) + " el impuesto que se pagó")
    }
}





