import React from 'react';
import LoginForm from '../components/LoginForm';
import VideoComponent from '../components/VideoComponent';
import HomePage from '../components/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path='loginform' element={<LoginForm/>}/>
            <Route path="/videocomponent" element={<VideoComponent />}/>
          </Routes>
        </BrowserRouter>
    
  );
};

export default App;
