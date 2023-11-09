import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { userLoginAPi } from '../service/allApis';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function LoginPage() {

  // VALIDATE STATE
  const [emailVaild, SetEmailVaild] = useState(true)

  const [pswValid, setPswValid] = useState(true)

  // STATE TO HOLD INPUT DATA

  const [loginInputs, setLoginInputs] = useState({
    email: "",
    psw: ""
  })
  const setInputs = (e) => {
    const { value, name } = e.target
    if (name == 'email') {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        SetEmailVaild(true)
        setLoginInputs({ ...loginInputs, [name]: value })
        // console.log(value);
      }
      else {
        SetEmailVaild(false)
      }
    }

    if (name == "psw") {
      if (value.match(/[a-zA-Z0-9]+$/)) {
        setPswValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })
      }
      else {
        setPswValid(false)
      }
    }


  }
  const navigate = useNavigate()
  const hadleSubmit = async () => {

    const { email, psw } = loginInputs
    if (email == "" || psw == "") {
      alert("All Inputs are Required")
    }
    else {
      const result = await userLoginAPi(loginInputs)
      if (result.status >= 200 && result.status <= 300) {
        alert(result.data)
        toast.success("Login Sucess", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        navigate('/home')
      }
      else {
        // alert(result.response.data);
        toast.error("Invalid Login Details", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }

    }

  }
  return (
    <Container className="mt-5">
      <h1 className='text-center'>Welceme</h1>
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <div className="login-form">
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e) => setInputs(e)} name='email' type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setInputs(e)} name='psw' type="password" placeholder="Password" />
              </Form.Group>

              <Button onClick={hadleSubmit} variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
