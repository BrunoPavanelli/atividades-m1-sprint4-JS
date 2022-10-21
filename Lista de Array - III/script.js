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