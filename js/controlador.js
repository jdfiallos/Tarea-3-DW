
(()=>{
    let localstorage = window.localStorage;
    recibidos_ = []
    enviados_ = []

    let recibidos = [
        {
            emisor: 'Maria Perez',
            correoEmisor: 'jperez@gmail.com',
            asunto: 'Tarea primer parcial',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: '10:00am',
            leido: false,
            destacado: false,
            spam: false,
        },
        {
            emisor: 'Juan Perez',
            correoEmisor: 'jperez@gmail.com',
            asunto: 'Tarea primer parcial',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: '10:00am',
            leido: true,
            destacado: false,
            spam: true,
        },
        {
            emisor: 'Jose Perez',
            correoEmisor: 'jperez@gmail.com',
            asunto: 'Tarea primer parcial',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: '10:00am',
            leido: true,
            destacado: true,
            spam: false,
        },
        {
            emisor: 'David Perez',
            correoEmisor: 'jperez@gmail.com',
            asunto: 'Tarea primer parcial',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: '10:00am',
            leido: true,
            destacado: true,
            spam: false,
        },
    ]
    
    let papelera = [
        {
            emisor: 'Fernando Perez',
            correoEmisor: 'jperez@gmail.com',
            asunto: 'Tarea primer parcial',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: '10:00am',
            leido: false,
            destacado: false,
            spam: false,
        },
    ]

    let enviados = [
        {
            receptor: 'Pedro Martinez',
            emailReceptor: 'pmartinez@gmail.com',
            asunto: 'Saludos desde Intibucá',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: '11:00am'
        },
        {
            receptor: 'Pedro Martinez',
            emailReceptor: 'pmartinez@gmail.com',
            asunto: 'Saludos desde Intibucá',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: '11:00am'
        },
        {
            receptor: 'Pedro Martinez',
            emailReceptor: 'pmartinez@gmail.com',
            asunto: 'Saludos desde Intibucá',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            hora: '11:00am'
        },
    ]

    if (localstorage.getItem('recibidos') == null) {
        localstorage.setItem('recibidos', JSON.stringify(recibidos));
        recibidos_ = JSON.parse(localstorage.getItem('recibidos'));
        
    } else {
        recibidos_ = JSON.parse(localstorage.getItem('recibidos'));
        console.log(recibidos_)
    };
    

    if (localstorage.getItem('papelera') == null) {
        localstorage.setItem('papelera', JSON.stringify(papelera));
        papelera_ = JSON.parse(localstorage.getItem('papelera'));
        
    } else {
        papelera_ = JSON.parse(localstorage.getItem('papelera'));
        console.log(recibidos_)
    };

    
    if (localstorage.getItem('enviados') == null) {
        localstorage.setItem('enviados', JSON.stringify(enviados));
        enviados_ = JSON.parse(localstorage.getItem('enviados'));
    } else {
        enviados_ = JSON.parse(localstorage.getItem('enviados'));
        console.log(enviados_)
    };

    can = 0;
    for (let index = 0; index < recibidos_.length; index++) {
        if (recibidos_[index].spam == false){
            can += 1;
        }
    }

    document.getElementById('quantity').innerHTML = `
    <button onclick="totalRecibidos()"  style="border: none; color: grey !important; cursor: pointer;" class="btn boton">
    <i class="far fa-envelope"></i>
    Recibidos (${can})
    </button>
    `;
})();


/* Funcion para mostrar los correos recibidos. */
function totalRecibidos() {
    acumulador = ''
    document.getElementById('correos').innerHTML = ''
    for (let index = 0; index < recibidos_.length; index++) {

        leido = '';
        leidoDentro = '';

        botonLeido = ''
        if (recibidos_[index].leido == false) {
            leido = `style="font-familiy: arial !important; font-weight: bold !important;"`;
            leidoDentro = `font-familiy: arial !important; font-weight: bold !important;"`;
            botonLeido = `<i class="fas fa-check-square"></i>`;
            disponible = ``;
        } else {
            leido = '';
            leidoDentro='';
            botonLeido = `<i class="far fa-check-square"></i>`;
            disponible = `disabled`;
        }

        estrella = '';
        if (recibidos_[index].destacado == true){
            estrella = `style="color: yellow;"`
        } else {
            estrella = ``;
        }


        if (recibidos_[index].spam == true) {
            acumulador +=``;
        } else {
            acumulador += `
                <div class="row mt-2 border-bottom">
                    <div class="col-4 col-sm-4 col-md-4 mt-1" ${leido}>
                        <button class="btn" onclick="seen(${recibidos_[index].leido}, ${index})" ${disponible}>
                            ${botonLeido}
                        </button>                    
                        <button class="btn" onclick="destaca(${recibidos_[index].destacado}, ${index})">
                            <i ${estrella} class="far fa-star"></i>
                        </button>
                        <button class="btn" style="color: gray !important;" onclick="spamear(${index})">
                            <i class="fas fa-exclamation-triangle"></i>
                        </button>
                        ${recibidos_[index].emisor}
                    </div>
                    <div class="col-3 col-sm-2 mt-2" style="color: gray !important; ${leidoDentro}">
                        <label ${leido}>${recibidos_[index].asunto}</label>
                    </div>
                    <div class="col-2 col-md-3 col-lg- mt-2" style="color: gray !important; ${leidoDentro}">
                        <label>${recibidos_[index].mensaje}</label>
                    </div>
                    <div class="col-2 col-md-2  mt-2" style="text-align: right; ${leidoDentro}">
                        <label ${leido}>${recibidos_[index].hora}</label>
                    </div>
                    <div class="col-1 col-sm-1 col-md-1">
                        <button style="color: red;" class="btn" onclick="enviarPapelera(${index})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            `;
        } 
    }
    document.getElementById('correos').innerHTML = acumulador;
}

