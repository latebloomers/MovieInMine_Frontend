import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/common/Header";
import ArticlePage from "../pages/ArticlePage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MoviePage from "../pages/MoviePage";
import CnemaCupPage from "../pages/CnemaCupPage";

const Router = () => {
  // const HomePage: React.FC = () => {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/cnemacup" element={<CnemaCupPage />} />
      </Routes>

  );
};

export default Router;
