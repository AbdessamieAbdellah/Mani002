import React from 'react'
import SignUp from '../../components/SignUp/SignUp'
import moroccoFlag from '../Home/moroccoFlag.jpg'

const SignupPage = () => {
    return (
        <div style={{ backgroundImage:`url(${moroccoFlag})`}}>
            <SignUp/>
        </div>
    )
}

export default SignupPage
