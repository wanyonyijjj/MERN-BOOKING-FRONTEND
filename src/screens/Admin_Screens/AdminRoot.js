import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Activity from '../../components/Admin_Components/Activity'
import RecentSales from '../../components/Admin_Components/RecentSales'
import Buttons from '../../components/Admin_Components/Buttons'

const AdminRoot = () => {
  return (

    <Row>
<Col md={8}  className='col md-5 mt-5 mx-5 shadow p-3 mb-5 bg-white rounded'>
<Row>
<Col   className='col md-5 mt-5 mx-5 shadow p-3 mb-5 bg-white rounded'>
<Buttons/>
</Col>
</Row>
<Row>
<Col   className='col md-5 mt-5 mx-5 shadow p-3 mb-5 bg-white rounded'>
<RecentSales/>
</Col>
</Row>
</Col>
<Col md={3}  className='col md-5 mt-5  shadow p-3 mb-5 bg-white rounded'>
<Activity/>
</Col>
</Row>
  )
}

export default AdminRoot