import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Room from './pages/Room';
import Shop from './pages/Shop';
import Competition from './pages/Competition';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/room' element={<Room />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/competition' element={<Competition />} />
        {/* <Route path='/room' element={<Room />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
