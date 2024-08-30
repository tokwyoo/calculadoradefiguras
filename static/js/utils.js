/**
 * Este archivo define un objeto llamado "Utils" que contiene varias funciones útiles. Estas funciones incluyen:
 * 
 * - isValidNumber: Esta función verifica si un valor es un número válido. Devuelve true si el valor es un número y es mayor que cero, de lo contrario devuelve false.
 * - showAlert: Esta función muestra una alerta en el navegador con un mensaje específico. La intención es mostrar un mensaje de error al usuario si se proporciona un valor inválido.
 * - updateResult: Esta función actualiza el contenido de un elemento HTML con el área y el perímetro proporcionados. Los valores se formatean con dos decimales.
 * - getValidatedNumber: Esta función obtiene el valor de un elemento de entrada HTML y lo convierte en un número. Luego, verifica si el número es válido. Si el número no es válido, muestra una alerta y devuelve null. De lo contrario, devuelve el número validado.
*/

const Utils = (function () {
    
    function getValidatedNumber(inputId) {
        const value = parseFloat(document.getElementById(inputId).value);
        console.log('Valor obtenido:', value);
        if (isNaN(value) || value <= 0) {
            alert("Por favor, ingrese un valor válido.");
            return null;
        }
        return value;
    }

    function updateResult(elementId, area, perimetro) {
        document.getElementById(elementId).innerText = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
    }

    return {
        getValidatedNumber,
        updateResult
    };

})();
