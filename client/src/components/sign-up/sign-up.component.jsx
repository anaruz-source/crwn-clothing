import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signUpStart} from './../../redux/user/user.actions'

import './sign-up.styles.scss'


const  SignUp = ({ signUpStart }) => {

    const [credentials, setCredentials] = useState({

        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    


    const { displayName, email, password, confirmPassword } = credentials


    const handleSubmit = async e  => {

        e.preventDefault()

         if(password !== confirmPassword) {

            alert('passwords don\'t match');
            return
         }

        signUpStart({ email, password, displayName})
     }

    const handleChange = e => {

        const {name, value} = e.target

       setCredentials({...credentials, [name] : value})
     }

        return (
            <div className='sign-up'>

                <h2 className='title'> I do not have account</h2>
                <span>Sign up using email and password</span>

                <form className='sign-up-form' onSubmit = {handleSubmit}>
                     <FormInput 
                        type='text'
                        name='displayName'
                        label ='Display Name'
                        value = {displayName}
                        onChange = {handleChange}
                        required
                     />
                    

                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        value={email}
                        onChange={handleChange}
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        label='Password'
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        )
     }


const mapDispatchToProps = dispatch =>({

    signUpStart: credentials => dispatch(signUpStart(credentials))
})
export default connect(null, mapDispatchToProps)(SignUp)