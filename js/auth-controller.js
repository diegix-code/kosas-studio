function iniciarSesion() {
    let correo = document.querySelector('#correo').value
    let clave = document.querySelector('#clave').value
    if(correo == 'usuario@correo.com' && clave == '12345') {
        alert('Bienvenido al sistema...')
        window.location.href = "/pages/catalogo.html"
    } else {
        alert('Credenciales incorrectas.')
    }
}

let btn_login = document.querySelector('#btn-login')
btn_login.addEventListener('click', iniciarSesion)