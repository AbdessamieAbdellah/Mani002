import React from 'react';
import Video from '../../components/Video/Video';
import moroccoFlag from '../Home/moroccoFlag.jpg';
import MainButton from '../../components/MainButton/MainButton'
import '../Home/Home.css'
import '../../components/MainButton/MainButton.css'
import { Link } from 'react-router-dom';



const Home = () => {


    
    return (
        <div className='homeDiv' style={{backgroundImage:`url(${moroccoFlag})`}}>
            <h1 className='text-center' >Welcome To Moroccan Association of New Immigrant </h1>
            <h5 className='text-h5'>We help new immigrants to settle down in France!</h5>
            <center> <Video videoId ='-uF6aLZJM-8'/></center>
         <div className='flex-parent jc-center'>
         <Link to='/about'> <MainButton cNameButton='button button1' titleButton='Get Your Quote'/></Link>  
        <Link to='/contact-us'>  <MainButton cNameButton='button button2' titleButton='Sign In'/></Link>
           </div>
           
          
        </div>
    )
}

export default Home
