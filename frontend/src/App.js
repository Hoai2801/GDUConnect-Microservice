import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Room from './pages/Room';
import Shop from './pages/Shop';
import Competition from './pages/Competition';

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<p>Home</p>} />
        <Route path='/room' element={<Room />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/competition' element={<Competition />} />
        {/* <Route path='/room' element={<Room />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
