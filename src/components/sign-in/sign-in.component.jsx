import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = e => {

        e.preventDefault()

        this.setState({email: '', password: ''})
    }

   handleChange = e => {
       const {name, value} = e.target

       this.setState({[name]: value})
    
    }
    render() {

      return (  <div className='sign-in'>

             <h2>I already have an account</h2>
             <span>Sign in with your email and password</span>

             <form onClick= {this.handleSubmit}>

                 <FormInput type='email' name='email' id='email' value={this.state.email} handleChange = {this.handleChange} label='email' required/>
                

                <FormInput type='password' name='password' id='password' value={this.state.password} handleChange={this.handleChange}  label='password' required />
                
                <div className='buttons'>


                  <CustomButton type='submit' >Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>

             </form>
        </div>
      )}
}

export default SignIn