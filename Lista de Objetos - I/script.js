// 1 ª Parte Modelagem. 
//ex 1
let pessoa = {
    nome: 'Bruno',
    anoDeNascimento: 1996,
    cpf: 429475781806,
    cidade: 'São Paulo',
    estado: 'SP',
    logradouro: 'Rua Claudio',
}

//ex 2
let escola = {
    nome: 'Colégio EstudArte',
    cnpj: 1234566789,
    areaDeAtuacao: 'Graduação em Artes',
    cidade: 'João Pessoa',
    estado: 'Paraíba',
    logradouro: 'Rua Artítisca',
    curso: 'Bachalerado em Artes Plásticas',
}

//ex 3
let curso = {
    nome: 'Programando Dev',
    duracaoEmAnos: '1',
    turma: 9,
    modulos: 10,
}

//ex4
let endereco = {
    cidade: 'Espirto Santo do Pinhal',
    estado: 'São Paulo',
    logradouro: 'Rua dos Pardais',
    CEP: '0504-8002', 
}

//ex 5
let turma = {
    professores: [Hudson, Pablo, Priscilla, Thiago],
    alunos: [Bruno, Lucas, Matheus, Alcione, Alessandro],
    dataDeInicio: '20/10/2022',
    dataPrevistaDeFormatura: '20/10/2023',
}

// 2 ª Parte Manipulação. 
const figure = {  
    name: "Carl",   
    classes: ["warrior", 'Hunter', 'Barbarious'],
    leader_trend: true,
    power: 6, 
    allied: true  
}

//ex 1
function returnName() {
    return figure.name
}
console.log(returnName())

//ex 2
function verifyClasses() {
    if (figure.classes.length === 1) {
        return figure.classes[0]
    } else {
    return figure.classes
    }
}
console.log(verifyClasses())

//ex 3
function realPower() {
    if (figure.leader_trend === true) {
    return figure.power**2
    } else {
        return figure.power
    }
}
console.log(realPower())

//ex 4
function inserNewClass(string) {
    function confereCondicoes(string_F) {
        let auxRestultado = ''
        if ( figure.classes.length >= 3) {
            auxRestultado = 'Este personagem não pode estar em mais classes'
        } else if (string_F !== 'Warrior' && string_F !== 'Barbarious' && string_F !== 'Arch' && string_F !== 'Hunter' && string_F !== 'Survivor') {
            auxRestultado = 'Classe não existente'
        } else {
            for (let i = 0; i < figure.classes.length; i++) {
                if (figure.classes[i] === string_F) {
                    auxRestultado = `Personagem já pertence a classe ${string}`
                } 
            }
        } 
        return auxRestultado
    }
    confereCondicoes(string)
    if (confereCondicoes(string) !== '') {
        return confereCondicoes(string)
    } else {
        figure.classes.push(string)
        return `Classe ${string}, inserida com sucesso`
    }
}
console.log(inserNewClass('Barbarious'))
console.log(inserNewClass('Barbarious'))

//ex 5
function noMoreBarbarious(object) {
    if (figure.allied === true) {
        for (let i = 0; i < figure.classes.length; i++) {
            if (figure.classes[i] === 'Barbarious') {
                allied = false
                return `O ${figure.name}, agora é um inimigo`
            }
        }
    } else {
        return `O ${figure.name} é um inimigo`
    }
}
console.log(noMoreBarbarious(figure))