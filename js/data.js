let usuarios = [
    {
        id:"1",
        nombre: "Andres Sanchez",
        correo: "andres@correo.com",
        telefono: "1234567890",
        contrasena: "12345"
    },
    {
        id:"2",
        nombre: "Maria Gomez",
        correo: "maria@correo.com",
        telefono: "3245778900",
        contrasena: "12345"
    }
]

export function buscarUsuario(correo, clave){
    let auth = usuarios.find((usuario) => correo == usuario.correo && clave == usuario.contrasena)
    return auth
}
export function registrarUsuario(nombre, correo, telefono, contrasena){
    let nuevoUsuario = {
        id: (usuarios.length + 1).toString(),
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        contrasena: contrasena
    }
}