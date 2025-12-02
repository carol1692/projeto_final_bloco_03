import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import FormCategorias from './components/categorias/formcategorias/FormCategorias'
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias'
import DeletarCategorias from './components/categorias/deletecategorias/DeletarCategorias'

function App() {
  
  return (
    <>
		<div className='bg-(--gelo)'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='/categorias' element={<ListarCategorias />}/>
					<Route path='/cadastrarcategorias' element={<FormCategorias />}/>
					<Route path='/editarcategoria/:id' element={<FormCategorias />}/>
          			<Route path='/deletarcategoria/:id' element={<DeletarCategorias />}/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
		
    </>
  )
}

export default App
