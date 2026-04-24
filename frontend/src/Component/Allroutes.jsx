import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Mainpage from '../Pages/Main'
import Dashboard from '../Pages/Dashboard'


export const Allroutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  )
}