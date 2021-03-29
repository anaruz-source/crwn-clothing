import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


import { googleSignInStart, emailSignInStart } from './../../redux/user/user.actions'

import './sign-in.styles.scss'


const SignIn = ({ emailSignInStart, googleSignInStart}) => {


      const [credentials, setCredentials] = useState({

        email: '',
        password: ''
      })

      const { email, password } = credentials

    const handleSubmit = e => {

        e.preventDefault()


        emailSignInStart(email, password )
    }

   const handleChange = e => {
       const {name, value} = e.target

      setCredentials({...credentials, [name]: value})
    
    }


      return (  <div className='sign-in'>

             <h2>I already have an account</h2>
             <span>Sign in with your email and password</span>

          <form onSubmit= { handleSubmit }>

                 <FormInput type='email' name='email' id='email' value={email} handleChange = {handleChange} label='email' required/>
                

                <FormInput type='password' name='password' id='password' value={password} handleChange={handleChange}  label='password' required />
                
                <div className='buttons'>


                  <CustomButton type='submit' >Sign In</CustomButton>
                  <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>

             </form>
        </div>
      )
}

const mapDispatchToProps = dispatch =>({

    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)