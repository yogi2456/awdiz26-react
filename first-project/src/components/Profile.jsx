import React from 'react';
import './Profile.css';

const Profile = () => {

    let popup = document.getElementById("popup");

    function openPopup() {
        popup.classList.add("open-popup")
    }

    function closePopup() {
        popup.classList.remove("open-popup")
    }
  return (
    <div className='container'>
      <button type="submit" className='btn' onClick={openPopup()}>Submit</button>
      <div className='popup' id='popup'>
        <h1>Login</h1>
        <form>
            <input placeholder='email'/> <br/>
            <input placeholder='password'/> <br/>
            <input type='submit' value="Login" onClick={closePopup()}/>
        </form>
      </div>
    </div>
  )
}

export default Profile
