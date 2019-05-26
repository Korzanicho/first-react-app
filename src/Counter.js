import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';
import Register from "./Register"


class Counter extends Component{
  constructor(props){
    super(props); //Pociągnij wszystkie właściwości z tej klasy
    this.state = {
      counterValue: this.props.initValue
    }//stan
  }

  changeValue = () =>{
    this.setState((prevValue) => { //setState metoda wbudowana w Reacta. prevValue = this.state
      return({
        counterValue:  prevValue.counterValue+1
      });
    });
  }
  clearValue = () =>{
    this.setState(() => { //setState metoda wbudowana w Reacta. prevValue = this.state
      return({
        counterValue:  0
      });
    });
  }
  resetValue = () =>{
    this.setState(() => { //setState metoda wbudowana w Reacta. prevValue = this.state
      return({
        counterValue: parseInt(this.props.initValue)
      });
    });
  }
  setValue = (newValue) =>{
    this.setState({counterValue: newValue});
  }

  render = () =>{
    return (
      <div className="counter">
	  	Gotówka: {this.state.counterValue}$
      <ButtonPanel changeCounterValue={this.changeValue} clearCounterValue={this.clearValue} resetCounterValue={this.resetValue}/>
      <Register setCounter={this.setValue}/>
      </div>
    );
  }
}

export default Counter;
