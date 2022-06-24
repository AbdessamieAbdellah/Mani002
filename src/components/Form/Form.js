import React from 'react'
import '../../components/Form/Form.css'
import MainButton from '../MainButton/MainButton'
import '../MainButton/MainButton.css'

const Form = () => {
    return (
        
            <form className='main-form' >
                   <div className='form-control'>
                        <label>First Name:</label>
                        <input type='text' placeholder='Enter your first name'></input>
                    </div> 

                    <div className='form-control'>
                        <label >Last Name:</label>
                        <input type='text' placeholder='Enter your last name '/>
                    </div> 

                    <div className='form-control'>
                        <label>Age:</label>
                        <input type='text' placeholder='Enter your age '/>
                    </div>

                    <div className='form-control'>
                    <label><label>Status</label></label>
                          <select>
                            <option>Single</option>
                            <option>Married</option>
                            <option>complicated</option>
                         </select>
                    </div>
                    <MainButton cNameButton='button button1' titleButton='Submit your form' />
           </form>
    
    )
}

export default Form
