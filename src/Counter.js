import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Register from "./Register";
import Step from "./Step"


class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      counterValue: this.props.initValue,
      stepValue: 1,
    }
  }

  changeValue = () => {
    this.setState((prevValue) => {
      return({
        counterValue: prevValue.counterValue + parseInt(prevValue.stepValue),
      });
    });
  }

  clearValue = () =>{
    this.setState(() => {
      return({
        counterValue:  0,
      });
    });
  }

  resetValue = () =>{
    this.setState(() => {
      return({
        counterValue: parseInt(this.props.initValue),
      });
    });
  }

  setStepValue = (newStep) =>{
    if (newStep < 1) { newStep = 1 };
    this.setState({stepValue: newStep});
  }

  setValue = (newValue) =>{
    this.setState({counterValue: newValue});
  }

  render = () =>{
    return (
      <div className="counter">
	  	  Gotówka: {this.state.counterValue}$
        <ButtonPanel changeCounterValue={this.changeValue}
                     clearCounterValue={this.clearValue}
                     resetCounterValue={this.resetValue}
                     step={this.state.stepValue}
        />
        <Register setCounter={this.setValue} />
        <Step setStep={this.setStepValue} />
      </div>
    );
  }
}

export default Counter;
