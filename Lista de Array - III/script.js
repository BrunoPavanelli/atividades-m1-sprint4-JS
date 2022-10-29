//ex 1
function montaLista(lista) {
    arr = [1,'2',3]
    let combinado 

        for (let i = 0; i < lista.length; i++) {

            if (typeof lista[i] === 'string') {
                if (lista[i].length > 7){
                    console.log(`Não foi possível inserir este valor: excedeu o número máximo de strings`)
                    lista.splice(i,1)
                } else {
                    combinado = [...arr, ...lista]  
                }

            } else {
                combinado = [...arr, ...lista]              
            }
            
        } 

        for (let i = 0; i < combinado.length; i++) {
            if (combinado.length > 10) {
                console.log(`Não foi possível inserir este valor: excedeu a décima casa`)
                combinado.pop()
            }
        }

    return(`Elemento inserido com sucesso, a lista agora é: ${combinado}`)
}
arr_2 = [1,'123456778',2,3,4,5,'o rato roeu a ropa do rei de roma',6,7,8,9,10,11,12,'acorda pedrinho',13,14]
console.log(montaLista(arr_2))

//ex 2
function recebeLista(A) {
    let B = []
    if (A.length < 8 || A.length > 8) {
        return 'Lista Inválida'
    } else {
        for (let i = 0; i < A.length; i++) {
           B.push(A[i] * 3)
        }
    }
    return B
}
let lista = [3,3,3,3,3,3,3,3]
console.log(recebeLista(lista))

//ex 3
function recebeMatriz(A) {
    let B = []
    if (A.length < 15 || A.length > 15) {
        return 'Lista Inválida'
    } else {
        for (let i = 0; i < A.length; i++) {
            B.push(A[i] ** 2)
        }
    }
    return B
}
let matriz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(recebeMatriz(matriz))