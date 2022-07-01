
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Calender from './components/Calender/Calender';
import ComplatedTask from './components/ComplatedTask/ComplatedTask';
import Home from './components/Home/Home';
import Todo from './components/TaskManagement/Todo';
import Footer from './SharedPages/Footer';
import Header from './SharedPages/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/complatedtask' element={<ComplatedTask></ComplatedTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App

