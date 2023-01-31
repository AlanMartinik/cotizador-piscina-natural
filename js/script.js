//COTIZADOR SEGUN LA CANTIDAD DE LITROS DE LA PILETA SE MOSTRARA EL EQUIPO IDEAL
//Se informara la sal a comprar
//Se informara el precio del equipo (constante en dolares x tipo de cambio de la fecha)
//Descuento si es usuario 
//Precio en cuotas (segun precio y con sus intereses correspondientes)
//Vida util del equipo solo usando en verano
//Vida util del equipo usandolo todo el año
// Cantidad de horas prendido en verano y en invierno
//Cantidad de cloro que evita a usar
//Cantidad de horas que debe filtrarse cualquier pileta



alert("Bienvenido al Cotizador On-Line de Piscina Natural");
alert("Ingrese los siguientes Datos");

let nombre = prompt("Ingrese su nombre: ");
let email = prompt("Ingrese su email: ");
let telefono = prompt("Ingrese su Telefono: ");
    console.log (nombre);
    console.log (email);
    console.log (telefono);
    ingreso = prompt("ingrese AVANZAR para continuar");
    console.log("Bienvenido: " , nombre);

while (ingreso == "AVANZAR"){ 
    let cotizacion = prompt ("Ingrese COTIZADOR para iniciar o SALIR para finalizar");


if(cotizacion == "COTIZADOR"){
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
    console.log (equipo_ideal(litros_cliente));


}

else if ( cotizacion == "SALIR" ){

    console.log ("Lo esperamos pronto con los datos solicitados")
    break
}
else
    console.log("ingrese COTIZADOR o SALIR")

}


alert ("cuando guste lo esperamos nuevamente, Gracias!")


function equipo_ideal (litros_cliente){

    if (litros_cliente <= 45000){
        return "El equipo ideal para usted es el SUBMARINO POOL XPERT"
    }
    else if ((litros_cliente > 45000) && (litros_cliente <= 60000)){
        return "El equipo ideal para usted es el CLORADOR SALINO SCC MINI 20grs"
    }
    else if (litros_cliente > 6000){
        return "El equipo ideal para usted es el CLORADOR SALINO SCC 45grs"
    }


}