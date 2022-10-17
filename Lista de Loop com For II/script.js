//Tenho usado a extensão do Node no VSCode para visuzaliar os exercicios.

//ex 1
function fullSquare() {
    for (let cont = 15; cont <= 200; cont++) {
        let square = cont**2
        console.log(`${square}`)
    }
}
fullSquare()

//ex 2
function soma100Primeiros() {
    //Salve Gauss!
    let soma = 0
    for (i = 1; i <= 100; i++) {
    soma += i
    }
    console.log(`${soma}`)
}
soma100Primeiros()

//ex 3
function divisibleByFour() {
    for (let num = 0; num < 200; num++)
        if (num % 4 == 0) {
            console.log(`${num}`)
        }
}
divisibleByFour()

//ex 4
// Esse exercicio deve ser visualizado na Web
function soma10Valores() {
    somador = 0
    for (let value = 1; value <= 10; value++) {
        let recebedor = Number(prompt('Digite um Valor'))
        somador += recebedor
        }
        alert(`${somador}`)
}
soma10Valores()

//ex 5
function somaEMedia() {
    let sum = 0
    let nPares = 0
    for (let valor = 50; valor <= 70; valor += 2) {
        sum += valor
        nPares += 1
    }
    media = sum / nPares
    console.log(`${sum}`)
    console.log(`${media}`)
}
somaEMedia()

//ex 6
function somaEMedia2() {
    let sum2 = 0
    let nImpares = 0
    for (let valor2 = 50; valor2 <= 70; valor2++) {
        if (valor2 % 2 !== 0){
        sum2 += valor2
        nImpares += 1
        }
    }
    media2 = sum2 / nImpares
    console.log(`${sum2}`)
    console.log(`${media2}`)
}
somaEMedia2()

//ex 7
function tenToTenCToF() {  
    for (Celsius = 10; Celsius <= 100; Celsius += 10) {
        let Fahrenheit = (Celsius * 9/5) + 32
        toString(console.log(`${Celsius}c = ${Fahrenheit}F`))
    }
}
tenToTenCToF()