// Soru 1
function finPrime(...items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i]%2 == 0) {
            console.log(items[i] + " sayısı Asal.")
        } else {
            console.log(items[i] + " sayısı Asal Değil.")
        }
        
    }
}

// finPrime(2,5,8,21, 13)

// Soru 2
function friendNumbers(number1, number2) {
    let total1 = 0;
    let total2 = 0;

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1 = total1 + i
        }        
    }

    for (let j = 1; j < number2; j++) {
        if (number2 % j == 0) {
            total2 = total2 + j
        }        
    }

    if (number1 == total2 && number2 == total1) {
        console.log(number1 + " ve " + number2 + " Sayıları arkadaştır.")
    }else{
        console.log(number1 + " ve " + number2 + " Sayıları arkadaş değildir.")
    }
}

// friendNumbers(220, 284)

// Soru 3
function perfectNumbers() {
    for (let i = 1; i < 1000; i++) {
        let totalDivider = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                totalDivider = totalDivider + i
            }

            if (i == totalDivider) {
                console.log(i + " Mükemmel Sayıdır.")
            }
        }
        
    }
}

// perfectNumbers()


// Soru 4
function primeNumber(number) { 
    for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
    return true
}

function primeNumber2() {
    for (let i = 2; i < 1000; i++) {
        if (primeNumber(i) == true) {
            console.log(i + " Asal Sayıdır")
        }
 
    }
}
primeNumber2()

