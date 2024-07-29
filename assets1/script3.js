
document.addEventListener('DOMContentLoaded', () => {
    let resultado = document.querySelector('.resultado');
    let valor1Input = document.getElementById('valor1');
    let valor2Input = document.getElementById('valor2');
    let sumarButton = document.getElementById('sumar');
    let restarButton = document.getElementById('restar');

    function actualizarResultado(valor1, valor2, operacion) {
        let resultadoValor;
        if (operacion === 'sumar') {
            resultadoValor = valor1 + valor2;
        } else if (operacion === 'restar') {
            resultadoValor = valor1 - valor2;
            if (resultadoValor < 0) resultadoValor = 0; 
        }
        resultado.textContent = resultadoValor;
    }

    sumarButton.addEventListener('click', () => {
        let valor1 = parseFloat(valor1Input.value) || 0;
        let valor2 = parseFloat(valor2Input.value) || 0;
        actualizarResultado(valor1, valor2, 'sumar');
    });

    restarButton.addEventListener('click', () => {
        let valor1 = parseFloat(valor1Input.value) || 0;
        let valor2 = parseFloat(valor2Input.value) || 0;
        actualizarResultado(valor1, valor2, 'restar');
    });
});
