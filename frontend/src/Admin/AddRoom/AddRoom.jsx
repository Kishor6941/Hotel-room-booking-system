import axios from "axios";
import React, { useState } from "react";
import { urls } from "../../apiConstant/apiConstant";
import { toast } from "react-toastify";

const AddRoom = () => {
  const [room, setRoom] = useState({
    name: "",
    rentperday: "",
    maxcount: "",
    description: "",
    phonenumber: "",
    type: "",
    imageurl1: "",
    imageurl2: "",
    imageurl3: "",
  });


 const resetForm = () => {
    setRoom({
        name: "",
        rentperday: "",
        maxcount: "",
        description: "",
        phonenumber: "",
        type: "",
        imageurl1: "",
        imageurl2: "",
        imageurl3: "",
      });
  }

  let addRoom = async () => {
    console.log(room);
    let newRoom ={
        name : room.name,
        rentperday : room.rentperday,
        maxcount : room.maxcount,
        description : room.description,
        phonenumber : room.phonenumber,
        type : room.type, 
        imagesUrls: [room.imageurl1, room.imageurl2, room.imageurl3],
    }

    try {
      let response = await axios.post(urls.addroom, newRoom);
      toast.success(response.data.message);
    } catch (error) {
        console.log(error)   
        toast.error("Something went wrong");
    }

    resetForm();
  };
  return (
    <div style={{ marginLeft: "40px" }}>
      <h1>Add Room</h1>
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            value={room?.name}
            className="form-control"
            placeholder="room name"
            name="name"
            onChange={(e) => {
              setRoom({ ...room, name: e.target.value });
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="rent per day"
            name="rentperday"
            value={room?.rentperday}
            onChange={(e) => {
                setRoom({ ...room, rentperday: e.target.value });
              }}
          />
          <input
            type="text"
            value={room?.maxcount}
            className="form-control"
            placeholder="max count"
            name="maxcount"
            onChange={(e) => {
                setRoom({ ...room, maxcount: e.target.value });
              }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="description"
            name="description"
            value={room?.description}
            onChange={(e) => {
                setRoom({ ...room, description: e.target.value });
              }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="phone number"
            name="phonenumber"
            value={room?.phonenumber}
            onChange={(e) => {
                setRoom({ ...room, phonenumber: e.target.value });
              }}
          />
        </div>

        <div className="col-md-5">
          <input
            type="text"
            value={room?.type}
            className="form-control"
            placeholder="type"
            name="type"
            onChange={(e) => {
                setRoom({ ...room, type: e.target.value });
              }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Image URL 1"
            name="imageurl1"
            value={room?.imageurl1}
            onChange={(e) => {
                setRoom({ ...room, imageurl1: e.target.value });
              }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Image URL 2"
            name="imageurl2"
            value={room?.imageurl2}
            onChange={(e) => {
                setRoom({ ...room, imageurl2: e.target.value });
              }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Image URL 3"
            name="imageurl3"
            value={room?.imageurl3}
            onChange={(e) => {
                setRoom({ ...room, imageurl3: e.target.value });
              }}
          />

          <div className="d-flex justify-content-end">
            <button className="btn btn-dark mt-2" onClick={addRoom}>
              Add Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
