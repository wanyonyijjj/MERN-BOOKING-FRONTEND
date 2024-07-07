import axios from 'axios'
import React, {  useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
// import Success from '../components/success'
import Error from '../components/error'
import Loading from '../components/loading'
const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[loading,setLoading]=useState()
    const [error,setError]=useState()
    const login=async()=>{
            const user={
            email,
            password
        }
        try {
            setLoading(true)
            const result=  (await axios.post('http://localhost:5500/api/users/login',user)).data
            console.log({result})
            setLoading(false)
            localStorage.setItem('currentUser',JSON.stringify(result))
            window.location.href='/'
        } catch (error) {
            setLoading(false)
            console.log(error)
            setError(true)
        }
       
    }
  return (
    <Container style={{maxWidth:'500px'}} className='shadow-lg p-3 mt-5 mb-5 bg-white rounded'>
                {loading&&<Loading/>}
    <Container className='row justify-content-center mt-5'>
        {error&&<Error message='invalid Login credentials' />}
         <div className='col md-5'>
                <h1>Login</h1>
                <input type='email' className='form-control p-2 my-2' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type='password' className='form-control p-2 my-2' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                <Button variant='primary' onClick={login}>Login</Button>
         </div>
    </Container>
    <p>dont have an account<Link to='/register'>register</Link></p>
</Container>
  )
}

export default LoginScreen