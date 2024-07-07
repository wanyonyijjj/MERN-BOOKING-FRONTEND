import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from "react-bootstrap/Container";
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const ProfileScreen = () => {
    const[Bookings,setBookings]=useState([])
    const user=JSON.parse(localStorage.getItem('currentUser'))

    useEffect(()=>{
        if(!user){
            window.location.href='/login'
        }
    },[])

    useEffect(()=>{
    const fetchData=async()=>{

        try {
            const bookings=await (await axios.get(`http://localhost:5500/api/users/${user.user._id}/bookings`)).data.bookings
            setBookings(bookings)
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
    },[])
  return (
<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="profile" title="profile" style={{textAlign:'center'}}>
         <h1 >My Profile</h1>
        <Container className='mt-5 shadow p-3 mb-5 bg-secondary rounded'>
            <h2>name:{user.user.name}</h2>
            <h3>email:{user.user.email}</h3>
            <h2>role:{user.user.role}</h2>
        </Container>
      </Tab>
      <Tab eventKey="bookings" title="bookings" >
        {Bookings.length>0?<h1 >My Bookings</h1>:
        <h1>You have no bookings yet,please book a room</h1>
}

      <Row>
      {Bookings.map((Booking)=>{
       return(
        <Col md={3}  className='col md-5 mt-5 mx-5 shadow p-3 mb-5 bg-white rounded'>
         <p>Room: {Booking._id}</p>
         <p>from Date: {Booking.fromDate}</p>
         <p>to Date: {Booking.toDate}</p>
         <p>Duration: {Booking.totalDays} Days</p>
         <p>Amount: {Booking.totalAmount}/-</p>
         <p>Transaction Id: {Booking.transactionId}</p>
         <p>Status: {Booking.status}</p>
        </Col>
    
        )
      })}
      </Row>

      </Tab>
    </Tabs>  
    )
}

export default ProfileScreen