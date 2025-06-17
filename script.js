window.onload = function () {
    const bienvenida = document.getElementById('bienvenida');
    bienvenida.classList.add('fade-in');
    bienvenida.style.display = 'block';

    // Ocultar después de 15 segundos
    setTimeout(() => {
        bienvenida.style.display = 'none';
    }, 15000);

    // Verificar modo oscuro guardado
    const modoOscuro = localStorage.getItem('modoOscuro') === 'true';
    if (modoOscuro) {
        document.body.classList.add('dark-mode');
    }
};

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('modoOscuro', isDark);
}
