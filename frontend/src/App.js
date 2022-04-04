import React from 'react';
import { Routes, Route, useNavigation } from 'react-router-dom'
import Login from './components/Login';
import Home from './containers/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App