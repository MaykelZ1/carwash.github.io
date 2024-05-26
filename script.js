function showSection(sectionId) {
    fetch(sectionId + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content1').innerHTML = data;

            // Actualiza la clase activa del botón
            const buttons = document.querySelectorAll('.menu-button');
            buttons.forEach(button => {
                button.classList.remove('active');
            });
            document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
        })
        .catch(error => console.error('Error al cargar la sección:', error));
}
