const botonNumeros = document.getElementsByName('data-number')
const botonOpera = document.getElementsByName('data-opera')
const botonIgual = document.getElementsByName('data-igual')[0]
const botonDelete = document.getElementsByName('data-delete')[0]
const result = document.getElementById('result')
let opeActual = ''
let opeAnterior = ''
let operacion

botonNumeros.forEach(boton => {
    boton.addEventListener('click', () => agregarNumero(boton.innerText))
})

botonOpera.forEach(boton => {
    boton.addEventListener('click', () => selectOperacion(boton.innerText))
})

botonIgual.addEventListener('click', () => {
    calcular()
    actualizarDisplay()
})

botonDelete.addEventListener('click', () => {
    clear()
    actualizarDisplay()
})

function selectOperacion(op) {
    if (opeActual === '') return
    if (opeAnterior !== '') calcular()
    operacion = op.toString()
    opeAnterior = opeActual
    opeActual = ''
}

function calcular() {
    const anterior = parseFloat(opeAnterior)
    const actual = parseFloat(opeActual)
    if (isNaN(anterior) || isNaN(actual)) return

    let calculo
    switch (operacion) {
        case '+':
            calculo = anterior + actual
            break
        case '-':
            calculo = anterior - actual
            break
        case '*':
            calculo = anterior * actual
            break
        case '/':
            calculo = anterior / actual
            break
        default:
            return
    }
    opeActual = calculo
    operacion = undefined
    opeAnterior = ''
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString()
    actualizarDisplay()
}

function clear() {
    opeActual = ''
    opeAnterior = ''
    operacion = undefined
}

function actualizarDisplay() {
    result.value = opeActual
}

clear()
