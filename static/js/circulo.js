/**
 * Calcula el área y perímetro de un círculo.
 * 
 * Esta función toma el valor del radio de un círculo y calcula su área y perímetro.
 * Si el radio proporcionado no es válido, se muestra una alerta.
 */

function calcularCirculo() {
    const radio = Utils.getValidatedNumber('radio');
    if (radio === null) return;

    const area = Math.PI * radio * radio;
    const perimetro = 2 * Math.PI * radio;
    Utils.updateResult('resultado-circulo', area, perimetro);
}
