import { useState } from 'react'
import './App.css'

function App() {

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get('email'), formData.get('password'))

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.fieldErrors) {
          data.fieldErrors.forEach(fieldError => {
            if (fieldError.field === 'email') {
              setEmailError(fieldError.message);
            }

            if (fieldError.field === 'password') {
              setPasswordError(fieldError.message);
            }
          });
        } else {
          alert("Success !!");
        }
      })
      .catch((err) => err);
  }

  return (
    <>
      <form id="stripe-login" method="POST" onSubmit={onSubmit}>
        <label for='email'>Email: </label>
        <input type="text" name="email" id="email" />
        {
          emailError ? <span style={{ color: 'red', fontSize: '12px' }}>{emailError}</span> : ''
        }

        <lable for="password">Password:</lable>
        <input type="password" name="password" id="password" />
        {
          passwordError ? <span style={{ color: 'red', fontSize: '12px' }}>{passwordError}</span> : ''
        }

        <button type="submit">Submit</button>
      </form>
    </>
  )

}

export default App
