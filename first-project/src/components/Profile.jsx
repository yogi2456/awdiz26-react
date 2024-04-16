import React, { useState } from 'react';
import './Profile.css';
import Model from "react-modal"

const Profile = () => {
  const [load, setLoad] = useState(false)
  return (
    <div className='container'>
      <button type="submit" className='btn' onClick={() => setLoad(true)}>Submit</button>
      <Model isOpen={load}
      <div className='popup'>
        <h1>Login</h1>
        <form>
            <input placeholder='email'/> <br/>
            <input placeholder='password'/> <br/>
            <input type='submit' value="Login" onClick={() => setLoad(false)}/>
        </form>
      </div>
      />
    </div>
  )
}

export default Profile
