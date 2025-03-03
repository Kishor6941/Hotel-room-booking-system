import axios from "axios";
import React, { useEffect, useState } from "react";
import { urls } from "../../apiConstant/apiConstant";

const Rooms = () => {
  let [rooms, setRooms] = useState([]);

  let getAllRoomFun = async () => {
    try {
      let response = await axios.get(urls.getallrooms);
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRoomFun();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 p-3 pt-2">
        <h1>Rooms</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Room Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Rent Per Day</th>
              <th>Max Count</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {rooms?.length
              ? rooms.map((room) => (
                  <tr key={room._id}>
                    <td>{room?._id}</td>
                    <td>{room?.name}</td>
                    <td>{room?.type}</td>
                    <td>{room?.rentperday}</td>
                    <td>{room?.maxcount}</td>
                    <td>{room?.phonenumber}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rooms;
