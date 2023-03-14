

function ingreso_usuario(){

    let nombre_usuario = document.querySelector(".nombreyapellido");
    let telefono = document.querySelector(".telefono");
    let mail = document.querySelector(".mail");

    let usuario = {nombre:nombre_usuario.value , tel:telefono.value , email:mail.value };
    
    let usuario_JSON = JSON.stringify(usuario);

    localStorage.setItem("cliente" , usuario_JSON);


}




let btn_ingreso = document.querySelector(".btn_enviar_contacto");
btn_ingreso.addEventListener("click" , ingreso_usuario );  


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
//!no puedo sustituir
    document.querySelector(".form_contacto").innerHTML = `<div class="container form_equipo">
                                                            <div class="row">
                                                                <div class="formulario_equipo row">
                                                                    <h3 >Ingrese los siguientes datos de su pileta</h3>
                                                                    <div class="col-md-3">
                                                                        <label class="form-label">Largo (Mts)</label>
                                                                        <input type="text" class="form-control largo" id="" placeholder="(hasta 2 decimales)">
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <label class="form-label">Ancho (Mts)</label>
                                                                        <input type="text" class="form-control ancho" id="" placeholder="(hasta 2 decimales)">
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <label class="form-label"> Profundida min (Mts)</label>
                                                                        <input type="text" class="form-control prof_min" id="" placeholder="(hasta 2 decimales)">
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        label class="form-label">Profundidad Maxima (Mts)</label>
                                                                        <input type="text" class="form-control prof_max" id="" placeholder="(hasta 2 decimales)">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>`
})