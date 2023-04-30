import React from 'react'

function LoginForm() {
  return (
    <div className='loginform'>
      <h3 className='border'>LOG IN</h3>
        <input type='text' placeholder='Username'></input><br></br>
        <input type='password' placeholder='Password'></input><br></br>
        <button type='submit'>Sign In</button>
    </div>

  )
}

export default LoginForm;






// Username and password input fields, an h3 that says Log In, with a border.
// Style the component using the default generated CSS file.
