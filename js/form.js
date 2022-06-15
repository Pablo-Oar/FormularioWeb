(function() {
    //Recupero el formulario
    let form = document.getElementById('formulario');

    //Recupero todos los inputs dentro del formulario.
    let inputs= document.querySelectorAll('#formulario input');
    
    //Defino el objeto con mis expresiones regulares.
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion bajo.
        nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // De 4 a 12 digitos.
        email:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    } 

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                //Paso la ExpReg. el input y el nombre.
                validarCampos(expresiones.usuario,e.target, 'usuario'); 
            break;
            case "nombre":
                validarCampos(expresiones.nombre,e.target, 'nombre'); 
            break;
            case "password":
                validarCampos(expresiones.password,e.target, 'password'); 
                validarPassword2();
            break;
            case "password2":
                validarPassword2();
            break;
            case "email":
                validarCampos(expresiones.email,e.target, 'email'); 
            break;
            case "telefono":
                validarCampos(expresiones.telefono,e.target, 'telefono'); 
            break;
        }
    }

    //Funcion para validar campos así reutilizo el codigo en el switch.
    const validarCampos = (expresion, input, campo) => {
        if(expresion.test(input.value)) { 
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');  
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        }else{
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');  
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        }
    }

    const validarPassword2 = ()=>{
        const pass1= document.getElementById('password');
        const pass2= document.getElementById('password2');

        if(pass1.value !== pass2.value){
            document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');  
            document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');

            document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        }else{
            document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');  
            document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');

            document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        }
    }

    //Quiero que por cada input me ejecute este código.
    inputs.forEach((input)=> {
        input.addEventListener('keyup', validarFormulario); // Cuando levanto una tecla valida el campo.
        input.addEventListener('blur', validarFormulario); // Cuando de un click fuera del input tambíen valido.
    })

    //Le agrego un evento al formulario.
    //Si estaria trabajando con el back valido los campos y envío los datos,
    //Pero ahora solamente valido los datos y limpio los campos.
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    })
    
}())