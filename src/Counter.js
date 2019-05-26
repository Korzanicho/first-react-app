import React, {Component} from 'react';

class Counter extends Component{
  render(){
	  console.log(this);
    return (
      <div className="counter">
	  	Licznik: {this.props.initValue}
		
      </div>
    );
  }
}

export default Counter;
