import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route} from 'react-router-dom'

import ListBarbershops from './pages/ListBarbershops'
import RegisterBarberShop from './pages/RegisterBarberShop'


function App() {

  return (
    <>
    <div className="min-h-screen bg-zinc-950 text-white">
    <Navbar />
    <div className="p-6">
    <Routes>
      <Route path="/" element={<RegisterBarberShop />} />
      <Route path="/barbershops" element={<ListBarbershops />} />
    </Routes>
    </div>
    </div>
  </>
  );
}

export default App;
