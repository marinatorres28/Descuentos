/* ACTIVIDAD 4.1 
Escribe una funcion que reciba como parámetros un precio y un porcentaje de descuento y devuelva 
el precio nuevo.
*/

//creamos la funcion con los parámetros de precio y descuento 
function precioDescuento(precio, porcentajeDescuento) {

    //creamos la variable descuento con la formula para su calculo
    let descuento = (precio * porcentajeDescuento) / 100;
    //calculamos el precio definitivo con el descuento aplicado
    let precioResultado = precio - porcentajeDescuento;
    //devolvemos a la funcion el precio definitivo
    return precioResultado;

}

//declaramos las variables precio y descuento
let precio = prompt("Indica el precio");
let porcentajeDescuento =prompt("Indica el descuento");

//declaramos una variable que almacene el resultado de la funcion
let precioConDescuento = precioDescuento(precio, porcentajeDescuento)

console.log("Precio -> " + precio);
console.log("Porcentaje de descuento -> " + porcentajeDescuento + "%");
console.log("Precio con descuento aplicado -> " + precioConDescuento);

alert("Precio con descuento aplicado -> " + precioConDescuento)