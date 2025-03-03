import axios from "axios";
import React, { useEffect, useState } from "react";
import { urls } from "../../apiConstant/apiConstant";
const Users = () => {
  const [users, setUsers] = useState([]);

  let getUsers = async () => {
    try {
      let response = await axios(urls.getallusers);
      setUsers(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 p-3 pt-2">
        <h1>Users</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>user Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.length
              ? users.map((user) => (
                  <tr key={user._id}>
                    <td>{user?._id}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.isAdmin ? "YES" : "No"}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