/* Funcion para marcar un mensaje como leido */
function seen(valor, idRecibido) {
    let localstorage = window.localStorage;
    dest = JSON.parse(localstorage.getItem('recibidos'));
    nuevoDestacado = dest[idRecibido];
    
    valor = true;
62
    nuevoEstado = {
        emisor: nuevoDestacado.emisor,
        correoEmisor: nuevoDestacado.correoEmisor,
        asunto: nuevoDestacado.asunto,
        mensaje: nuevoDestacado.mensaje,
        hora: nuevoDestacado.hora,
        leido: true,
        destacado: nuevoDestacado.destacado,
        spam: nuevoDestacado.spam,
    }
    dest.splice(idRecibido, 1)
    dest.push(nuevoEstado);
    recibidos_ = dest;
    localstorage.setItem('recibidos', JSON.stringify(dest));
    totalRecibidos();
    console.log('Funciono');

}

/* Funcion para mandar a spam un correo */
function spamear(id){
    let localstorage = window.localStorage;
    dest = JSON.parse(localstorage.getItem('recibidos'));
    nuevoSpam = dest[id];
    
    valor = true;

    nuevoEstado = {
        emisor: nuevoSpam.emisor,
        correoEmisor: nuevoSpam.correoEmisor,
        asunto: nuevoSpam.asunto,
        mensaje: nuevoSpam.mensaje,
        hora: nuevoSpam.hora,
        leido: nuevoSpam.leido,
        destacado: nuevoSpam.destacado,
        spam: valor,
    }
    
    dest.splice(id, 1)
    dest.push(nuevoEstado);
    recibidos_ = dest;
    localstorage.setItem('recibidos', JSON.stringify(dest));
    totalRecibidos();
    console.log('Se espameo.');
}


/* Con esta funcion determinamos de nuevo el valor de destacado. */
function destaca(estado, id){
    let localstorage = window.localStorage;
    dest = JSON.parse(localstorage.getItem('recibidos'));
    nuevoDestacado = dest[id];
    
    valor = true;
    if (estado == true) {
        valor = false;
    } else {
        valor = true;
    }

    nuevoEstado = {
        emisor: nuevoDestacado.emisor,
        correoEmisor: nuevoDestacado.correoEmisor,
        asunto: nuevoDestacado.asunto,
        mensaje: nuevoDestacado.mensaje,
        hora: nuevoDestacado.hora,
        leido: nuevoDestacado.leido,
        destacado: valor,
        spam: nuevoDestacado.spam,
    }
    dest.splice(id, 1)
    dest.push(nuevoEstado);
    recibidos_ = dest;
    localstorage.setItem('recibidos', JSON.stringify(dest));
    totalRecibidos();
    console.log('Se destaco');
}


