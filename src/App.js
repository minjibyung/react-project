import './App.css';
import { Home } from './components/pages/Home/Home';

import { Routes, Route } from 'react-router-dom';

import { AboutUS } from './components/pages/AboutUS/AboutUS';

import { ContactUS } from './components/pages/ContactUS/ContactUS';

import { ChangeColor } from './components/pages/ChangeColor/ChangeColor';

import { Counter } from './components/pages/Counter/Counter';

import { NotFound } from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Home />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUS' element={<AboutUS />} />
        <Route path='/contactUS' element={<ContactUS />} />
        <Route path='/ChangeColor' element={<ChangeColor />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
