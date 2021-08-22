import React , {useState} from 'react';
import './sample.css';


function Sample() {

    function GreenComponent(props){
        return(
            <div>
                <h1>Hello World {props.name}</h1>
            {props.children}
            </div>
        );
    }


  return (
      <GreenComponent name="Nadun" children="abcd"/>
  );


}

export default Sample;