/* Funcion para mostrar los correos enviados */
function enviados() {
    acumulador = ''
    document.getElementById('correos').innerHTML = ''
    for (let index = 0; index < enviados_.length; index++) {
            acumulador +=``;

            acumulador += `
            <div class="row mt-2 border-bottom">
                <div class="col-3 mt-1">
                    ${enviados_[index].receptor}
                </div>
                <div class="col-4 col-sm-3 mt-2" style="color: gray !important;">${enviados_[index].asunto}</div>
                <div class="col-4 mt-2" style="color: gray !important;">${enviados_[index].mensaje}</div>
                <div class="col-1 mt-2" style="text-align: right;">
                    ${enviados_[index].hora}
                </div>
                <div class="col-1" >
                    <button style="color: red;" class="btn" onclick="eliminar(${index})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }
    document.getElementById('correos').innerHTML = acumulador;
}

/* Funcion para eliminar cuando se encuentran en enviados. Unico boton en esa seccion. */
function eliminar(idEnviado){
    let localstorage = window.localStorage;
    envi = JSON.parse(localstorage.getItem('enviados'));
    envi.splice(idEnviado, 1)
    enviados_ = envi;
    localstorage.setItem('enviados', JSON.stringify(envi));
    enviados();
    console.log('Se elimino');
}

/* Funcion para mostrarar destacados. */
function destacados() {
    acumulador = ''
    document.getElementById('correos').innerHTML = ''
    for (let index = 0; index < recibidos_.length; index++) {

        leido = ''
        if (recibidos_[index].leido == true) {
            leido = `<i class="fas fa-check"></i>`
        } else {
            leido = '';
        }

        estrella = '';
        if (recibidos_[index].destacado == true){
            estrella = `style="color: yellow;"`
        } else {
            estrella = ``;
        }

        if (recibidos_[index].destacado == false) {
            acumulador +=``;
        } else {
            acumulador += `
                <div class="row mt-2 border-bottom">
                    <div class="col-3 mt-1">
                        <button class="btn">
                            <i ${estrella} class="far fa-star"></i>
                        </button>
                        <button class="btn" style="color: gray !important;">
                            <i class="fas fa-exclamation-triangle"></i>
                        </button>
                        ${recibidos_[index].emisor}
                    </div>
                    <div class="col-3 mt-2" style="color: gray !important;">${recibidos_[index].asunto}</div>
                    <div class="col-3 mt-2" style="color: gray !important;">${recibidos_[index].mensaje}</div>
                    <div class="col-2 mt-2" style="text-align: right;">
                        ${recibidos_[index].hora}
                    </div>
                    <div class="col-1">
                        <button style="color: red;" class="btn">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            `;
        } 
    }
    document.getElementById('correos').innerHTML = acumulador;
}

/* Funcion para visualizar los correos con Spam en true. */
function spam() {
    acumulador = ''
    document.getElementById('correos').innerHTML = ''
    for (let index = 0; index < recibidos_.length; index++) {

        leido = ''
        if (recibidos_[index].leido == true) {
            leido = `<i class="fas fa-check"></i>`
        } else {
            leido = '';
        }

        estrella = '';
        if (recibidos_[index].destacado == true){
            estrella = `style="color: yellow;"`
        } else {
            estrella = ``;
        }

        if (recibidos_[index].spam == false) {
            acumulador +=``;
        } else {
            acumulador += `
                <div class="row mt-2 border-bottom">
                    <div class="col-3 mt-1">
                        <button class="btn">
                            <i ${estrella} class="far fa-star"></i>
                        </button>
                        <button class="btn" style="color: gray !important;">
                            <i class="fas fa-exclamation-triangle"></i>
                        </button>
                        ${recibidos_[index].emisor}
                    </div>
                    <div class="col-3 mt-2" style="color: gray !important;">${recibidos_[index].asunto}</div>
                    <div class="col-3 mt-2" style="color: gray !important;">${recibidos_[index].mensaje}</div>
                    <div class="col-2 mt-2" style="text-align: right;">
                        ${recibidos_[index].hora}
                    </div>
                    <div class="col-1">
                        <button style="color: red;" class="btn">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            `;
        } 
    }
    document.getElementById('correos').innerHTML = acumulador;
}


/* Funcion para ver correo en papelera. */
function papelera() {
    acumulador = ''
    document.getElementById('correos').innerHTML = ''
    for (let index = 0; index < recibidos_.length; index++) {

        if (recibidos_[index].spam == true) {
            acumulador +=``;
        } else {
            acumulador += `
                <div class="row mt-2 border-bottom">
                    <div class="col-3 mt-1">
                        ${recibidos_[index].emisor}
                    </div>
                    <div class="col-3 mt-2" style="color: gray !important;">${recibidos_[index].asunto}</div>
                    <div class="col-3 mt-2" style="color: gray !important;">${recibidos_[index].mensaje}</div>
                    <div class="col-2 mt-2" style="text-align: right;">
                        ${recibidos_[index].hora}
                    </div>
                    <div class="col-1">

                    </div>
                </div>
            `;
        } 
    }
    document.getElementById('correos').innerHTML = acumulador;
}

/* Funcion para enviar correo a la papelera */
function enviarPapelera(idCorreo) {
    let localstorage = window.localStorage;
    dest = JSON.parse(localstorage.getItem('recibidos'));
    nuevoSpam = dest[idCorreo];
    
    
    dest.splice(idCorreo, 1)
    recibidos_ = dest;
    localstorage.setItem('recibidos', JSON.stringify(recibidos_));
    localstorage.setItem('papelera', JSON.stringify(nuevoSpam));
    totalRecibidos();
    console.log('Se envio a papelera.');
}


/* Mostar bandeja de envio */
function modalSent(){
    var redaccion = document.getElementById('letra');
    redaccion.style.visibility = 'visible ';
}


/* Funcion para mandar a enviados */
function emailSent() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    final = hoy.toDateString();

    const enviado = {
        receptor: document.getElementById('de').value,
        emailReceptor: document.getElementById('para').value,
        asunto: document.getElementById('asunto').value,
        mensaje:document.getElementById('mensaje').value,
        hora: final,
    };

    let localstorage = window.localStorage;
    dest = JSON.parse(localstorage.getItem('enviados'));


    dest.push(enviado);
    enviados_ = dest;
    localstorage.setItem('enviados', JSON.stringify(enviados_));
    totalRecibidos();
    enviados();
    console.log('Se envio');
    document.getElementById('de').value = '';
    document.getElementById('para').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('mensaje').value = '';
    cerrar()
}


/* Funcion boton cerra */
function cerrar(){
    var redaccion = document.getElementById('letra');
    redaccion.style.visibility = 'hidden '; 
}