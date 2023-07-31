
import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gaming from '../../images/gaming.jpg';


export default function Login({saveUserData}) {
  let navigate =useNavigate()
  const [joiErors , setJoiErors ] = useState(null)
  const [ apimessage , setApimessage ] =useState("")
  const [spin , setSpin ] = useState(false)
const [user , setUser ] =useState({

  email :"",
  password :"",

});




function getUserData(e) {
  
 let newUser = {...user};
  newUser[e.target.id]=e.target.value;

  setUser(newUser);
  
}

function submitData(e) {
  setSpin(true)
  e.preventDefault();
  let validation = validateData()
  
  
 if (validation.error !== undefined) {
  
  setJoiErors(validation.error.details);
  setSpin(false)
  
 }else {

 
 
  sendToApi()
  
 
 }


 function validateData() {
 
  const schema = Joi.object({
    
    email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required() ,
    password :Joi.string().pattern(new RegExp('[a-zA-Z0-9]{3,30}$')).required(),
  });
  return schema.validate(user, {abortEarly : false});
  
 }
}

async function sendToApi() {
  let {data} = await axios.post(  'https://movies-api.routemisr.com/signin' , user);
 
   if (data.message === "success") {
    localStorage.setItem("tokenData"  ,  data.token)
    saveUserData()
   navigate('/')
   }else{
    setApimessage(data)
    setSpin(false)

    
   }

    
  
}


  return (<>
  
   <div >
   <div className='container py-3'>
    <div className='row g-0 '>
      <div className='col-md-6'>
        <img className=' w-100' src={gaming} alt="image" />
      </div>

      <div className='col-md-6  joinDiv' >
        <div className='text-center w-75  m-auto'>
          
          <h3 className='p-3 text-center'>Log In To Tht Game Over</h3>

          {apimessage.length === 0 ? "" : <div className='alert alert-danger'>{apimessage.message} </div>}
         
        <form  onSubmit={submitData} >
          <div className="row g-3">
             
              <div className="col-12">
                <input onChange={getUserData}type="email" className="form-control bg-dark border-0 text-white" placeholder="Email Address" id='email'/>
                { joiErors? <div className=' text-danger'> {joiErors.filter( (error) => error.context.label ==='email')[0]?.message} </div> :"" }

              </div>
            
              <div className="col-12">
                <input onChange={getUserData}type="password" className="form-control bg-dark border-0 text-white" placeholder="Password" id='password'/>
                { joiErors? <div className=' text-danger'> {joiErors.filter( (error) => error.context.label ==='password')[0]?.message  }  </div>:"" }

              </div>
              <div className="col-12">
             {spin=== false?  <button type="submit" className="btn   w-100 border border-3 text-white border-dark">Login</button>:  <div  className=" border border-3  w-100  bg-success border-dark p-1"><i className="fa-solid fa-spinner fa-spin fs-3"></i></div> }
              </div>
         </div>

          
        </form>
          

        </div>

      </div>
    </div>

    


   </div>
   </div>
  
  
  
  </>
   
  )
}
