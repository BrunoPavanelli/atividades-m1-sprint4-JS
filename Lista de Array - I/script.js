//ex 1
function recebeValor() {
    let texto = prompt('Digite aqui sua palavra')
    while (texto.length < 5){
        alert('Minimo de 5 caracteres. Digite novamente')
        texto = prompt('Digite aqui sua palavra')
    }
    let arr_texto = [texto]
    return arr_texto
}
alert(`${recebeValor()}`)

//ex 2
let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]
function recebeNumero(x) {
    if (x < 0 || x > arr.length){
        alert('Valor nao encontrado')
    } else {
        alert(arr[x])
        return arr[x]
    } 
}
recebeNumero(5)

//ex 3
let arrNumbers = [1,2,3,4,5,6,7,8,9,10]
function recebeInteiro(numero) {
    let positionArr = arrNumbers[numero]
    if (positionArr % 2 === 0) {
        alert(`O valor nesta posição é par`)
        return (`O valor nesta posição é par`)
    } else {
        alert(`O valor nesta posição é ímpar`)
        return (`O valor nesta posição é ímpar`)
    }
}
recebeInteiro(9)

//ex 4
let nomes = ["12", "123", "123456789", '12345','12345678', '123456', '1234567'] 
function recebeLista(lista) {
    maiorNome = ''
    for (let i = 0; i < lista.length; i++) {
        let nomeAtual = lista[i]
        if (nomeAtual.length > maiorNome.length) {
            maiorNome = nomeAtual
        }
    }
    console.log(maiorNome)
}
recebeLista(nomes)

//ex 5
let numeros = [1,4,6,9,11,8]
function recebeValores(lista){
    // let n1 = 0
    // let n2 = 0
    let somaNFinais = 0
    // for (let i = 0; i < lista.length; i++) {
    //     n1 = lista[i]
    // }
    // console.log(n1)
    // for (let i = 0; i < lista.length -1; i++){
    //     n2 = lista[i] 
    // }
    // console.log(n2) 
    for (let i = 0; i < lista.length; i++) {
        if (i > lista.length -3) {
            somaNFinais += lista[i]
        }
    }  
    console.log(somaNFinais) 
    if (somaNFinais % 2 === 0) {
        return 'A soma é um múltiplo de 2'
    } else {
        return 'A soma não é um múltiplo de 2'
    }
}
console.log(recebeValores(numeros))

//ex 6
let numeros2 = [1,4,6,9,11,8]
function recebeNumerais(lista) {
    let somaNIniciais = 0
    for (let i = 0; i <= 1; i++) {
        somaNIniciais += lista[i]
    }
    console.log(somaNIniciais)
    if (somaNIniciais % 5 === 0) {
        return 'A soma é um múltiplo de 5'
    } else {
        'A soma não é um múltiplo de 5'
    }
}
console.log(recebeNumerais(numeros2))

//ex 7
let nomesArray = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]
function recebeArrayEValores(lista, nome, numero) {
    let varRecebeNome = ''
    for (let i = 0; i < lista.length; i++) {
        if (i === numero) {
            varRecebeNome = lista[i]
        }
    }
    console.log(varRecebeNome)
    if ( varRecebeNome === nome) {
    return 'Acertei'
    } else {
        return 'Não é quem eu pensava'
    }
}
console.log(recebeArrayEValores(nomesArray, 'Rafael', 4))

//ex 8
let numbers1 = [1,2,3,4,5,6,10]
let otherNumbers = [5,7,9,4,2,3,9]
function recebeArrays(lista1, lista2) {
    let comprimento1 = lista1.length
    let comprimento2 = lista2.length
    if (comprimento1 > comprimento2) {
        for (let i = 0; i < lista1.length; i++){
            if (i = lista1.length -1) {
                endPosition = lista1[i]
            }
        } 
        return `A maior lista é a ${lista1} cujo último número é ${endPosition}`
    } else {
        for (let i = 0; i < lista2.length; i++){
            if (i = lista2.length -1) {
                endPosition = lista2[i]
            }
        } 
    }        
    return `A maior lista é a ${lista2} cujo último número é ${endPosition}`
}
console.log(recebeArrays(numbers1, otherNumbers))