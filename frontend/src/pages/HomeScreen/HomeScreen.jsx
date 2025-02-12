import React, { useState, useEffect } from "react";
import { urls } from "../../apiConstant/apiConstant";
import Room from "../../components/Room/Room";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import "./HomeScreen.scss";
import { DatePicker } from 'antd';
import 'antd/dist/reset.css'
  const { RangePicker } = DatePicker;

const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  let getRooms = async () => {
    setLoading(true);
    let response = await fetch(urls.getallrooms);
    try {
      setLoading(false);
      let data = await response.json();
      setRooms(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  if (error) {
    return <Error />;
  }

let filterByDate = (dates) => {
  setFromDate(dates[0]?.format('DD-MM-YYYY'))
  setToDate(dates[1]?.format('DD-MM-YYYY'))
}

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3">        
        <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
      </div>
      <div className="row justify-content-center mt-5 mb-5">
        {loading ? (
          <div className="d-flex justify-content-center">
            {" "}
            <Loader />{" "}
          </div>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div key={room?._id} className="col-md-9 mt-2 home-screen">
                <Room room={room} fromDate={fromDate} toDate={toDate} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
