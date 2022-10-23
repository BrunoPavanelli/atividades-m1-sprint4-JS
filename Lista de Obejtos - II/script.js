const carros = [
    {
    modelo:"Ka",
    marca:"Ford",
    ano:"2000",
    cor:"Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 'R$ 6.799,33'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 'R$ 12.199,13'
    },
    {
    modelo:"Palio",
    marca:"Fiat",
    ano:"1995",
    cor:"Verde",
    completo: false,
    acessorios: [],
    preco: 'R$ 11.099,11'
    },
    {
    modelo:"Monza",
    marca:"Chevrolet",
    ano:"1993",
    cor:"Vinho",
    completo: false,
    acessorios: [],
    preco: 'R$ 14.578,25'
    },
    {
    modelo:"Saveiro",
    marca:"VW",
    ano:"2013",
    cor:"Prata",
    completo: false,
    acessorios: [],
    preco: 'R$ 28.399,13'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 14.350,45'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"2013",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 22.109,21'
    },
    {
    modelo:"Montana",
    marca:"Chevrolet",
    ano:"2011",
    cor:"Azul",
    completo: false,
    acessorios: [],
    preco: 'R$ 15.999,13'
    },
    {
    modelo:"Stilo",
    marca:"Fiat",
    ano:"2000",
    cor:"Preto",
    completo: false,
    acessorios: [],
    preco: 'R$ 17.251,36'
    }
  ]

//ex 1
function totalDeCarros() {
    let totalDeItens = carros.length
    return totalDeItens
}
console.log(totalDeCarros())

//ex 2
function totalValor(lista) {
    somaTotal = 0
    for (let i = 0; i < lista.length; i++) {
        lista[i].preco = lista[i].preco.replace('R$', '')
        lista[i].preco = lista[i].preco.replace('.', '')
        lista[i].preco = lista[i].preco.replace(',', '.') 
        lista[i].preco = Number(lista[i].preco)
        somaTotal += lista[i].preco
    }
    return `A soma do preço de todos os veículos é de R$ ${somaTotal.toFixed(2)}`
}
console.log(totalValor(carros))

//ex 3
function procuraPorMarca(lista, marcaDeVeiculo) {
    carrosDaMarca = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].marca === marcaDeVeiculo) {
            carrosDaMarca.push(lista[i].modelo)
        }
    }
    return carrosDaMarca
}
console.log(procuraPorMarca(carros, 'Chevrolet'))

//ex 4
function procuraPorAcessorio(lista, acessorioDeVeiculo) {
    carrosComAcesserio = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].acessorios.length !== 0) {
            for (let c = 0; c < lista[i].acessorios.length; c++) {
                if(lista[i].acessorios[c] === acessorioDeVeiculo) {
                    carrosComAcesserio.push(lista[i].modelo)
                }
            }
        }
    }
    return carrosComAcesserio
}
console.log(procuraPorAcessorio(carros, 'Vidro Elétrico'))

//ex 5
function filtraCarroCompleto(lista) {
    let listaCarrosCompletos = [] 
    for (let i = 0; i < lista.length; i++) {
        for (let c = 0; c < lista[i].acessorios.length; i++) {
            if (lista[i].acessorios.length === 4) {
                listaCarrosCompletos.push(lista[i].modelo)
            }
        }
    }
    return listaCarrosCompletos
}
console.log(filtraCarroCompleto(carros))

//ex 6
let novoCarro = {
    modelo:"Stilo",
    marca:"Fiat",
    ano:"2008",
    cor:"Prata",
    completo: false,
    acessorios: [],
    preco: 'R$ 21.999,50'
}
function adicionaCarro(lista) {
    lista.push(novoCarro)
    return lista
}
console.log(adicionaCarro(carros))

//ex 7
function removeCarros(lista, index) {    
        if (index < 0 || index > lista.length) {
            return 'Índice inexistente'
        } else {
            lista.splice(index, 1)
        }

    return lista
}
console.log(removeCarros(carros, 0))

//ex 8 
function carrosNovos(lista) {
    const anoAtual = 2022
    let somaCarrosNovos = 0
    for (let i = 0; i < lista.length; i++) {
        lista[i].ano = Number(lista[i].ano)
        let diferenca = anoAtual - lista[i].ano
        if (diferenca < 10) {
            somaCarrosNovos++
        }
    }
    return somaCarrosNovos
}
console.log(carrosNovos(carros))

//ex 9
function carrosVelhos(lista) {
    const anoAtual = 2022
    let somaCarrosVelhos = 0
    for (let i = 0; i < lista.length; i++) {
        lista[i].ano = Number(lista[i].ano)
        let diferenca = anoAtual - lista[i].ano
        if (diferenca >= 10) {
            somaCarrosVelhos++
        }
    }
    return somaCarrosVelhos
}
console.log(carrosVelhos(carros))

//ex 10
dadosDono = {
    nome: 'Jorge',
    cidade: 'Rio de Janeiro'
}
function adicionaDono(lista, index, objetoPessoa) {
    objetoAuxiliar = {}
    for (let i = 0; i < lista.length; i++) {
        lista[i].dono = objetoAuxiliar
    }
    if (index < 0 || index > lista.length) {
        return 'Indicie inválido'
    } else {
        lista[index].dono = objetoPessoa
    }
    return lista
}
console.log(adicionaDono(carros, 4, dadosDono))