import { users } from "../data/users.js"

export default class UserService {

    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "employee":
                    this.employees.push(user)
                    break;
                case "customer":
                    this.customers.push(user)
                    break;

                default:
                    this.errors.push("Wronh User Type" + user)
                    break;
            }
        }
    }

    add(user) {
        // this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        // return this.users
    }

    getById(id) {
        // return this.users.find(u => u.id === id)
    }

}