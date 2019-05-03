import React from "react";


export class PayButton extends React.Component {
    state = {
        className: this.props.className,
        buttonName: this.props.buttonName
    };
    render() {
        return (
            <button
                className={this.state.className}
                disabled={this.state.disabled}
                onClick={() => {
                    this.props.payMoney(this.props.id);
                    this.setState({
                        className: "paid-btn",
                        buttonName: "Paid",
                        disabled: "disabled"
                    });
                }}
            >
                {this.state.buttonName}
            </button>
        );
    }
}
