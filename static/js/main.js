/**
 * Este archivo contiene el código principal de la aplicación que 
 * calcula áreas de diferentes figuras geométricas.
 * 
 * - El evento 'DOMContentLoaded' se utiliza para asegurarse de que el código se ejecute después de que el DOM se haya cargado completamente.
 * - El evento 'change' se activa cuando se selecciona una opción en el elemento 'figura-select'.
 * - Los elementos con la clase 'vista' se ocultan al principio y se muestran según la figura seleccionada.
 * - Los eventos 'click' en los botones 'calcular-circulo', 'calcular-cuadrado' y 'calcular-triangulo' llaman a las funciones correspondientes para calcular el área de cada figura.
 */

document.addEventListener('DOMContentLoaded', function () {
    const figuraSelect = document.getElementById('figura-select');
    const vistas = document.querySelectorAll('.vista');

    figuraSelect.addEventListener('change', function () {
        const selectedFigura = figuraSelect.value;
        vistas.forEach(vista => vista.classList.add('d-none'));
        if (selectedFigura) {
            document.getElementById(`vista-${selectedFigura}`).classList.remove('d-none');
        }
    });

    document.getElementById('calcular-circulo').addEventListener('click', calcularCirculo);
    document.getElementById('calcular-cuadrado').addEventListener('click', calcularCuadrado);
    document.getElementById('calcular-triangulo').addEventListener('click', calcularTriangulo);
});
