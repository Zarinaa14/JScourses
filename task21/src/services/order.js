export default class OrderService {
    static getPizzaOrder(pizzaEaters) {
        let pizzaType;
        if (pizzaEaters.vegansNumber / pizzaEaters.pizzaEatersNumber > 0.51) {
            pizzaType = (Math.random() >= 0.51) ? 'vegan' : 'cheese';
        } else pizzaType = "meat";
        let pizzaOrderUrl = "https://gp-js-test.herokuapp.com/pizza/order/" + pizzaType +"/" +pizzaEaters.pizzaEatersNumber;
        return fetch(pizzaOrderUrl)
            .then(response => response.json());
    }

    static getColaOrder(guestsLength){
        return  fetch("https://gp-js-test.herokuapp.com/pizza/order-cola/"+guestsLength)
            .then(response => response.json());
    }

    static getCurrencies() {
        return fetch("https://gp-js-test.herokuapp.com/pizza/currency")
            .then(response => response.json());
    }
};

