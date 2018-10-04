import React from "react";
import InvestOption from "./InvestOption";
import PayDebtContainer from "./PayDebtContainer/PayDebtContainer";

class InvestOptionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      button: "",
      interestSaved: 6,
      debtFree: 7,
      totalSaved: 10,
      purchase: 18
    };

    this.setDebt = this.setDebt.bind(this);
    this.setInvest = this.setInvest.bind(this);
    this.viewSwitch = this.viewSwitch.bind(this);
  }

  setDebt() {
    console.log("debt");
    this.setState({ button: "debt" });
  }

  setInvest() {
    console.log("Invest");
    this.setState({ button: "invest" });
  }

  viewSwitch() {
    const {
      button,
      purchase,
      totalSaved,
      debtFree,
      interestSaved
    } = this.state;
    if (button === "") {
      return;
    } else if (button === "debt") {
      return (
        <div>
          <PayDebtContainer />
        </div>
      );
    } else if (button === "invest") {
      return <h1>invest your money</h1>;
    }
    return;
  }

  render() {
    const { setDebt, setInvest, viewSwitch } = this;
    return (
      <InvestOption
        setDebt={setDebt}
        setInvest={setInvest}
        viewSwitch={viewSwitch}
      />
    );
  }
}

export default InvestOptionContainer;
