import React from 'react';
import {OrderList} from "./components/OrderList";
import {Pizza} from './components/Pizza';
import ParticipantsService from './services/participants.js'
import OrderService from './services/order.js'
import "./styles.css";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isWaitingData: false,
            isLoadSuccessful: false,
            allParticipants: [],
            who_eats_pizza: [],
            cola: {},
            pizza: {},
            currencies: {}
        };

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button className="load-btn" onClick={() => this.clickLoadButton()}>
                       click
                    </button>
                </div>
                {this.state.isWaitingData && <p>Waiting...</p>}
                {!this.state.isWaitingData && this.state.isLoadSuccessful && (
                    <React.Fragment>
                        <Pizza countEaters={this.state.who_eats_pizza.length}/>
                        <OrderList
                            className="pizzaOrderList"
                            payMoney={this.payMoney}
                            who_eats_pizza={this.state.who_eats_pizza}
                            money={{
                                balanceMoney: Math.floor(10 *  this.state.balanceMoney) / 10,
                                moneyToShare: this.state.moneyToShare,
                                totalOrder: Math.floor(10 * this.state.totalOrder) / 10,
                                paidMoney:  Math.floor(10 * this.state.paidMoney) / 10
                            }}></OrderList>

                    </React.Fragment>
                )}
            </React.Fragment>
        );
    };

    clickLoadButton = () => {
        this.setState({
            isWaitingData: true,
            isLoadSuccessful: false,
        });

        this.loadParticipantsData().then((order) => {
            const {participants, who_eats_pizza, prices, pizzaType} = order;
            this.setState({
                isWaitingData: false,
                isLoadSuccessful: true,
                allParticipants: participants,
                who_eats_pizza: who_eats_pizza,
                totalOrderPrice: prices.fullCost,
                pizzaType: pizzaType,
                moneyToShare: prices.costPizza,
                moneyForDrinks: prices.costCola
            });
        }).catch(error=>{
            this.setState({
                isWaitingData: false
            });
            console.error(error.message)});

    };

    loadParticipantsData = async () => {
        let participants = await ParticipantsService.getParticipants();
        this.setState({allParticipants:participants});
        this.setState({
            who_eats_pizza: participants
                .filter(item => { if (item.eatsPizza) return item;})
                .map(item => {  return item.name;})
        });

        const eaters = await ParticipantsService.getDietParticipants(this.state.who_eats_pizza);
        let vegans = eaters
            .filter(x => { return x.isVegan; })
            .map(x => x.name);
        this.setState({ vegans: vegans});
        let pizzas = {
                vegansNumber: vegans.length,
                pizzaEatersNumber: this.state.who_eats_pizza.length};


        const response = await Promise.all([
            OrderService.getPizzaOrder(pizzas),
            OrderService.getColaOrder(participants.length),
            OrderService.getCurrencies()
        ]);

        this.setState({  pizza: response[0], cola: response[1], currencies: response[2] });
        const {who_eats_pizza,pizzaType, ...prices} =  this.calculateOrder();
        this.setState({
            isWaitingData: false,
            isLoaded: true
        });

        return {
            who_eats_pizza,
            participants,
            prices,
            pizzaType
        }

    };

    calculateOrder= () =>  {
        let pizzaPrice = this.state.pizza.price.split(' ');
        let drinksPrice = this.state.cola.price.split(' ');

        const costPizza =  Math.ceil(parseFloat(pizzaPrice[0]) *  this.state.currencies[pizzaPrice[1]] / this.state.allParticipants.length * 10) / 10;
        const costCola =   Math.ceil(parseFloat(drinksPrice[0]) *  this.state.currencies[drinksPrice[1]] /  this.state.who_eats_pizza.length * 10) / 10;
        const fullCost = (costPizza * this.state.who_eats_pizza.length) + (costCola *  this.state.allParticipants.length);
        const who_eats_pizza = this.state.who_eats_pizza.map((name, index) => {
            let isVegan = false;
            if (this.state.vegans.indexOf(name) !== -1) isVegan = true;
            return {
                name: name,
                money: costPizza,
                id: index,
                isVegan: isVegan
            };
        });
        return {
            who_eats_pizza ,
            costPizza,
            costCola,
            fullCost,
            pizzaType:  this.state.pizza.type
        };
    };


    payMoney = id => {
        let money;
        this.setState({
            money: this.state.who_eats_pizza .map(x => {
                if (x.id === id) { money = x.money;
                    x.money = 0; }
                return x;
            }),
            paidMoney: this.state.paidMoney + money,
            balanceMoney: this.state.balanceMoney - money
        });
        if (Math.abs(this.state.balanceMoney - money < 0.1))
            this.setState({balanceMoney: 0});
    };
}



export default App;
