import React from "react";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";

function Sample(){

  const [state, setstate] = useState({
    email:'',
    password:''
  });

  function handleEmail(event){
    setstate({
      ...state,
      email:event.target.value
    })
  }
  function handlePassword(event){
   setstate({
     ...state,
     password:event.target.value
   })
  }


  function submit(event){
    event.preventDefault();
  }
    return(
        <div className="App">
          
          <Form onSubmit={submit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </div>
    );
}

export default Sample;