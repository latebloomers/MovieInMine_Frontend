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

    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<HomePage />} />
    //   <Route path='/article' element={<ArticlePage />} />
    //   <Route path='/about' element={<AboutPage />} />
    // </Routes>
    // </BrowserRouter>

    // <Header></Header>
    // <div>
    //   <HomePage></HomePage>
    //   <ArticlePage></ArticlePage>
    // </div>
      // <Routes>
      //   <Route path="/" element={<HomePage />} />
      // </Routes>
    // <div>
    // <Header></Header>
      
    //   </div>
  //   <Routes>
  //   <Route path="/" element={<Header/>} >
  //     <Route path="/article" element={<ArticlePage/>} />
  //     <Route path="/users" element={<Header />} />
  //   </Route>
  // </Routes>
    // <div></div>
  );
}

export default App;


