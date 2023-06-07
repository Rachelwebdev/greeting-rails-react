import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGreetings } from './redux/greetingsSlice';
import Greetings from './Greeting';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Greetings />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
