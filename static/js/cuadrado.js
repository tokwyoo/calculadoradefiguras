/**
 * Calcula el área y perímetro de un cuadrado.
 * 
 * Esta función toma el valor del lado de un cuadrado y calcula su área y perímetro.
 * Si el lado proporcionado no es válido, se muestra una alerta.
 */

function calcularCuadrado() {
    const lado = Utils.getValidatedNumber('lado-cuadrado');
    if (lado === null) return;

    const area = lado * lado;
    const perimetro = 4 * lado;
    Utils.updateResult('resultado-cuadrado', area, perimetro);
}
