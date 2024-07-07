import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
const Room = ({ room,fromDate,toDate,token }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user=JSON.parse(localStorage.getItem('currentUser'))

  return (
    <>
      <Container className=' shadow-lg p-3 mb-5 bg-white rounded"'>
        <Row>
          <Col>
            {" "}
            <img
              src={`http://localhost:5500/img/rooms/${room.imageCover}`}
              alt=""
              width={"180px"}
              height={"150px"}
            />
          </Col>
          <Col xs={6}>
          <b>
          <h2>{room.name}</h2>
            <p>Max people:{room.maxCount}</p>
            <p>Room Type:{room.type}</p>
            <p>Phone Number:0{room.phoneNumber} </p>
            {/* <p>Free cancellation </p> */}
          </b>
            
          </Col>
          <Col>
          {(fromDate &&toDate&&user)&&<NavLink to={`/book/${room._id}/${fromDate}/${toDate}`}>
          <Button variant="primary" className="mx-1">Book Now</Button>
          </NavLink>}
          
          {!user&& <Button variant="primary" href="/login" className="mx-1">Book Now</Button>}
            <Button variant="primary" onClick={handleShow}>
              {" "}
              view details
            </Button>
          </Col>
        </Row>
        

        
      
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.ImageUrl.map((url) => {
              return (
                <Carousel.Item key={url}> 
                  <img
                    src={url}
                    alt={room.name}
                    width={"450px"}
                    height={"300px"}
                    className="img"
                  />{" "}
                  <Carousel.Caption>{room.name}</Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <hr/>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"className="p-2" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

     
    </>
  );
};

export default Room;
