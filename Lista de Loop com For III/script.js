//ex 1 Sequencia Fibonacci
// function Fibonacci() {
//     anterior = 0
//     atual = 1
//     for (let f = 1; f <= 15; f++) {
//         proximo = anterior + atual
//         anterior = atual
//         atual = proximo
//         console.log(`${anterior}`)
//     }
// }
// Fibonacci()

//ex 2 
function contaGraos() {
    graosTotal = 1
    graos = 1
    for (let c = 1; c <= 64; c++) {
        graosProximaCasa = graosTotal + graos * 2
        graosTotal = graosProximaCasa
        graos = graos*2
        console.log(`${graosTotal}`)
    }
}
contaGraos()