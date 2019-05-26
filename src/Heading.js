import React from 'react';

const Heading = (props) =>{
    return (
      <header className="main-heading">
	  	<h1>{props.headingText}</h1>	
      </header>
    );
}

export default Heading;
