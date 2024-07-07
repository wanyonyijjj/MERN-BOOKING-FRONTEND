import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Room from '../components/Room'
import Loading from '../components/loading'
import moment from 'moment';
import { DatePicker, Space } from 'antd'
import Container from 'react-bootstrap/esm/Container'
const { RangePicker } = DatePicker;

const HomeScreen = () => {
const [rooms,setRooms]=useState([])
const [loading,setLoading]=useState(true)
const [fromDate,setfromDate]=useState()
const [toDate,settoDate]=useState()
const [duplicateRooms,setDuplicateRooms]=useState([])

const user=JSON.parse(localStorage.getItem('currentUser'))

const token=user.user.token
const token1='jjdeiee'
useEffect( ()=>{
    const fetchData=async()=>{
        try {
            const headers={'Authorization':`Bearer ${token1}`};
            const data=(await axios.get('http://localhost:5500/api/rooms',{headers})).data.rooms
            setRooms(data)
            setDuplicateRooms(data)
            setLoading(false)
            console.log(data)
        } catch (error) {
            console.log(error)
        setLoading(false)
        }
    }
fetchData()
},[])
const filterByDates=(dates)=>{
setfromDate(moment(dates[0].$d).format('DD-MM-YYYY'))
settoDate(moment(dates[1].$d).format('DD-MM-YYYY'))
for(const room of duplicateRooms){
    let availability=false
    let tempRooms=[]
    if(room.currentBooking.length>0){
        for(const booking of room.currentBooking){
            if(!moment(fromDate).isBetween(booking.fromDate,booking.toDate)
            &&!moment(toDate).isBetween(booking.fromDate,booking.toDate)
            ){
                if(

                    fromDate!==booking.fromDate&&
                    fromDate!==booking.toDate&&
                    toDate!==booking.fromDate&&
                    toDate!==booking.toDate

                ){
                    availability=true
                }
            }
        }

    }
    if(availability===true||room.currentBooking.length===0){
        tempRooms.push(room)
    }
setRooms(tempRooms)
console.log(tempRooms)
}


}
  return (<>
<Container className='mt-5 shadow p-3 mb-5 bg-white rounded'> 
<Space direction="vertical" size={12}>
<RangePicker onChange={filterByDates} />
    </Space>
</Container>


{loading?<Loading/>:<div>
<h2>{rooms.length} rooms found</h2>
{rooms.map((room)=>{
   return <Room room={room} key={room._id} fromDate={fromDate} toDate={toDate}/>

})}
</div>}



  </>
  )
}

export default HomeScreen
