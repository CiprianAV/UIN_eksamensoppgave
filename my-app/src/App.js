import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import CategoryPage from './pages/CategoryPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                  element={<Home />}         />
          <Route path="/event/:id"         element={<EventPage />}    />
          <Route path="/category/:slug"    element={<CategoryPage />} />
          <Route path="/dashboard"         element={<Dashboard />}    />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
