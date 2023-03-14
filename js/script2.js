

function ingreso_usuario(){

    let nombre_usuario = document.querySelector(".nombreyapellido");
    let telefono = document.querySelector(".telefono");
    let mail = document.querySelector(".mail");

    let usuario = {nombre:nombre_usuario.value , tel:telefono.value , email:mail.value };
    
    let usuario_JSON = JSON.stringify(usuario);

    localStorage.setItem("cliente" , usuario_JSON);


}

function equipo_ideal(){

    let largo = parseFloat(document.querySelector(".largo").value);
    let ancho = parseFloat(document.querySelector(".ancho").value);
    let prof_min = parseFloat(document.querySelector(".prof_min").value);
    let prof_max = parseFloat(document.querySelector(".prof_max").value);

    let prof_prom = (prof_max + prof_min) /2  ;

    let litros_cliente = (largo * ancho * prof_prom) *1000 ;
    
    let info_equipo = document.getElementById("equipo")
    info_equipo.innerHTML = "";

    if (litros_cliente <= 45000){
        let equipo = document.createElement("p")
        equipo.innerHTML = `<p>El submarino es tu equipo</p>`
        info_equipo.append(equipo)
    }
    else if ((litros_cliente > 45000) && (litros_cliente <= 60000)){
        let equipo = document.createElement("p")
        equipo.innerHTML = `<p>El clorador es tu equipo</p>`
        info_equipo.append(equipo)
    }
    else if (litros_cliente > 6000){
        let equipo = document.createElement("p")
        equipo.innerHTML = `<p>El submarino es tu equipo</p>`
        info_equipo.append(equipo)
    }




}



let btn_ingreso = document.querySelector(".btn_enviar_contacto");
btn_ingreso.addEventListener("click" , ingreso_usuario );  

let boton_info = document.querySelector(".btn_info");
boton_info.addEventListener("click" , equipo_ideal);


let boton_avanzar = document.querySelector(".btn_avanzar")

boton_avanzar.addEventListener("click" , function (){

    let datos_equipo = document.querySelector(".form_equipo")

    if (datos_equipo.style.display != "block"){
        
        datos_equipo.style.display = "block"
    }
    else{
        datos_equipo.style.display ="none"
    }


    
})

boton_avanzar.addEventListener("click" , function (){

    document.querySelector(".form_contacto").innerHTML = ``


})

