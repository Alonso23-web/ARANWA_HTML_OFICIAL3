document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);

  // Obtener los datos de los adultos, niños, fechas, etc.
  const adults = urlParams.get('adults');
  const children = urlParams.get('children');
  const checkin = urlParams.get('checkin');
  const checkout = urlParams.get('checkout');
  const totalDays = urlParams.get('totalDays');  // Días de estancia
  const totalPrice = urlParams.get('totalPrice');

  // Mostrar los datos generales de la reserva
  document.getElementById('adults-count').textContent = adults;  // Mostrar el número de adultos
  document.getElementById('children-count').textContent = children;  // Mostrar el número de niños
  document.getElementById('checkin-display').textContent = checkin;  // Mostrar fecha de entrada
  document.getElementById('checkout-display').textContent = checkout;  // Mostrar fecha de salida

  // Calcular y mostrar el número de días de estancia
  document.getElementById('diasEstancia').textContent = `${totalDays} días`;

  // Mostrar las habitaciones seleccionadas (solo si la cantidad es mayor a 0)
  if (urlParams.has('cantidadHabitacion1') && urlParams.get('cantidadHabitacion1') > 0) {
    const cantidadHabitacion1 = urlParams.get('cantidadHabitacion1');
    const subtotal1 = urlParams.get('subtotal1');
    const habitacion1 = urlParams.get('habitacion1');
    const habitacionInfo = `${habitacion1}: - ${cantidadHabitacion1} habitación(es), Subtotal: USD ${subtotal1}`;
    document.getElementById('habitacion-1-container').innerHTML = `<p>${habitacionInfo}</p>`;
  }

  if (urlParams.has('cantidadHabitacion2') && urlParams.get('cantidadHabitacion2') > 0) {
    const cantidadHabitacion2 = urlParams.get('cantidadHabitacion2');
    const subtotal2 = urlParams.get('subtotal2');
    const habitacion2 = urlParams.get('habitacion2');
    const habitacionInfo = `${habitacion2}: - ${cantidadHabitacion2} habitación(es), Subtotal: USD ${subtotal2}`;
    document.getElementById('habitacion-2-container').innerHTML = `<p>${habitacionInfo}</p>`;
  }

  if (urlParams.has('cantidadHabitacion3') && urlParams.get('cantidadHabitacion3') > 0) {
    const cantidadHabitacion3 = urlParams.get('cantidadHabitacion3');
    const subtotal3 = urlParams.get('subtotal3');
    const habitacion3 = urlParams.get('habitacion3');
    const habitacionInfo = `${habitacion3}: - ${cantidadHabitacion3} habitación(es), Subtotal: USD ${subtotal3}`;
    document.getElementById('habitacion-3-container').innerHTML = `<p>${habitacionInfo}</p>`;
  }

  // Mostrar el precio total
  document.getElementById('totalPrice').textContent = `USD ${totalPrice}`;
});

// funcion para correo electronico
(function() {
   emailjs.init("service_iv60038"); // Reemplaza YOUR_USER_ID con el ID de usuario de EmailJS
})();

document.getElementById('reserve-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir que se recargue la página

  const name = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;  // Obteniendo los apellidos
  const email = document.getElementById('email').value;  // Correo ingresado por el usuario
  const phone = document.getElementById('phone').value;
  const dni = document.getElementById('dni').value;
  const city = document.getElementById('city').value;

  // Enviar el correo utilizando la plantilla creada y usando el correo del usuario
  emailjs.send('service_iv60038', 'template_wzggn4', {
    name: name,
    lastName: lastName,  // Incluir apellidos
    email: email,  // Usar el correo del usuario
    phone: phone,
    dni: dni,
    city: city,
    message: "Confirmación de reserva realizada con éxito." // Mensaje personalizado
  }).then(function(response) {
    console.log('Correo enviado', response);
    alert('Reserva realizada con éxito. Te hemos enviado un correo de confirmación a ' + email);
  }, function(error) {
    console.log('Error al enviar correo', error);
    alert('Hubo un problema al enviar el correo, por favor intentalo de nuevo.');
  });
});
