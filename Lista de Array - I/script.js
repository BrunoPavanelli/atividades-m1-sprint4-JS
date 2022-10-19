// //ex 1
// function recebeValor() {
//     let texto = prompt('Digite aqui sua palavra')
//     while (texto.length < 5){
//         alert('Minimo de 5 caracteres. Digite novamente')
//         texto = prompt('Digite aqui sua palavra')
//     }
//     let arr_texto = [texto]
//     return arr_texto
// }
// alert(`${recebeValor()}`)

// //ex 2
// let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]
// function recebeNumero(x) {
//     if (x < 0 || x > arr.length){
//         alert('Valor nao encontrado')
//     } else {
//         alert(arr[x])
//         return arr[x]
//     } 
// }
// recebeNumero(5)

// //ex 3
// let arrNumbers = [1,2,3,4,5,6,7,8,9,10]
// function recebeInteiro(numero) {
//     let positionArr = arrNumbers[numero]
//     if (positionArr % 2 === 0) {
//         alert(`O valor nesta posição é par`)
//         return (`O valor nesta posição é par`)
//     } else {
//         alert(`O valor nesta posição é ímpar`)
//         return (`O valor nesta posição é ímpar`)
//     }
// }
// recebeInteiro(9)

// //ex 4
// let nomes = ["12", "123", "123456789", '12345','12345678', '123456', '1234567'] 
// function recebeLista(lista) {
//     maiorNome = ''
//     for (i = 0; i < lista.length; i++) {
//         nomeAtual = lista[i]
//         if (nomeAtual.length > maiorNome.length) {
//             maiorNome = nomeAtual
//         }
//     }
//     console.log(maiorNome)
// }
// recebeLista(nomes)

//ex 5
let numeros = [1,4,6,9,11,8]
function recebeValores(lista){
    let n1 = lista.length
    console.log(n1)
}
recebeValores(numeros)