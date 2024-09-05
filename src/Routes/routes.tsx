import { Routes, Route } from 'react-router-dom'
import {  Home } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  )
}