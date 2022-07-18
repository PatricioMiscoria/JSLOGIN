// Usuarios que en un furo tiene que venir de una base de datos
let usuarios = ['Patricio' , 'Raul' , 'Fede' , 'Alan' , 'Ozman' , 'Abel' , 'Viviana' , 'Fabricio']

// Claves que en un furo tiene que venir de una base de datos
let claves = [12341 , 12342 , 12343 ,12344 ,12345 ,12346 ,12347 ,12348]

// Banderas para guardar el indice "I" de los usuarios y clave
let usuario_bandera
let clave_bandera

// Bandera para saber si el usuario o la clave fue ingresada ok
let bandera_clave_ok = false
let bandera_usuario_ok = false

let usuario_ingresado = prompt("Ingrese su USUARIO")

    for( i = 0 ; i <=8; i++) {
        
        if(usuario_ingresado == usuarios[i]){
            usuario_bandera = i
            bandera_usuario_ok = true
        }

    }

let clave_ingresada = prompt("Ingrese su CLAVE")

    for( i = 0 ; i <=8; i++) {
        
        if(clave_ingresada == claves[i]){
            clave_bandera = i
            bandera_clave_ok = true
        }

    }

if(usuario_bandera == clave_bandera){
    if(bandera_clave_ok == true) {
        console.log(claves[clave_bandera])
    }
    else{
        console.log("Clave ERROR")
    }

    if(bandera_usuario_ok == true) {
        console.log(usuarios[usuario_bandera])
    }
    else{
        console.log("Usuario ERROR")
    }
}
else{
    console.log("Error en las Credenciales")

}


