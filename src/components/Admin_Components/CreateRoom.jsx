import { Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'




const CreateRoom = () => {
    const [name,setName]=useState('')
    const [rating,setRating]=useState(Number)
    const [maxCount,setMaxCount]=useState(Number)
    const [rentPerDay,setRentPerDay]=useState()
    const [description,setDescription]=useState('')
    const [imageCover,setImageCover]=useState()
    const [ImageUrl,setImageUrl]=useState([])
    const [type,setType]=useState('')
    const [phoneNumber,setPhoneNumber]=useState(Number)
    const [services,setServices]=useState('')
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState()
    const user=JSON.parse(localStorage.getItem('currentUser'))

    const token=user.token
const HandleCreate=async(e)=>{
    e.preventDefault()
    if(!name||!maxCount||!rentPerDay||!description||!type||!phoneNumber||!imageCover||!ImageUrl){
         setError(true)
    }
   
    const room={
        name,imageCover,
        rating,ImageUrl,
        maxCount,type,
        rentPerDay,phoneNumber,
        description,services
    }

    try {
        console.log(`${user},token:${token}`)
        const headers={'Authorization':`Bearer ${token}`};
        console.log(`headera:${headers.Authorization}`)
        const result=(await axios.post('http://localhost:5500/api/rooms',room,{headers})).data
       console.log(result)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
   
}
      


  return (
    <Container className=' shadow-lg p-3 mb-5 bg-white rounded"'>
   <form>

<Row className='shadow p-3 mb-2 bg-white rounded'>
<Col className='mx-5' md={4}>
<input type='text' value={name} onChange={e=>setName(e.target.value)} className='form-control' placeholder='name'/>
</Col>
<Col className='mx-5'md={3} >
<input type='text' value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} className='form-control' placeholder='phone Number'/>
</Col>
   <Col className='mx-5' md={2}>
  <select className=' form-control' value={type} onChange={(e)=>setType(e.target.value)}>
            <option value={'delux'}>delux</option>
            <option value={'non-delux'}>non-delux</option>
        </select>
        </Col>

</Row>
<Row className='shadow p-3 mb-2 bg-white rounded'>
    <Col className='mx-5'>
    <input type='text' value={maxCount} onChange={e=>setMaxCount(e.target.value)} className='form-control' placeholder='MaxCount'/>
    </Col>
    <Col className='mx-5'>
    <input type='text' value={rentPerDay} onChange={e=>setRentPerDay(e.target.value)} className='form-control' placeholder='RentPerDay'/>
    </Col>
    <Col className='mx-5'>
    <input type='text' value={rating} onChange={e=>setRating(e.target.value)} className='form-control' placeholder='rating'/>
    </Col>
</Row>
<Row className='shadow p-3 mb-2 bg-white rounded'>
<Col md={8} className='mx-5'>
<input type='text' value={description} onChange={e=>setDescription(e.target.value)} className='form-control text-area' placeholder='Description'/>
</Col>
<Col className='mx-5'>
cover Image
    <input type='file'  className='form-control' placeholder='image Cover'  onChange={e=>setImageCover(e.target.files[0])}/>
    </Col>
</Row>

<Row className='shadow p-3 mb-2 bg-white rounded'>
<Col className='mx-3'>
images
    <input type='file'  className='form-control' placeholder='Image-1'  onChange={e=>setImageUrl(e.target.files[0])}/>
    </Col>
    <Col className='mx-3'>
    <input type='file'  className='form-control' placeholder='Image-2' onChange={e=>setImageUrl(e.target.files[1])}/>
    </Col>
    <Col className='mx-3'>
    <input type='file'  className='form-control' placeholder='Image-3' onChange={e=>setImageUrl(e.target.files[2])}/>
    </Col>
</Row>
<Row>
<Col md={8} className='mx-3'>
<input type='text'  value={services} onChange={e=>setServices(e.target.value)} className='form-control textarea' placeholder='services'/>
</Col>
<Col md={3} className='mx-3'>

    <Button color='primary' onClick={HandleCreate}>
        CREATE ROOM
    </Button>
    </Col>
</Row>
</form>

</Container>
  )
}

export default CreateRoom