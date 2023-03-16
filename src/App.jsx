import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Content } from './components/Content';
import { Create } from './components/Create';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Overview } from './components/Overview';
import { loadData } from './helpers/loadData';

function App() {
  const deportes = loadData();
  
  return (
      <Router>
        <Nav></Nav>
        <Routes>
          <Route exact path='/' element={<Overview data={deportes} />}></Route>
          <Route exact path='/content' element={<Content />}></Route>
          <Route path='/create' element={<Create />}></Route>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
