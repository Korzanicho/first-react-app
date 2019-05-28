import React from 'react';


const register = (props) => {
    let objInput = null;
    return (
      <div className="set-value-panel">
	  	<h2>Podaj wartość</h2>
  		    <input type="number" placeholder="Wprowadź numer" ref={input => objInput = input}/>
          <button onClick={() => {props.setCounter(parseInt(objInput.value))}}>Ustaw</button>
      </div>
    );
}

export default register;
