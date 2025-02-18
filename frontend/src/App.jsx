import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useRoutes } from 'react-router-dom'
import routes from './routes/hotelRoutes'
import './App.scss'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import BookingScreen from './pages/BookingScreen/BookingScreen'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import ProfileScreen from './pages/ProfileScreen/ProfileScreen'

const App = () => {
  // let hotelRoutes = useRoutes(routes())
  return (
    <div>
      <Navbar />
      <div className='routing'>
      {/* {hotelRoutes} */}
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/room-book/:id' element={<BookingScreen />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      </div>
    </div>
  )
}

export default App  