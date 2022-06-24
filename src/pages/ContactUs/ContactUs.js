import React from 'react'
import moroccoFlag from '../../pages/Home/moroccoFlag.jpg'
import SignIn from '../../components/SignIn/SignIn'

const ContactUs = () => {
    return (
        <div  style={{ backgroundImage:`url(${moroccoFlag})`}} >
            <SignIn/>
        </div>
    )
}

export default ContactUs
