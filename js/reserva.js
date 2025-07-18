document.addEventListener('DOMContentLoaded', () => {
    const updateGuestsRoomsButton = document.getElementById('update-guests-rooms');
    const adultsInput = document.getElementById('adults');
    const childrenInput = document.getElementById('children');

    // Escuchar el evento de clic
    updateGuestsRoomsButton.addEventListener('click', (event) => {
        event.preventDefault();  // Evitar que el formulario se envíe y recargue la página

        const numberOfAdults = parseInt(adultsInput.value, 10);  // Convertir a número
        const numberOfChildren = parseInt(childrenInput.value, 10);  // Convertir a número

        // Mostrar los valores en la consola para verificar si están correctos
        console.log(`Adultos: ${numberOfAdults}, Niños: ${numberOfChildren}`);

        // Validar que haya al menos 1 adulto y el número de niños sea mayor o igual a 0
        if (numberOfAdults >= 1 && numberOfChildren >= 0) {
            console.log("Valores válidos, redirigiendo...");
            // Redirigir a la página de alojamientos con los parámetros en la URL
            window.location.href = `DiasdeEstancia.html?adults=${numberOfAdults}&children=${numberOfChildren}`;
        } else {
            // Si no es válido, muestra un mensaje de alerta
            alert('Por favor, selecciona al menos 1 adulto y asegúrate de que el número de niños sea válido (>= 0).');
        }
    });
});
