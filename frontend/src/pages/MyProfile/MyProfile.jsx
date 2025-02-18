import React from "react";

const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div>
      <div className="container mt-2">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
          <h1>My Profile</h1>
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src="https://i.imgur.com/bDLhJiP.jpg"
                  width="100"
                  className="rounded-circle"
                />
              </div>

              <div className="text-center mt-3">
                <h5 className="mt-2 mb-0">{user?.userDetails?.name}</h5>
                <span>{user?.userDetails?.email}</span>

                <div className="px-4 mt-1">
                  <p className="fonts">
                    isAdmin : {user?.userDetails?.isAdmin ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
