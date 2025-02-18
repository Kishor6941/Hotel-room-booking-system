import axios from "axios";
import React, { useEffect, useState } from "react";
import { urls } from "../../apiConstant/apiConstant";
import { toast } from "react-toastify";

const MyBookings = () => {
  const [Bookings, setBookings] = useState([]);
  let getBookingsByUserId = async () => {
    try {
      const rooms = await axios.post(urls.getbookingsbyuserid, {
        userid: JSON.parse(localStorage.getItem("userDetails"))?.userDetails
          ?.id,
      });
      setBookings(rooms.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBookingsByUserId();
  }, []);

  let cancelBooking = async (bookingid, roomid) => {
    try {
      const result = await axios.post(urls.cancelbooking, {
        bookingid,
        roomid,
      });
      if (result.status === 200) {
        toast.success(result.data.message);
        getBookingsByUserId();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12 p-3 pt-2">
          <h1>My Bookings</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Room</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking?._id}</td>
                  <td>{booking?.room}</td>
                  <td>{booking?.fromdate}</td>
                  <td>{booking?.todate}</td>
                  <td>{booking?.totalamount}</td>
                  <td
                    className={
                      booking.status === "booked"
                        ? "text-success"
                        : "text-warning"
                    }
                  >
                    {booking?.status == "booked" ? "CONFIRMED" : "CANCALLED"}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        cancelBooking(booking?._id, booking?.roomid)
                      }
                      disabled={booking?.status === "cancelled"}
                    >
                      Cancel booking
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
