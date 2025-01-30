const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnCalc = document.querySelector('#btn-calc');
const result = document.querySelector('#resultado');
const infoResult = document.querySelector('span strong');

function formatarInput(input) {
    input.value = input.value.replace(/[^0-9.,]/g, '');
}

peso.addEventListener('input', () => formatarInput(peso));
altura.addEventListener('input', () => formatarInput(altura));

btnCalc.addEventListener('click', () => {
    let pesoVal = peso.value.replace(',', '.'); // Troca vírgula por ponto
    let alturaVal = altura.value.replace(',', '.');

    if (!pesoVal || !alturaVal || isNaN(pesoVal) || isNaN(alturaVal)) {
        result.value = 'Entrada inválida';
        infoResult.textContent = '';
        return;
    }

    let imc = (parseFloat(pesoVal) / parseFloat(alturaVal) ** 2).toFixed(2);
    result.value = imc;

    if (imc <= 18.5) {
        infoResult.textContent = 'Abaixo do Normal';
    } else if (imc <= 24.9) {
        infoResult.textContent = 'Normal';
    } else if (imc <= 29.9) {
        infoResult.textContent = 'Sobrepeso';
    } else if (imc <= 34.9) {
        infoResult.textContent = 'Obesidade grau I';
    } else if (imc <= 39.9) {
        infoResult.textContent = 'Obesidade grau II';
    } else {
        infoResult.textContent = 'Obesidade grau III';
    }
});
