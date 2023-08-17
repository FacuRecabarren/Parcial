const validate = ({ nombre, apellido }) =>{
    let errors = {}
    let regexName= /([0-9])+/;

    if(!nombre.trim()) {
        errors.nombre= "Sin nombre no hay presidente"
    } else if (nombre.length < 3) {
        errors.nombre= "Nombre menores a 3 caracteres son corruptos"
    } else if (regexName.test(nombre.trim())) {
        errors.nombre= "No se permiten nombres de robot"
    }

    if(!apellido.trim()) {
        errors.apellido= "Por favor introduce un apellido"
    } else if (apellido.length < 6) {
        errors.apellido= "Por favor introduce un nombre mayor a 6 caracteres."
    } else if (regexName.test(apellido.trim())) {
        errors.apellido= "No se permiten apellidos de robot"
    }

    return errors;
}

export default validate;