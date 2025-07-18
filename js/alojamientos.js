function calcularSubtotal(habitacionId) {
  const precios = {
    1: 224.00,  // Precio de Deluxe Superior con vista al corredor
    2: 272.00,  // Precio de Deluxe Superior con Balcón
    3: 218.00   // Precio de Junior Suite con Vista Panorámica
  };

  // Obtener la cantidad seleccionada
  const cantidad = document.getElementById(`cantidad-habitacion-${habitacionId}`).value;
  
  // Calcular el subtotal
  const subtotal = precios[habitacionId] * cantidad;
  
  // Mostrar el subtotal
  document.getElementById(`subtotal-habitacion-${habitacionId}`).textContent = `Subtotal: USD ${subtotal.toFixed(2)}`;

  // Calcular el total
  calcularTotal();
}

function calcularTotal() {
  const subtotal1 = parseFloat(document.getElementById('subtotal-habitacion-1').textContent.replace('Subtotal: USD ', '') || 0);
  const subtotal2 = parseFloat(document.getElementById('subtotal-habitacion-2').textContent.replace('Subtotal: USD ', '') || 0);
  const subtotal3 = parseFloat(document.getElementById('subtotal-habitacion-3').textContent.replace('Subtotal: USD ', '') || 0);

  const total = subtotal1 + subtotal2 + subtotal3;

  // Mostrar el total
  document.getElementById('total').textContent = `USD ${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Asignar el botón de reserva
  const reserveButton = document.getElementById('reservar-btn'); 

  // Asignar los precios de las habitaciones
  const precios = {
    1: 224.00,  // Precio de Deluxe Superior con vista al corredor
    2: 272.00,  // Precio de Deluxe Superior con Balcón
    3: 218.00   // Precio de Junior Suite con Vista Panorámica
  };

  // Asignar los nombres de las habitaciones
  const nombresHabitaciones = {
    1: "Habitación Deluxe",
    2: "Habitación Deluxe con Balcón",
    3: "Junior Suite"
  };

  // Evento de clic en el botón de reservar
  reserveButton.addEventListener('click', () => {
    // Obtener la cantidad de habitaciones seleccionadas
    const cantidadHabitacion1 = parseInt(document.getElementById('cantidad-habitacion-1').value, 10);
    const cantidadHabitacion2 = parseInt(document.getElementById('cantidad-habitacion-2').value, 10);
    const cantidadHabitacion3 = parseInt(document.getElementById('cantidad-habitacion-3').value, 10);

    // Si las cantidades son 0, no redirigir
    if (cantidadHabitacion1 <= 0 && cantidadHabitacion2 <= 0 && cantidadHabitacion3 <= 0) {
      alert('Por favor, selecciona al menos una habitación.');
      return; // Salir de la función si no se seleccionó ninguna habitación
    }

    // Subtotales de habitaciones
    const subtotal1 = cantidadHabitacion1 * precios[1];
    const subtotal2 = cantidadHabitacion2 * precios[2];
    const subtotal3 = cantidadHabitacion3 * precios[3];

    // Calcular el total de la reserva
    const totalPrice = subtotal1 + subtotal2 + subtotal3;

    // Recuperar los parámetros de la URL de la página anterior
    const urlParams = new URLSearchParams(window.location.search);
    const adults = urlParams.get('adults');
    const children = urlParams.get('children');
    const checkin = urlParams.get('checkin');
    const checkout = urlParams.get('checkout');
    const totalDays = urlParams.get('totalDays'); // Días de estancia

    // Construir la URL con los parámetros necesarios, incluyendo los subtotales, nombres de habitaciones y total
    let url = `total.html?adults=${adults}&children=${children}&checkin=${checkin}&checkout=${checkout}&totalDays=${totalDays}&totalPrice=${totalPrice.toFixed(2)}`;

    // Añadir las habitaciones seleccionadas a la URL solo si su cantidad es mayor a 0
    if (cantidadHabitacion1 > 0) {
      url += `&cantidadHabitacion1=${cantidadHabitacion1}&subtotal1=${subtotal1.toFixed(2)}&habitacion1=${nombresHabitaciones[1]}`;
    }
    if (cantidadHabitacion2 > 0) {
      url += `&cantidadHabitacion2=${cantidadHabitacion2}&subtotal2=${subtotal2.toFixed(2)}&habitacion2=${nombresHabitaciones[2]}`;
    }
    if (cantidadHabitacion3 > 0) {
      url += `&cantidadHabitacion3=${cantidadHabitacion3}&subtotal3=${subtotal3.toFixed(2)}&habitacion3=${nombresHabitaciones[3]}`;
    }

    // Redirigir a la página Total con los parámetros
    window.location.href = url;
  });
});
