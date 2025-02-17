import React, { useState, useEffect } from "react";
import { urls } from "../../apiConstant/apiConstant";
import Room from "../../components/Room/Room";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import "./HomeScreen.scss";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
const { RangePicker } = DatePicker;
import moment from "moment";
const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [duplicaterooms, setDuplicateRooms] = useState([]);
  let getRooms = async () => {
    setLoading(true);
    let response = await fetch(urls.getallrooms);
    try {
      setLoading(false);
      let data = await response.json();
      setRooms(data);
      setDuplicateRooms(data);
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
    setFromDate(dates[0]?.format("DD-MM-YYYY"));
    setToDate(dates[1]?.format("DD-MM-YYYY"));

    let temprooms = [];
    for (const room of duplicaterooms) {
      let availability = false;
      if (room?.currentbookings?.length > 0) {
        for (const booking of room?.currentbookings) {
         
          if (
            !moment(moment(dates[0])?.format("DD-MM-YYYY")).isBetween(
              booking?.fromdate,
              booking?.todate
            ) &&
            !moment(moment(dates[1])?.format("DD-MM-YYYY")).isBetween(
              booking?.fromdate,
              booking?.todate
            )
          ) {
            if (
              dates[0]?.format("DD-MM-YYYY") !== booking?.fromdate &&
              dates[0]?.format("DD-MM-YYYY") !== booking?.todate &&
              dates[1]?.format("DD-MM-YYYY") !== booking?.fromdate &&
              dates[1]?.format("DD-MM-YYYY") !== booking?.todate
            ) {
              availability = true;
            }
          }
        }
        } else {
          availability = true;
        }
      if (availability == true) {
        temprooms.push(room);
      }
    }
      setRooms(temprooms);
  };

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
