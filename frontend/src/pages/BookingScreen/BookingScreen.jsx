import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { urls } from "../../apiConstant/apiConstant";
import "./BookingScreen.scss";
import Loader from "../../components/Loader/Loader";
import moment from "moment";

const BookingScreen = () => {
  let { id } = useParams();
  let [searchParams] = useSearchParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  let fromDate = searchParams.get("fromDate");
  let toDate = searchParams.get("toDate");
  fromDate = moment(fromDate,"DD-MM-YYYY");
  toDate = moment(toDate,"DD-MM-YYYY");
  let totalDays = toDate.diff(fromDate, "days") + 1;
  let totalAmount = Number(totalDays) * Number(room?.rentperday);
  let getRoomById = async () => {
    setLoading(true);
    try {
      let response = await fetch(`${urls.getroombyid}/${id}`);
      let data = await response.json();
      setRoom(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRoomById();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <Loader />{" "}
        </div>
      ) : (
        <div className="m-5">
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{room?.name}</h1>
              {room?.imagesUrls?.length && (
                <img src={room.imagesUrls[0]} alt="test" className="bigimg" />
              )}
            </div>

            <div className="col-md-6 text-end">
              <div>
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>Name :</p>
                  <p>From Date : {searchParams.get("fromDate")}</p>
                  <p>To Date : {searchParams.get("toDate")}</p>
                  <p>Max Count : {room?.maxcount}</p>
                </b>
              </div>

              <div>
                <h1>Amount</h1>
                <hr />
                <b>
                  <p>Total days : {totalDays} </p>
                  <p>Rent per day : {room?.rentperday}</p>
                  <p>Total Amount : {totalAmount}</p>
                </b>
              </div>

              <div className="float-right">
                <button className="btn btn-dark">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingScreen;
