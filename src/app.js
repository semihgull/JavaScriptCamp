// let sayi1 = 10;
// sayi1 = "Semih Gül";
// let student = {id: 1, name: "Semih"}
// let students = ["Semih Gül", "Şeyma Gül Sarı", "Birkaç isimler"];

// let students2 = [students, {id:2, name: 'Necmettin'}, 'Ordu', {city: "İstanbul"}]

// let showProducts = function (id, ...products){
//     console.log(id)
//     console.log(products)
// }

// // console.log(typeof showProducts)
// // console.log(2, "Araba", "Ev", "Tarla")

// let points = [1,2,3,4,50,14,4,60]
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC", "D", ..."DEF", "H")

// // Destructuring

// let populations = [10000, 20000, 30000, [40000, 50000]]
// let [small, medium, high, [veryHigh,maximum]] = populations
// console.log(small)
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(maximum)

// function someFunction([small1,test], number= 10){
//     console.log(test)
// }

// someFunction(populations)

// let category = {id: 1, name1: "İçecek"}
// console.log(category.id)
// console.log(category["name"])

// let {id, name1} = category

// console.log(id)
// console.log(name1)

let arr = ["elma", "armut", "ayva", "Kiraz", "Karpuz"]

let resultArr = arr.map(e => {return e})


resultArr.filter(e => {console.log(e[0]=="e")})

// console.log(resultArr)

