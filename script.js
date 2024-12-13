
// Comprobar si el audio ya está sonando al cargar la página
if (localStorage.getItem('isPlaying') === 'true') {
    loveSong.play();
}

// Función para validar contraseña
function validatePassword() {
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (passwordInput === "ELSE") {
        // Reproducir canción si no está sonando
        if (loveSong.paused) {
            loveSong.play();
        }

        // Guardar estado del audio en localStorage
        localStorage.setItem('isPlaying', 'true');

        // Redirigir a la segunda pantalla
        window.location.href = "mensaje.html";
    } else {
        // Mostrar mensaje de error
        errorMessage.textContent = "ES LO QUE TE DIGO AVECES MI ELSE";
        errorMessage.style.display = "block";
    }
}
function showScreen(screenNumber) {
    // Ocultar todas las pantallas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Mostrar la pantalla seleccionada
    const currentScreen = document.getElementById(`screen${screenNumber}`);
    currentScreen.classList.add('active');
    
    // Asegurarse de que el audio siga sonando sin interrupción
    const loveSong = document.getElementById('loveSong');
    if (loveSong.paused) {
        loveSong.play();
    }
}
