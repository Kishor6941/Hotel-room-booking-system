import React, { useEffect } from "react";
import Bookings from "../Bookings/Bookings";
import Rooms from "../Rooms/Rooms";
import AddRoom from "../AddRoom/AddRoom";
import Users from "../Users/Users";

const AdminNavbar = () => {

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userDetails"))?.userDetails?.isAdmin;
        if (!user) {
            window.location.href = "/home";
        }
    },[])
  return (
    <div className="ml-3 mt-3">
        <div className="mb-3">
            <h2 style={{fontSize:"30px"}}>Admin Panel</h2>
        </div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Boookings
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Rooms
          </button>

          <button
            className="nav-link"
            id="nav-addroom-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-addroom"
            type="button"
            role="tab"
            aria-controls="nav-addroom"
            aria-selected="false"
          >
            Add Room
          </button>

          <button
            className="nav-link"
            id="nav-users-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-users"
            type="button"
            role="tab"
            aria-controls="nav-users"
            aria-selected="false"
          >
            Users
          </button>
        </div>
      </nav>
      <div className="tab-content mt-3 mr-3" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
         <Bookings />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <Rooms />
        </div>

        <div
          className="tab-pane fade"
          id="nav-addroom"
          role="tabpanel"
          aria-labelledby="nav-addroom-tab"
        >
          <AddRoom />
        </div>

        <div
          className="tab-pane fade"
          id="nav-users"
          role="tabpanel"
          aria-labelledby="nav-users-tab"
        >
          <Users />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
