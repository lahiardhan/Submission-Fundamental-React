import React from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import Page404 from './pages/404';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/*' element={<Page404 />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/archive' element={<ArchivePage />} />
          <Route path='/notes/new' element={<AddPage />} />
          <Route path='/notes/:id' element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
