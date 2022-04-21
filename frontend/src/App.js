import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login';
import Home from './containers/Home';

import { fetchUser } from './utils/fetchUser';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate('/login');
  }, [])

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