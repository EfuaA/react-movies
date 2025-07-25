import "./css/App.css"
import Favorite from "./pages/Favorite"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
