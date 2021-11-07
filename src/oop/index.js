class Customer{
    constructor(id, customerNumber){
        this.id = id;
        this.customerNumber = customerNumber
    }
}

class IndividualCustumer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}