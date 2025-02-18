import React, { useEffect } from "react";
import MyBookings from "../MyBookings/MyBookings";
import MyProfile from "../MyProfile/MyProfile";

const ProfileScreen = () => {
    const user = JSON.parse(localStorage.getItem("userDetails"));

    useEffect(() => {
        if (!user) {
            window.location.href = "/login";
        }
    },[])

  return (
    <div className="ml-3 mt-3">
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
            Profile
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
            My Bookings
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
            <MyProfile />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
            <MyBookings />
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
