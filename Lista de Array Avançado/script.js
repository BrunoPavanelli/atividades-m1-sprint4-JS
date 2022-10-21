//ex 1
function recebeListas(A, B) {
    let C
    //Conferir se listas tem exatamente 10 itens
    function confereLength(lista) {
        if (lista.length < 10 || lista.length > 10) {
            return 'Lista fora dos padrões'
        } else {
            return true
        }
    }
    console.log(confereLength(A))
    console.log(confereLength(B))
    //Conferir condições das listas
    if (confereLength(A) === true && confereLength(B) === true) {
        // Conferir se todos elementos são divisiveis por 2 e 3
        function confereListaA(lista) {
            somaValor = 0
            let retorno 
            for (let i = 0; i < lista.length; i++) {
                if (lista[i] % 2 !== 0 || lista[i] % 3 !== 0) {
                    retorno = 'Valores não permitidos encontrados'
                } else {
                    somaValor++
                    if (somaValor === 10) {
                        retorno = true
                    }
                }
            }
            return retorno
        }
        // Conferir se todos elementos são múltiplos de 5
        function confereListaB(lista) {
            somaValor = 0
            let retorno 
            for (let i = 0; i <lista.length; i++) {
                if (lista[i] % 5 !== 0) {
                    retorno = 'Valores não permitidos encontrados'
                } else {
                    somaValor++
                    if (somaValor === 10) {
                        retorno = true
                    }
                }
            }
            return retorno
        }
        console.log(confereListaA(A))
        console.log(confereListaB(B))

        if (confereListaA(A) === true && confereListaB(B) === true) {
            C = [...A, ...B]
            return C
        } else {
            return 'Não foi possível juntar as duas listas'
        }
    } else {
        return 'Listas com valores ou comprimento não permitidos'
    }
    // console.log(confereListaA(A))
    // console.log(confereListaB(B))
    // Juntar as duas arrays


}
lista1 = [6,12,18,24,30,36,42,48,54,60]
lista2 = [5,10,15,20,25,30,35,40,45,50]
console.log(recebeListas(lista1, lista2))

//ex 2
function recebeArrays(A, B) {
    let retorno  
    //Conferir Lenght das listas
    function confereLength(lista) {
        if (lista.length < 12 || lista.length > 12) {
            retorno = 'Lista fora dos padrões necessários'
            return false
        } else {
            return true
        }
    }
    confereLength(A)
    confereLength(B)
    //Conferir condições das listas
    let condicaoA
    let condicaoB
    if (confereLength(A) === true && confereLength(B) === true) {
        function confereListaA(lista) {
            let auxRetorno
            for (let i = 0; i < lista.length; i++){
                if (lista[i] % 2 === 0 || lista[i] % 3 === 0) {
                    auxRetorno = true
                } else {
                    retorno = "Valores não permitidos encontrados"
                    auxRetorno = false
                    return auxRetorno
                }
            }
            return auxRetorno
        }

        function confereListaB(lista) {
            let auxRetorno
            for (let i = 0; i < lista.length; i++){
                if (lista[i] % 5 !== 0) {
                    auxRetorno = true
                } else {
                    retorno = "Valores não permitidos encontrados"
                    auxRetorno = false
                    return auxRetorno
                }
            }
            return auxRetorno
        }
        condicaoA = confereListaA(A)
        condicaoB = confereListaB(B)
    } else {
        retorno = 'Lista fora dos padrões necessários'
    }

    //Juntar as duas Arrays
    let combinado
    if (condicaoA === true && condicaoB === true) {
    combinado = [...A, ...B]
    retorno = combinado
    }
    return retorno
}

array1 = [6,12,18,24,30,36,42,48,54,60,66,72]
array2 = [1,2,3,4,1,2,3,4,1,2,3,4]
console.log(recebeArrays(array1, array2))

//ex 3
function confereListaComParesEImpares(A) {
    let somaPares = 0
    let somaImpares = 0
    if (A.length < 30 || A.length > 30) {
        return 'Lista com comprimento fora dos padrões'
    } else {
        for (let i = 0; i < A.length; i++) {
            if (A[i] % 1 !== 0) {
                return 'É aceito apenas valores inteiros'
            } else if (A[i] % 2 === 0 ) {
                somaPares++
            } else {
                somaImpares++
            }
        }
        return (`A lista recebida possui ${somaPares} e ${somaImpares} elementos impares`)
    }
}
listaNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
console.log(confereListaComParesEImpares(listaNumeros))

//ex 4
function retornaTerceiraLista(A, B) {
    let C 
    function confereLength(lista) {
        if (lista.length < 10 || lista.length >10) {
            return false
        } else {
            return true
        }
    }
    let retornoA
    let retornoB
    retornoA = confereLength(A)
    retornoB = confereLength(B)
    if (retornoA === true && retornoB === true) {
        function somaEEleva(lista1, lista2) {
            let lista3 = []
            let auxElemento1 = 0
            let auxElemento2 = 0
            let auxSoma = 0
            for (let i = 0; i < lista1.length; i++) {
                auxElemento1 = parseInt(lista1[i])
                for (let p = 0; p < lista2.length; p++) {
                    auxElemento2 = parseInt(lista2[i])
                }
                auxSoma = (auxElemento1 + auxElemento2)**2
                lista3.push(auxSoma)
            }

            // console.log(lista3)
            return lista3
        }
    } else {
        return 'O comprimento das listas não é válido'
    }
    somaEEleva(A,B)
    C = somaEEleva(A, B)
    return C
}
numeros1 = [1,1,1,1,1,1,1,1,1,1]
numeros2 = [2,2,2,2,2,2,2,2,2,2]
console.log(retornaTerceiraLista(numeros1, numeros2))

//ex 5
function recebeArraycom10(lista) {
    let somaImpares = 0
    let somaItens = 0
    let percentual = 0

    function confereLength(A) {
        if (A.length < 10 || A.length > 10) {
            return false
        } else {
            return true
        }
    }
    confereLength(lista)
    if (confereLength(lista) === true) {

        function confereElementos(A) {
            let auxRetorno
            for (let i = 0; i < A.length; i++) {
                if (A[i] % 1 === 0) {
                    auxRetorno = true
                } else {
                    return false
                }
            }
            return auxRetorno
        }
        confereElementos(lista)

        if (confereElementos(lista) === true) {
            for (let i = 0; i < lista.length; i++) {
                somaItens++
                if (lista[i] % 2 !== 0) {
                    somaImpares++
                } 
            }
            console.log(somaItens)
            console.log(somaImpares)
            percentual = somaImpares/somaItens
            } else {
                return 'Só é aceito valores Inteiros'
            }
    } else {
        return 'Lista com comprimento inválido'
    }
    return percentual
}
listaNumerosInteiros = [1,3,5,7,9,11,13,15,17,20]
console.log(recebeArraycom10(listaNumerosInteiros))
