/**
 * Calcula el área y perímetro de un triángulo.
 * 
 * Esta función toma los valores de los lados de un triángulo y calcula su área y perímetro.
 * Si los lados proporcionados no forman un triángulo válido, se muestra una alerta.
 */

function calcularTriangulo() {
    const a = Utils.getValidatedNumber('lado-a');
    const b = Utils.getValidatedNumber('lado-b');
    const c = Utils.getValidatedNumber('lado-c');

    if (a === null || b === null || c === null) return;

    if (a + b <= c || a + c <= b || b + c <= a) {
        alert('Los lados proporcionados no forman un triángulo válido.');
        return;
    }

    const perimetro = a + b + c;

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    Utils.updateResult('resultado-triangulo', area, perimetro);
}
