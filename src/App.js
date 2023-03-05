import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '@/routes';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.element}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;