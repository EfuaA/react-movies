import './App.css';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </main>
  );
}

export default App;
