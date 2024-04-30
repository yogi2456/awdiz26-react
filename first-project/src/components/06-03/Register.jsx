import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const router = useNavigate();

    const [userData, setUserData] = useState({name : "", email : "", password : "", confirmpassword : ""})
      // userData.name
    // userData[name]
    //console.log(userData, "userData")

    const handleChange = (event) => {
        //console.log(event.name.value, event.target.name)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

   async function handleSubmit(event) {
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmpassword) {
              // await calling backend one server to another server request, backend validation, data to store mongodb
              try {
                const response = await axios.post('http://localhost:3003/api/v1/auth/register', { userData });
                // const response = {data: {success: true, message: "Registration Successfull"}}
                if(response.data.success) {
                  toast.success(response.data.message, { position: "top-right"})
                  setUserData({name : "", email : "", password : "", confirmpassword : ""})
                  router('/login')
                }
              } catch (error) {
                toast.error(error)
              }
        } else {
            alert("All fields are required")
        }
    }

  return (
    <div>
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name : </label> <br/>
        <input type='text' name='name' onChange={handleChange} required/> <br/>
        <label>Email : </label> <br/>
        <input type='email' name='email' onChange={handleChange} required/> <br/>
        <label>Password : </label> <br/>
        <input type='password' name='password' onChange={handleChange} required/> <br/>
        <label>ConfirmPassword : </label> <br/>
        <input type='password' name='confirmpassword' onChange={handleChange} required/> <br/>
        <input  type='submit' value= "Register"/>
      </form>
      </div>
    </div>
  )
}

export default Register
