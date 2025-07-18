// Seleccionamos los elementos necesarios del DOM
const adultsSelect = document.getElementById("adults");
const childrenSelect = document.getElementById("children");
const updateButton = document.querySelector("button");

// Escuchamos el evento "change" para actualizar dinámicamente los valores seleccionados
adultsSelect.addEventListener("change", () => {
    console.log(`Adultos seleccionados: ${adultsSelect.value}`);
});

childrenSelect.addEventListener("change", () => {
    console.log(`Niños seleccionados: ${childrenSelect.value}`);
});

// Acción al presionar el botón de "Actualizar"
updateButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir envío del formulario
    alert(`Huéspedes actualizados: 
    ${adultsSelect.value} Adultos y 
    ${childrenSelect.value} Niños`);
});
