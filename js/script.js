const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});

function redireccion() {
    location.href = "../html/Login.html";
}

function redireccionAranwa() {
    location.href = "../index.html";
}

function redireccionServiciosDetalles() {
    location.href = "../html/ServiciosDetalles.html";
}

function redireccionReserva() {
    location.href = "../html/inicioreserva.html";
}

function redireccionNosotros() {
    location.href = "../html/Nosotros.html";
}

function redireccionEventos() {
    location.href = "../html/Eventos.html";
}

function redireccionSpa() {
    location.href = "../html/Spa.html";
}

function redireccionBodas() {
    location.href = "../html/Bodas.html";
}

function redireccionHotelCusco() {
    location.href = "../html/CUSCO.html";
}

function redireccionHotelValleSagrado() {
    location.href = "../html/SACRED VALLEY.html";
}

function redireccionHotelColca() {
    location.href = "../html/COLCA.html";
}

function redireccionHotelParacas() {
    location.href = "../html/PARACAS.html";
}

function redireccionHotelVichayito() {
    location.href = "../html/VICHAYITO.html";
}

function redireccionSesion(event) {
    event.preventDefault();
    location.href = "../html/InicioSesion.html";
}

function redimencionHotel() {
    location.href = "../html/Hoteles.html";
}

function redimencionPagos() {
    location.href = "../html/total.html";
}