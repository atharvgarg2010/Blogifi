import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [data, setData] = useState({ "name": "", "email": "", "password": "" })
  let Navigate = useNavigate()

  const Onchange = (e) => {

    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data);

  }
  const url = "http://localhost:5000"
  const login = async () => {
    const response = await fetch(`${url}/api/auth/createuser`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: data.name, email: data.email, password: data.password }) // body data type must match "Content-Type" header

    });
    const json = await response.json()
    if (json.success) {
      localStorage.setItem("authtoken", json.authtoken)
      Navigate("/Account")


    } else {
      setData({ email: "", password: "" })
    }
  }
  return (
    <div className='all'>
      <div className='form2 h' >
        <>
          <h1 className='heading'>Sign Up</h1>
          <label>Name</label>
          <div className="col-3">
            <input className="effect-1 inp" onChange={Onchange} name="name" type="text" placeholder="Name" />
            <span className="focus-border"></span>
          </div>
          <label>Email</label>
          <div className="col-3">
            <input className="effect-1 inp" type="text" onChange={Onchange} name="email" placeholder="Email" />
            <span className="focus-border"></span>
          </div>
          <label>Password</label>
          <div className="col-3">
            <input className="effect-1 inp" type="password" onChange={Onchange} name="password" placeholder="Password" />
            <span className="focus-border"></span>
          </div>
          <br />
          <button className="button-48" onClick={login}><span className="text">Submit</span></button>
        </>
      </div>
    </div>
  )
}

export default Signup
