import axios from 'axios'
import React, {  useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import Success from '../components/success'
import Error from '../components/error'
import Loading from '../components/loading'

const RegisterScreen = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cPassword,setcPassword]=useState('')
    const [loading,setLoading]=useState()
    const[error,setError]=useState()
   const[success,setSuccess]=useState()
   const[lErr,setlErr]=useState()
    const register=async()=>{
        if(password===cPassword){ 
            const user={
            name,
            email,
            password,
            cPassword
        }
        setEmail('')
        setName('')
        setPassword('')
        setcPassword('')
        try {
            setLoading(true)
            const result= (await axios.post('http://localhost:5500/api/users/register',user)).data
            setLoading(false)
            console.log({result})
            setSuccess(true)
            setTimeout(() => {
                 window.location.href='/login'

            }, 5000);
        } catch (error) {
            setLoading(false)
            console.log(error)
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
            
        }
    }else{
        setlErr(true)
        setTimeout(() => {
            setlErr(false)
        }, 3000);
    }

       
    }

  return (
    <Container style={{maxWidth:'500px'}} className='shadow-lg p-3 mt-5 mb-5 bg-white rounded'>
        {loading&&<Loading/>}
        {success&&<Success message='User registration successful,wait to be redirected to the login page'/>}
        <Container className='row justify-content-center mt-5'>
        {error&&<Error message='something went wrong please try again' />}
        {lErr&&<Error message='passwords do not match'/>}
             <div className='col md-5'>
                
                    <h1>Register</h1>
                    <input type='text' className='form-control p-2 my-2' placeholder='username' value={name} onChange={e=>setName(e.target.value)}/>
                    <input type='email' className='form-control p-2 my-2' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input type='password' className='form-control p-2 my-2' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <input type='password' className='form-control p-2 my-2' placeholder='confirm password' value={cPassword} onChange={e=>setcPassword(e.target.value)}/>
                    <Button variant='primary' onClick={register}>Register</Button>
             </div>
        </Container>
        <p>already have an account<Link to='/login'>Login</Link></p>
    </Container>
  )
}

export default RegisterScreen