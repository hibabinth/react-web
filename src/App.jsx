import React from 'react';
import LandingPage from './pages/LandingPage';
import Site from './pages/Site';
import Site8 from './pages/Site8';

function App() {
  const path = window.location.pathname.toLowerCase();

  if (path === '/site') {
    return <Site />;
  }

  if (path === '/site8') {
    return <Site8 />;
  }

  return <LandingPage />;
}

export default App;
