import React, { useEffect,useState } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/loading';
import moment from 'moment';
const BookingScreen = ({match}) => {
    const src='https://th.bing.com/th/id/R.68214b5c5074470119820c9595862576?rik=S3eMjnoz1afEEw&pid=ImgRaw&r=0'
    const {roomId,fromDate,toDate}=useParams()
    const [loading,setLoading]=useState(true)
    const[room,setRoom]=useState([])
    const user=JSON.parse(localStorage.getItem('currentUser'))

    const token=user.token
    useEffect( ()=>{
        const fetchData=async()=>{
            try {
              console.log(`${user},token:${token}`)
              const headers={'Authorization':`Bearer ${token}`};
              console.log(`headera:${headers.Authorization}`)
                const data=(await axios.get(`http://localhost:5500/api/rooms/${roomId}`,{headers})).data.room
                setRoom(data)
                setLoading(false)
                console.log(data)

            } catch (error) {
                console.log(error)
            setLoading(false)
            }
        }
    fetchData()
    },[])
    const mfromDate=moment(fromDate,'DD-MM-YYYY')
    const mtoDate=moment(toDate,'DD-MM-YYYY')
    const bookRoom=async()=>{
        const bookingDetails={
            room,
            fromDate,
            toDate,
            user:JSON.parse(localStorage.getItem('currentUser')).user,
            totalDays,
            totalAmount:room.rentPerDay*totalDays,
        }
        try {
            const result= await axios.post('http://localhost:5500/api/bookings',bookingDetails)
            console.log(result)
        } catch (error) {
            
        }
    }

   



  const totalDays=moment.duration(mtoDate.diff(mfromDate)).asDays()+1


  return (
<>
<Container className=' shadow-lg p-3 mt-5 mb-5 bg-white rounded '>
{loading&&<Loading/>}
<Row>
          <Col>
          <h1>{room.name}</h1>
            <img
              src={src}
              alt=""
              width={"400px"}
              height={"250px"}
            />
          </Col>
     <Col className='text-align-right' style={{textAlign:'right'}}>
    <b><p>Booking Details</p></b> 
     <hr/>
     <p>Name:{JSON.parse(localStorage.getItem('currentUser')).user.name}</p>
     <p>From Date:{fromDate}</p>
     <p>To Date:{toDate}</p>
     <p className='mb-5'>Max Count:{room.maxCount}</p>
   <b><p>Amount</p></b> 
   <hr/>
   <p>Total Days:{totalDays}</p>
   <p>Rent per Day:{room.rentPerDay}</p>
   <b><p>Total Amount:{room.rentPerDay*totalDays}/-</p></b>
   <Button variant="primary" className="mx-1" onClick={bookRoom}>Pay Now</Button>

     </Col>
          </Row>
</Container>



</>  )
}

export default BookingScreen