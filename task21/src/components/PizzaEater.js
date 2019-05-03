import React from "react";
import { PayButton } from "./PayButton";

export class PizzaEater extends React.Component {
  render() {
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <td className={this.props.isVegan?"vegan":""}>{this.props.name} </td>
            <td>{Math.floor(10 * this.props.money) / 10}</td>
            <td>
                <PayButton
                    payMoney={this.props.payMoney}
                    id={this.props.id}
                    className={"pay-btn"}
                    buttonName={"Pay"}
                />
            </td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}
