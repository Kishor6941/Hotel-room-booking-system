import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import BookingScreen from './pages/BookingScreen/BookingScreen'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import ProfileScreen from './pages/ProfileScreen/ProfileScreen'
import LandingPage from './pages/LandingPage/LandingPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='routing'>
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
        <Route path='/home' element={<HomeScreen />} />
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