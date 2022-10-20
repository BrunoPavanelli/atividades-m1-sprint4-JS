// const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]
//ex 1
function inserirNovoELemento(num) {
    autput = listaDeElementos
    if (num >= 1 && num <=10 && num % 1 === 0) {
        autput.push(num)
    }
    console.log(`A lista Atualizada é ${autput}`)
}
inserirNovoELemento(2)

//ex 2
function retornaTodosElementos(){
    console.log(listaDeElementos)
}
retornaTodosElementos()

//ex 3
function retornaValorEspecifico(int) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]
    let recebe 
    if (int % 1 === 0) {
        for (let i = 0; i < listaDeElementos.length; i++) {
            if (int == i) {
                recebe = listaDeElementos[i]
            }
        }
    }
    return `O valor contido nesta posição ${recebe}`
}

console.log(retornaValorEspecifico(7))

//ex 4
function retornarTipoElemento(int) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]
    let recebe 
    if (int % 1 === 0) {
        for (let i = 0; i < listaDeElementos.length; i++) {
            if (int == i) {
                recebe = listaDeElementos[i]
            }
        }
    }
    if (typeof recebe === 'string') {
        return `O elemento ${recebe}, é um elemento do tipo texto`
    } else if (typeof recebe === 'number') {
        return `O elemento ${recebe}, é um elemento do tipo numero`
    }
}
console.log(retornarTipoElemento(4))

//ex 5
function removerElemento(int) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]
    let recebe 
    for (let i = 0; i < listaDeElementos.length; i++) {
        if (i === int) {
            recebe = listaDeElementos[i]
            listaDeElementos.splice(int, 1)
        }
    }
    return `O valor ${recebe}, foi removido da lista, a lista atualizado é: ${listaDeElementos}`
}
console.log(removerElemento(7))

//ex 6
function removeUltimoElementoString() {
    const listaDeElementos = [1,5,7,9,3, "10", "11", '15']
    if (typeof listaDeElementos[listaDeElementos.length - 1] === 'string') {
        listaDeElementos.pop()
        return 'Elemento deletado com sucesso'
    } else {
        return 'Falha ao remover o elemento da lista'
    }
}
console.log(removeUltimoElementoString())

//ex 7
function consultaPosicao(valor) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", '15'] 
    for (let i = 0; i < listaDeElementos.length; i++) {
        if (listaDeElementos[i] === valor) {
            return `O valor encontra-se na posição ${i}`
        }
    }
    return `Valor não encontrado`
}
console.log(consultaPosicao(10))

//ex 8
function removerElementoEspecifico(valor) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", '15'] 
    for (let i = 0; i < listaDeElementos.length; i++) {
        if (listaDeElementos[i] === valor) {
            listaDeElementos.splice(i, 1)
            console.log(listaDeElementos)
            return `Elemento ${valor} deletado com sucesso`
        }
    } 
    return 'Elemento não encontrado'   
}
console.log(removerElementoEspecifico(0))

//ex 9
function alteraElemento(posicao, valor) {
        const listaDeElementos = [1,5,7,9,3, "10", "11", '15'] 
    for (let i = 0; i < listaDeElementos.length; i++) {
        if (i === posicao) {
            listaDeElementos.splice(i, 1, valor)
            console.log(listaDeElementos)
            return `Atualização realizada com sucesso`
        }
    } 
    return 'Erro ao atualizar elemento'  
}
console.log(alteraElemento(7, 'pedro'))

//ex 10
function inserirNaPosicaoCorreta(valor) {
    const listaDeElementos = [1,5,7,9,3, "10", "11", '15']
    if (valor >= 0 && valor <= 10) {
        listaDeElementos.splice(0,1,valor)
        console.log(listaDeElementos)
    } else if (typeof valor === 'string') {
        listaDeElementos.splice(listaDeElementos.length -1,1,valor)
        console.log(listaDeElementos)
    } 
    return 'Lista Atualizada com Sucesso'
}
console.log(inserirNaPosicaoCorreta('rafa'))

