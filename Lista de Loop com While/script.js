//ex 1
let nota = Number(prompt("Digite o valor da Nota"))
while (nota < 0 || nota >10) {
    alert("Valor Inválido")
     nota = Number(prompt("Digite novamente"))
}
alert(`Valor Válido: Nota ${nota}`)

//ex 2
let usuario = prompt("Usuario")
let Senha = prompt("Senha")
while (usuario === Senha) {
    alert("O nome de usuario e senha nao podem ser os mesmos")
    usuario = prompt("Usuario")
    Senha = prompt("Senha")
}
alert("Acesso Liberado")

//ex 3
let n = Number(prompt("Digite um valor"))
let somador = 0
baseMedia = 0
while (n > 0 && n < 10) {
    somador += n
    baseMedia++
    media = somador/baseMedia
    n = Number(prompt("Digite um valor"))
}
alert(`A soma dos numeros digitados é: ${somador} e a média entre eles é: ${media}`)

//ex 4
let candidatoA = 0
let candidatoB = 0
let candidatoC = 0
let voto = prompt('Em quem vai votar?')
while (voto != 'x') {
    if (voto == 1) {
        candidatoA++
        alert('Voto Registrado com Sucesso')
    } else if (voto == 2){
        candidatoB++
        alert('Voto Registrado com Sucesso')
    } else if (voto == 3){
        candidatoC++
        alert('Voto Registrado com Sucesso')
    } else {
        alert("Candidato não encontrado")
    } 
    voto = prompt('Em quem vai votar')
}
alert(`Candidato A teve ${candidatoA} votos. Candidato B teve ${candidatoB} votos. Candidato C teve ${candidatoC} votos.`)

//ex 5
let somandoTemp = 0
let temp = prompt("Digite a Temperatura a Somar")
while (temp != 'stop'){
    somandoTemp += Number(temp)
    temp = prompt("Digite a proxima Temperatura a Somar")
}
alert(`A soma das temperaturas é de: ${somandoTemp}`)


