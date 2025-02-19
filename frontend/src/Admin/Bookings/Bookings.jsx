import React, { useEffect, useState } from "react";
import axios from "axios";
import { urls } from "../../apiConstant/apiConstant";

const Bookings = () => {
  let [bookings, setBookings] = useState([]);

  let bookingsFun = async () => {
    try {
      let response = await axios.get(urls.getallbookings);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bookingsFun();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 p-3 pt-2">
        <h1>Bookings</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Booking Id</th>
              <th>User Id</th>
              <th>Room</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.length
              ? bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking?._id}</td>
                    <td>{booking?.userid}</td>
                    <td>{booking?.room}</td>
                    <td>{booking?.fromdate}</td>
                    <td>{booking?.todate}</td>
                    <td
                      className={
                        booking.status === "booked"
                          ? "text-success"
                          : "text-warning"
                      }
                    >
                      {booking?.status == "booked" ? "BOOKED" : "CANCALLED"}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
