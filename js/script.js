class Equipo {
    
    constructor ( nombre , precio , stock ){

    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

}

get_datos(){
    console.log("<------------->");
    console.log("Nombre: ", this.nombre);
    console.log("Precio: " , this.precio);
    console.log("stock: ", this.stock);
    console.log("");
}
get_stock(){
    if(this.stock <= 0 ){
        return false
    }
    else{
        return true
    }
}
venta_stock( cantidad){
    //CHEQUEO QUE LAS UNIDADES SEAN MENOR A LA CANTIDAD DEL STOCK
    if ( this.stock >= cantidad ){
        
        this.stock = this.stock - cantidad;
        return true

    }
    else{
        return false
    }
}
}

let lista_productos = [];
lista_productos.push ( new Equipo ("SUBMARINO POOL XPERT", 100000 , 4));
lista_productos.push ( new Equipo ("CLORADOR SALINO SCC MINI 20grs", 200000 , 2));
lista_productos.push ( new Equipo ("CLORADOR SALINO SCC 45grs", 300000 , 0));

function buscar_producto ( equipo){
    return equipo.nombre == compra_usuario;
}

function equipo_ideal (litros_cliente){

    if (litros_cliente <= 45000){
        return "SUBMARINO POOL XPERT"
    }
    else if ((litros_cliente > 45000) && (litros_cliente <= 60000)){
        return "CLORADOR SALINO SCC MINI 20grs"
    }
    else if (litros_cliente > 6000){
        return "CLORADOR SALINO SCC 45grs"
    }


}


/* alert("Bienvenido al Cotizador On-Line de Piscina Natural");
alert("Ingrese los siguientes Datos");
 */
/* let nombre = prompt("Ingrese su nombre: ");
let email = prompt("Ingrese su email: ");
let telefono = prompt("Ingrese su Telefono: "); */
    console.log (nombre);
    console.log (email);
    console.log (telefono);
    console.log("Bienvenido: " , nombre);



let largo = parseFloat(prompt ("Ingrese el LARGO de su pileta"));
let ancho = parseFloat(prompt ("Ingrese el ANCHO de su pileta"));
let prof_min = parseFloat(prompt ("Ingrese la Profundidad MINIMA de su pileta"));
let prof_max = parseFloat(prompt ("Ingrese la Profundidad MAXIMA de su pileta"));
    
let prof_prom = (prof_max + prof_min) /2;
    
console.log("El largo que ingreso es: " , largo);
console.log("El ancho que ingreso es: " , ancho);
console.log("La profundidad promedio que ingreso es: " , prof_prom);
        
    
let litros_cliente = (largo * ancho * prof_prom) * 1000;
console.log("Los litros aprox de su pileta son: " , litros_cliente);
console.log ("el equipo ideal para su pileta es: " , equipo_ideal(litros_cliente));

let compra_usuario = equipo_ideal(litros_cliente);
let resultado_busqueda = lista_productos.find( buscar_producto );
console.log("El precio es" , resultado_busqueda.precio)

console.log("ahora que conoce cual es el equipo quisiera realizar la compra?")

let opcion = prompt("Escriba SI para continuar o NO para salir")

while ((opcion != "SI") && (opcion != "NO")){
    alert ("ingrese SI o NO")
    opcion = prompt("Escriba SI para continuar o NO para salir")
}


if (opcion == "SI"){

    if (resultado_busqueda != undefined ){
    //Se encontro el producto que quiere comprar
        
    if(resultado_busqueda.get_stock()){
    console.log("tenemos stock: " , resultado_busqueda.nombre);
    //CHEQUEO SI TENGO STOCK DEL PRODUCTO
    let unidades = prompt ("Cuantas Unidades queres? stock: ", resultado_busqueda.stock);
    while (resultado_busqueda.venta_stock(unidades)){
                    console.log(`Compro  ${unidades} de ${resultado_busqueda.nombre}`);
    }
    
        console.log("No tenemos stock del producto: ", resultado_busqueda.nombre);
        console.log("stock disponible: ", resultado_busqueda.stock);
        
}
    else{
    console.log("No tenemos stock del producto: ", resultado_busqueda.nombre);
    console.log("stock disponible: ", resultado_busqueda.stock);
    }
}
    else {
            console.log("No se encontro el producto: ", compra_usuario);
    }
}
    else{
    console.log ("Adios, que tenga un gran dia!")
    }

    
    
    //Desarrollar el cotizador luego del equipo ideal para cotizar en cuotas + interes + iva (dolares)




