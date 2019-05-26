import React from 'react';


const ButtonPanel = (props) =>{
    return (
      <div className="button-panel">
		<button onClick={props.changeCounterValue}>Zarabiaj</button>
		<button onClick={props.clearCounterValue}>Zeruj</button>
		<button onClick={props.resetCounterValue}>Wartość początkowa</button>
	  </div>
    );
}

export default ButtonPanel;