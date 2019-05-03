
export default class ParticipantsService {
    static getParticipants() {
        return fetch(`https://gp-js-test.herokuapp.com/pizza/guests`)
            .then(response => response.json())
            .then(data => data.party)
    }

    static getDietParticipants(pizzaEaters) {
        let dietsUrl = `https://gp-js-test.herokuapp.com/pizza/world-diets-book/`;
        for (let i = 0; i < pizzaEaters.length; i++) {
            let element = pizzaEaters[i].replace(" ", "%20");
            if (i < pizzaEaters.length - 1)
            if (i < pizzaEaters.length - 1)
                dietsUrl += element + `,`;
            else dietsUrl += element;
        }
        return fetch(dietsUrl)
            .then(response => response.json())
            .then(data => data.diet);

    }
};
