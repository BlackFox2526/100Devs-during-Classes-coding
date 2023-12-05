//Create a constructor with 4 properties and 3 methods
function PizzaMachine(toppings, size, sauce, cheese) {
    this.toppings = toppings
    this.size = size
    this.sauce = sauce
    this.cheese = cheese
    function order(){
        console.log("Yes please")
    }
    function eat(){
        console.log("Yes please")
    }
    function pay(){
        console.log("29.95?!")
    }
}

let pizza = new PizzaMachine("peperoni", "large", "marinara", "mozzarella")