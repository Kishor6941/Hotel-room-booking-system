import { Navigate } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import BookingScreen from "../pages/BookingScreen/BookingScreen";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const HotelRoutes = () => {
  let routes = [
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/home",
      element: <HomeScreen />,
    },
    {
      path: "/room-book/:id",
      element: <BookingScreen />,
    },
    {
      path : '/register',
      element : <Register />
    },
    {
      path : '/login',
      element : <Login />
    }
  ];

  return routes
    
  
};

export default HotelRoutes;
