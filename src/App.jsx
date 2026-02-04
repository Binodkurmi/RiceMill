import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/ScrollToTop";
import LoadingSpinner from "./Components/LoadingSpinner";
import './App.css';


// Lazy-loaded components
const Home = lazy(() => import("./Pages/Home"));
const OurStory = lazy(() => import("./Pages/About/OurStory"));
const Team = lazy(() => import("./Pages/About/Team"));
const Organic_rice = lazy(() => import("./Pages/Products/Organic_rice"));
const Premium_rice = lazy(() => import("./Pages/Products/Premium_rice"));
const Contact = lazy(() => import("./Components/Contact"));
const Sustainability = lazy(() => import("./Pages/Sustainability"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home Route */}
          <Route 
            index 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            } 
          />

          {/* About Routes - without About.jsx parent */}
          <Route path="about">
            <Route index element={<Navigate to="story" replace />} />
            <Route 
              path="story" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <OurStory />
                </Suspense>
              } 
            />
            <Route 
              path="team" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Team />
                </Suspense>
              } 
            />
          </Route>

          {/* Products Route */}
          <Route path="products">
            <Route index element={<Navigate to="organic_rice" replace />} />
            <Route 
              path="organic_rice" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Organic_rice/>
                </Suspense>
              } 
            />
            <Route 
              path="premium_rice" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Premium_rice/>
                </Suspense>
              } 
            />
          </Route>

          {/* Sustainability Route */}
          <Route 
            path="sustainability" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Sustainability />
              </Suspense>
            } 
          />

          {/* Contact Route */}
          <Route 
            path="contact" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            } 
          />

          {/* 404 Route */}
          <Route 
            path="*" 
            element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-white">
                <h2 className="text-4xl font-bold text-green-800 mb-4">404</h2>
                <p className="text-lg text-gray-600">Page Not Found</p>
                <NavLink 
                  to="/" 
                  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Return Home
                </NavLink>
              </div>
            } 
          />
        </Route>
      </Routes>
    </>
  );
}