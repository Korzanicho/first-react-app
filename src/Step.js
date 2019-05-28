import React from 'react';


const step = (props) => {
    let objInput = null;
    return (
      <div className="set-value-panel">
	  	<p>Podaj krok</p>
  		    <input type="number" placeholder="Krok" min="1" ref={input => objInput = input} onChange={() => {props.setStep(parseInt(objInput.value))}}/>
      </div>
    );
}

export default step;
