function addToCart(quantity, productName = "Elma") {

    console.log("Sepete Eklendi: " + productName + " adet: " + quantity)
    
}


// addToCart()
// addToCart(10)
// addToCart("Karpuz")

let sayHello = (name = "Semih") => {
    console.log("Hello " + name)
}

// sayHello("Engin")

function addToCart2(productName, quantity, unitPrice){

}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 3, 20)
addToCart2("Karpuz", 4, 15)

function addToCart3(product){
    console.log("Ürün: " + product.productName)
    console.log("Ürün Adet: " + product.quantity)
    console.log("Ürün Fiyat: " + product.unitPrice)
}

let product1 = {productName: "Elma", unitPrice: 10, quantity: 5}
let product2 = {productName: "Elma", unitPrice: 10, quantity: 5}
let product3 = {productName: "Elma", unitPrice: 10, quantity: 5}
product2 = product3
// product2.productName = "Karpuz"
// console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
// console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName: "Elma", unitPrice: 10, quantity: 5},
    {productName: "Armut", unitPrice: 20, quantity: 10},
    {productName: "Karpuz", unitPrice: 30, quantity: 15}
]

// addToCart4(products)


function add(...numbers) { // Rest
    let numberTotal = 0
    // for (let i = 0; i < numbers.length; i++) {
    //     numberTotal = numberTotal + numbers[i];
        
    // }
    numbers.forEach(e => {
        numberTotal = numberTotal + e
    })

    console.log(numberTotal)
}

// add(20,30)
// add(20,30,40)
// add(20,30,40,50)


let numbers = [10, 20, 500, 600, 120]
// console.log(...numbers)
// console.log(Math.max(...numbers))


let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name: "İç Anadolu", population: "20M"}, 
    {name: "Marmara", population: "30M"}, 
    {name: "Karadeniz", population: "10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Ordu", "Trabzon"],
    ]
]

// console.log(icAnadolu)
// console.log(marmara)
// console.log(marmaraSehirleri)

let productName, unitPrice, quantity;
let {productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} =  {productName: "Elma", unitPrice: 10, quantity: 5}

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
