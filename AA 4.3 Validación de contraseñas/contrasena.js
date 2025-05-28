/*function contrasena(password){
    return password.length >+8        
}*/

function contrasenados(password) {
    if (typeof password !== "string" ||  password.length < 8  ||password.includes(" ") || password === "" 
    || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
        return false;
    }
    return true;
}

//module.exports = contrasena;
module.exports = contrasenados;