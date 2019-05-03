import React from "react";

export class Pizza extends React.Component {
  render() {
    var skewY = 0, degree = 0,items = [],
        countEaters = this.props.countEaters;

    for (let i = 0; i < countEaters; i++) {
        items.push(
          <div className="item" key={i} style={{ transform: `rotate(${degree}deg) skew(${90 - 360 / countEaters}deg,${skewY}deg)` }} />
      );
      degree += 360 / countEaters;
  }

    return (
      <React.Fragment>
        <div className="pizza">
            {items}
        </div>
      </React.Fragment>
    );
  }
}
