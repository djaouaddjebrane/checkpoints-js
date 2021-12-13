import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form , Button , Container, FormGroup, FormCheck } from 'react-bootstrap'
import './App.css'


function App() {



  return (
    <Container id="form-container" className='d-grid h-100'>
      <Form id="signup-form" className='text-center w-100'>
        <img 
        className="mb-4 gmc-logo"
        src='https://scontent.falg7-2.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/120809592_3333549163402899_7934612946657518322_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=9e2e56&efg=eyJpIjoidCJ9&_nc_eui2=AeGnuy_8xN06NW94HefCOIP_VWPK7s4M-ANVY8ruzgz4A95lXfrYsetEdvxJ_iIRi_7uR71Ks5i1kn6smxk8JmJ8&_nc_ohc=i00m6gIJxZsAX8PJFAH&_nc_ht=scontent.falg7-2.fna&oh=6de8473d460b503729d0a23000df2ae0&oe=61DBCC4B' alt= 'gomycode'></img>
          <h1 className='mb-3 fs-3 fw-normal'>
          Veuillez vous connecter
          </h1>
        <Form.Group>
            <Form.Control className="name-input postion-relative" type="text" placeholder="email" name="email"></Form.Control> 
            <Form.Control className="email-input postion-relative" type="password" placeholder="password" name="password" ></Form.Control><br></br>
            <FormGroup controlId='remember-me' className='mb-3 d-flex justify-content-center'>
              <FormCheck label ='remember me' ></FormCheck>
            </FormGroup >
            <Button className="submit-button w-100" value="submit" type="submit">submit</Button>
        </Form.Group>
        
    </Form>
    </Container>
  );
}

export default App;
