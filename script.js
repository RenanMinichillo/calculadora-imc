const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btnCalc = document.querySelector('#btn-calc')
const result = document.querySelector('#resultado')
const infoResult = document.querySelector('span strong')

btnCalc.addEventListener('click', () => {
    result.value = (peso.value / altura.value ** 2).toFixed(2)
    if (result.value <= 18.5) {
        infoResult.textContent = 'Abaixo do Normal'
    }
    else if (result.value >= 18.5 && result.value <= 24.9) {
        infoResult.textContent = 'Normal'
    }
    else if (result.value >= 25 && result.value <= 29.9) {
        infoResult.textContent = 'Sobrepeso'
    }
    else if (result.value >= 30 && result.value <= 34.9) {
        infoResult.textContent = 'Obesidade grau I'
    }
    else if (result.value >= 35 && result.value <= 39.9) {
        infoResult.textContent = 'Obesidade grau II'
    }
    else {
        infoResult.textContent = 'Obesidade grau III'
    }
})