// //ex 1
// function recebeListas(A, B) {
//     let C
//     //Conferir se listas tem exatamente 10 itens
//     function confereLength(lista) {
//         if (lista.length < 10 || lista.length > 10) {
//             return 'Lista fora dos padrões'
//         } else {
//             return true
//         }
//     }
//     console.log(confereLength(A))
//     console.log(confereLength(B))
//     //Conferir condições das listas
//     if (confereLength(A) === true && confereLength(B) === true) {
//         // Conferir se todos elementos são divisiveis por 2 e 3
//         function confereListaA(lista) {
//             somaValor = 0
//             let retorno 
//             for (let i = 0; i < lista.length; i++) {
//                 if (lista[i] % 2 !== 0 || lista[i] % 3 !== 0) {
//                     retorno = 'Valores não permitidos encontrados'
//                 } else {
//                     somaValor++
//                     if (somaValor === 10) {
//                         retorno = true
//                     }
//                 }
//             }
//             return retorno
//         }
//         // Conferir se todos elementos são múltiplos de 5
//         function confereListaB(lista) {
//             somaValor = 0
//             let retorno 
//             for (let i = 0; i <lista.length; i++) {
//                 if (lista[i] % 5 !== 0) {
//                     retorno = 'Valores não permitidos encontrados'
//                 } else {
//                     somaValor++
//                     if (somaValor === 10) {
//                         retorno = true
//                     }
//                 }
//             }
//             return retorno
//         }
//         console.log(confereListaA(A))
//         console.log(confereListaB(B))

//         if (confereListaA(A) === true && confereListaB(B) === true) {
//             C = [...A, ...B]
//             return C
//         } else {
//             return 'Não foi possível juntar as duas listas'
//         }
//     } else {
//         return 'Listas com valores ou comprimento não permitidos'
//     }
//     // console.log(confereListaA(A))
//     // console.log(confereListaB(B))
//     // Juntar as duas arrays


// }
// lista1 = [6,12,18,24,30,36,42,48,54,60]
// lista2 = [5,10,15,20,25,30,35,40,45,50]
// console.log(recebeListas(lista1, lista2))

// //ex 2
// function recebeArrays(A, B) {
//     let retorno  
//     //Conferir Lenght das listas
//     function confereLength(lista) {
//         if (lista.length < 12 || lista.length > 12) {
//             retorno = 'Lista fora dos padrões necessários'
//             return false
//         } else {
//             return true
//         }
//     }
//     confereLength(A)
//     confereLength(B)
//     //Conferir condições das listas
//     let condicaoA
//     let condicaoB
//     if (confereLength(A) === true && confereLength(B) === true) {
//         function confereListaA(lista) {
//             let auxRetorno
//             for (let i = 0; i < lista.length; i++){
//                 if (lista[i] % 2 === 0 || lista[i] % 3 === 0) {
//                     auxRetorno = true
//                 } else {
//                     retorno = "Valores não permitidos encontrados"
//                     auxRetorno = false
//                     return auxRetorno
//                 }
//             }
//             return auxRetorno
//         }

//         function confereListaB(lista) {
//             let auxRetorno
//             for (let i = 0; i < lista.length; i++){
//                 if (lista[i] % 5 !== 0) {
//                     auxRetorno = true
//                 } else {
//                     retorno = "Valores não permitidos encontrados"
//                     auxRetorno = false
//                     return auxRetorno
//                 }
//             }
//             return auxRetorno
//         }
//         condicaoA = confereListaA(A)
//         condicaoB = confereListaB(B)
//     } else {
//         retorno = 'Lista fora dos padrões necessários'
//     }

//     //Juntar as duas Arrays
//     let combinado
//     if (condicaoA === true && condicaoB === true) {
//     combinado = [...A, ...B]
//     retorno = combinado
//     }
//     return retorno
// }

// array1 = [6,12,18,24,30,36,42,48,54,60,66,72]
// array2 = [1,2,3,4,1,2,3,4,1,2,3,4]
// console.log(recebeArrays(array1, array2))