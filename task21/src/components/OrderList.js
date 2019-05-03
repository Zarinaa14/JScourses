import React from "react";
import { PizzaEater } from "./PizzaEater";

export class OrderList extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Share to pay</th>
            <th>Pay</th>
          </tr>
        </thead>
        {this.props.who_eats_pizza.map(eater => {
          return (
            <PizzaEater
                payMoney={this.props.payMoney}
              name={eater.name}
              money={eater.money}
              isVegan={eater.isVegan}
              id={eater.id}
              key={eater.id}
            />
          );
        })}
        <tbody>
          <tr>
            <td>Total order</td>
            <td>{this.props.money.totalOrder} BYN</td>
            <td>Pizza + Cola</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Money to collect</td>
            <td>{this.props.money.balanceMoney} BYN</td>
            <td>For pizza only</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Money collected</td>
            <td>{this.props.money.paidMoney} BYN</td>
            <td>{!this.props.money.balanceMoney && "Done!"}</td>
          </tr>
        </tbody>
      </table>
    );
  }


}
