document.addEventListener('DOMContentLoaded', () => {
  const calendarElement = document.getElementById('calendar');
  const monthYearElement = document.getElementById('calendar-month-year');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');
  const updateButton = document.getElementById('update-dates-button');
  const selectedDatesDisplay = document.getElementById('selected-dates');
  const totalDaysDisplay = document.getElementById('total-days');  // Para mostrar los días calculados.
  let currentDate = new Date();
  let selectedDates = [];

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();
    const endDay = lastDay.getDay();

    monthYearElement.textContent = `${monthNames[month]} ${year}`;
    calendarElement.innerHTML = '';

    // Días de la semana
    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    daysOfWeek.forEach(day => {
      const dayElement = document.createElement('div');
      dayElement.textContent = day;
      calendarElement.appendChild(dayElement);
    });

    // Días del mes
    for (let i = 0; i < startDay; i++) {
      calendarElement.appendChild(document.createElement('div'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement('div');
      dayElement.textContent = day;
      dayElement.classList.add('calendar-day');
      dayElement.addEventListener('click', () => selectDate(dayElement, day));
      calendarElement.appendChild(dayElement);
    }

    for (let i = endDay; i < 6; i++) {
      calendarElement.appendChild(document.createElement('div'));
    }
  };

  const selectDate = (dayElement, dayNumber) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);
    const formattedDate = date.toISOString().split('T')[0];

    if (selectedDates.includes(formattedDate)) {
      selectedDates = selectedDates.filter(date => date !== formattedDate);
      dayElement.classList.remove('selected');
    } else {
      if (selectedDates.length < 2) {
        selectedDates.push(formattedDate);
        dayElement.classList.add('selected');
      }
    }

    selectedDates.sort();
    updateSelectedDatesDisplay();
  };

  const updateSelectedDatesDisplay = () => {
    if (selectedDates.length === 2) {
      const checkinDate = new Date(selectedDates[0]);
      const checkoutDate = new Date(selectedDates[1]);

      // Calcular la diferencia entre las fechas
      const diffTime = checkoutDate - checkinDate;  // Milisegundos
      const diffDays = diffTime / (1000 * 3600 * 24);  // Convertir a días

      selectedDatesDisplay.textContent = `Entrada: ${selectedDates[0]} | Salida: ${selectedDates[1]}`;
      totalDaysDisplay.textContent = `Días de estancia: ${diffDays} días`;  // Mostrar los días de estancia calculados
    } else {
      selectedDatesDisplay.textContent = 'Selecciona una fecha de entrada y una de salida';
      totalDaysDisplay.textContent = 'Días de estancia: 0';
    }
  };

  prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

 
 updateButton.addEventListener('click', () => {
    // Recuperar los datos de adultos y niños de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const adults = urlParams.get('adults');
    const children = urlParams.get('children');

    if (selectedDates.length === 2) {
      const [checkin, checkout] = selectedDates;
      const diffTime = new Date(checkout) - new Date(checkin);  // Milisegundos
      const diffDays = diffTime / (1000 * 3600 * 24);  // Convertir a días

      // Pasar los datos de adultos, niños, checkin, checkout, y días de estancia a la página "Alojamientos"
      window.location.href = `alojamientos.html?adults=${adults}&children=${children}&checkin=${checkin}&checkout=${checkout}&totalDays=${diffDays}`;
    } else {
      alert('Por favor, selecciona una fecha de entrada y una de salida.');
    }
  });

  renderCalendar();
});