import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';


import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
const A_RoomsScreen = () => {
  return (
    <Container className=' shadow-lg p-3 mb-5 bg-white rounded"'>

    <Container className=' shadow-lg p-3 mb-5 bg-white rounded"'>

<Row>
        <Col md={3}  style={{textAlign:'center',fontSize:'20px'}} className='col md-5 text-white  mx-3 shadow p-3 mb-5 bg-success rounded'>
          <Link to={'/admin/rooms/create'}>
          <AddBusinessIcon/> 
          Create Room</Link>
         </Col>
         <Col md={3}  style={{textAlign:'center',fontSize:'20px'}} className='col md-5 text-white mx-3 shadow p-3 mb-5 bg-primary rounded'>
          <CurrencyExchangeIcon />  revenue
         </Col>
         <Col md={3}  style={{textAlign:'center',fontSize:'20px'}} className='col md-5 text-white  mx-3 shadow p-3 mb-5 bg-warning rounded'>
          <SupervisedUserCircleIcon/>  Customers
         </Col>

    </Row>
</Container>


</Container>
)
}

export default A_RoomsScreen