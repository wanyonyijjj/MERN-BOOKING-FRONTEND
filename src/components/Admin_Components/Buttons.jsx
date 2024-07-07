import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const Buttons = () => {
  return (

    <Row>
        <Col md={3}  style={{textAlign:'center',fontSize:'20px'}} className='col md-5 text-white  mx-3 shadow p-3 mb-5 bg-success rounded'>
          <AttachMoneyIcon/>  sales
         </Col>
         <Col md={3}  style={{textAlign:'center',fontSize:'20px'}} className='col md-5 text-white mx-3 shadow p-3 mb-5 bg-primary rounded'>
          <CurrencyExchangeIcon />  revenue
         </Col>
         <Col md={3}  style={{textAlign:'center',fontSize:'20px'}} className='col md-5 text-white  mx-3 shadow p-3 mb-5 bg-warning rounded'>
          <SupervisedUserCircleIcon/>  Customers
         </Col>

    </Row>
  )
}

export default Buttons