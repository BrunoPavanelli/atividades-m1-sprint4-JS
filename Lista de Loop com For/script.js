//ex 1
console.log('ex 1')
function renderUpToHundred () {
    for (let contadora = 0; contadora  <= 100; contadora++) {
        console.log(`${contadora}`)
    }
}

renderUpToHundred ()

//ex 2
console.log('ex 2')
function tenInTenToAHundred() {
    for (let cont = 10; cont <= 100; cont += 10) {
        console.log(`${cont}`)
    }
}

tenInTenToAHundred()

//ex 3
console.log('ex 3')
function oddUpToAHundred() {
    for (let contImpar = 0; contImpar <= 100; contImpar++) {
        if (contImpar % 2 !== 0) {
            console.log(`${contImpar}`)
        }
    }
}

oddUpToAHundred()

//ex 4
console.log('ex 4')
function evenUpToAHundred() {
    for (let contPar = 0; contPar <= 100; contPar++) {
        if (contPar % 2 === 0) {
            console.log(`${contPar}`)
        }
    }
}

evenUpToAHundred()

//ex 5
function fromNegativeToPositive() {
    for (let negt = -10; negt <= 0; negt++) {
        console.log(`${negt}`)
    }
}

fromNegativeToPositive()

//ex 6
function inDescendingDirection() {
    for (let val = 10; val >= 0; val--) {
        console.log(`${val}`)
    }
}

inDescendingDirection()

//ex 7
function inDescendingDirectionTenOutOfTen() {
    for (let ten = 100; ten >= 10; ten -= 10) {
        console.log(`${ten}`)
    }
}

inDescendingDirectionTenOutOfTen()

//ex 8
function divisibleByTwoUpToTen() {
    for (let pares = 0; pares <= 10; pares += 2) {
        console.log(`${pares}`)
    }
}

divisibleByTwoUpToTen()

//ex 9
function toSquare() {
    for ( let n = 1; n <=10; n++) {
        let square = n**2
        console.log(`${square}`)
    }
}

toSquare()

//ex 10
function toExponent() {
    for ( let numb = 1; numb <=10; numb++) {
        let expoent = numb**numb
        console.log(`${expoent}`)
    }
}

toExponent()