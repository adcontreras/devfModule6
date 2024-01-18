
import { Routes, Route } from 'react-router-dom'
import Items from '../Pages/items/Items.jsx'
import Login from '../Pages/login/Login.jsx'
import Signup from '../Pages/signup/Signup.jsx'
import DetailItems from '../pages/detailItems/DetailItems.jsx'

export default function RoutesIndex() {
  return (
    <Routes>
        <Route path='/' element={<Items />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/item/:id' element={<DetailItems />} />
    </Routes>
  )
}