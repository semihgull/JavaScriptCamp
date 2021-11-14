import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")
let logger1 = new MongoLogger()
let userService = new UserService(new ElasticLogger())

let user1 = new User(1, "Semih", "Gül", "Ordu")
let user2 = new User(2, "Şeyma", "Sarı", "Ordu")

userService.add(user1)
userService.add(user2)


console.log(userService.list())
console.log(userService.getById(2))



let customer = {id:1, firstName: "Semih"}

customer.lastName = "Gül"

// console.log(customer.lastName)