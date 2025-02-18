import { useState } from "react";
import "./Room.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Room = ({ room, fromDate,toDate }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigateToBook = () => {
    if(!JSON.parse(localStorage.getItem("userDetails"))) {
      toast.error("Please login to book a room");
      navigate("/login");
    } else {
      navigate(`/room-book/${room._id}?fromDate=${fromDate}&toDate=${toDate}`);
    }
  };

  return (
    <div className="row room-list bs">
      <div className="col-md-4">
        <img src={room.imagesUrls[0]} alt="" className="smallimg" />
      </div>
      <div className="col-md-7 text-left">
        <h1>{room.name}</h1>
        <p>
          {" "}
          <strong>Max Count</strong> : {room.maxcount}
        </p>
        <p>
          {" "}
          <strong>Phone Number</strong> : {room.phonenumber}
        </p>
        <p>
          {" "}
          <strong>Type</strong> : {room.type}
        </p>

        <div className="float-right">
          <div className="d-flex" style={{ gap: "10px" }}>
            <div>
             {(fromDate && toDate) && 
              <button className="btn btn-dark" onClick={navigateToBook}>
              Book Now
            </button>}
            </div>
            <div>
              <button onClick={handleShow} className="btn btn-dark">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imagesUrls.map((url, index) => {
              return (
                <Carousel.Item key={index}>
                  <img className="d-block w-100 bigimg" src={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
