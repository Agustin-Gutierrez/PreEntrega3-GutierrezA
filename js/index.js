function validarYAlmacenar() {
    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const shoeSize = document.getElementById('shoeSize').value;

    localStorage.setItem('usuario', username);
    localStorage.setItem('contraseña', email);
    localStorage.setItem('edad', age);
    localStorage.setItem('shoeSize', shoeSize);

    // Validar que todos los campos requeridos estén llenos
    if (username && email && age && shoeSize) {
        // Todos los campos están llenos, ahora puedes ejecutar la función storage()
        storage();
    } else {
        // Mostrar un mensaje de error o realizar alguna acción para indicar que faltan datos
        alert('Por favor, complete todos los campos antes de enviar el formulario.');
    }
}

function storage(username, email, age, shoeSize) {
    
    alert('Datos almacenados correctamente');
}