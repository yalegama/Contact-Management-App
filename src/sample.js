import React , {useState} from 'react';
import './sample.css';


function Sample() {

    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')

  return (
      <div>
          <h2>Input your name and password</h2>
          <input onChange={changeName} value={Name} placeholder="Name" type="text"/>
          <input onChange={changePassword} value={Password} placeholder="Password" type="password"/>
          <br/>
          <button onClick={Click}>Submit</button>
      </div>
    
  );

  function changeName(event){
    setName(event.target.value);
  }
  function changePassword(event){
      setPassword(event.target.value);
  }
  function Click(){
      console.log(Name,Password);
  }

}

export default Sample;
