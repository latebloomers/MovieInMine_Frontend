import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Routes from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Router from './router/Router';
import Header from './components/common/Header';
import ArticlePage from "./pages/ArticlePage";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header />
          
          <Router />
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;


