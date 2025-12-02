import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
  
  return (
    <>
		<div className='bg-(--gelo)'>
			<BrowserRouter>
				<Navbar />
				<Home />
				<Footer />
			</BrowserRouter>
		</div>
		
    </>
  )
}

export default App
