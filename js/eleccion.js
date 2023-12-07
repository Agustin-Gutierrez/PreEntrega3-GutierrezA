// Obtener el nombre almacenado en localStorage
const nombreAlmacenado = localStorage.getItem('usuario');

// Verificar si el nombre está presente
if (nombreAlmacenado) {
  // Mostrar el nombre 
    document.getElementById('nombreUsuario').innerHTML = `<br><br>Hola,<b> ${nombreAlmacenado}!</b> Los pies de gato son un tipo de calzado especializado utilizado en la escalada en roca. Son zapatos ajustados y flexibles diseñados específicamente para proporcionar un mayor agarre y sensibilidad en la superficie de la roca. Es por esto que elegir el modelo correcto es tan importante.`;
} else {
  // Mostrar un mensaje predeterminado si el nombre no existe
    document.getElementById('nombreUsuario').textContent = `Hola! Los pies de gato son un tipo de calzado especializado utilizado en la escalada en roca. Son zapatos ajustados y flexibles diseñados específicamente para proporcionar un mayor agarre y sensibilidad en la superficie de la roca. Es por esto que elegir el modelo correcto es tan importante.`;
}

const edadAlmacenado = localStorage.getItem('edad');
const talleAlmacenado = localStorage.getItem('shoeSize');

if (edadAlmacenado) {
    document.getElementById('datosUsuario').innerHTML = `Es necesario tener en cuenta ciertas características a la hora de escalar:<br><b>DATOS INGRESADOS:</b><br>Edad: <b> ${edadAlmacenado}</b><br>Talle: <b> ${talleAlmacenado}</b><br><br>El siguiente gráfico puede orientarte a la hora de elegir tu calzado ideal:`;

} else {
    document.getElementById('nombreUsuario').textContent = `ERROR EN LOS DATOS INGRESADOS :(`;
}