class Customer{
    constructor(Name){
        this.Name = Name;


    }
    age = 19;
    buy(){
        console.log(this.Name,"Hello world");
    }
    agedefine =() =>{
        console.log(this.age);
    }
}

let customer = new Customer('Aron');
customer.buy();
console.log(customer);
customer.agedefine();

class GuestCustomer extends Customer{
    hello(){
        console.log("Hello");
    }
}


let g = new GuestCustomer('Ashesh');
g.buy();
console.log(g)