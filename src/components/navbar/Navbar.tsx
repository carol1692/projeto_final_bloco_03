import { FirstAid, MagnifyingGlass, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    <div className="w-full py-6 flex justify-center text-(--verdin-escurin)">
        <div className="container flex justify-between">
            <Link to="/">
            <div className="flex items-center text-(--verdin-escurin)">
                <FirstAid size={64} />
                <span>Farmacia Remedin</span>
            </div>
            </Link>

            <div className="flex items-center gap-2.5 w-2/5">
            <input
                type="text"
                className='bg-white rounded-2xl border-2 border-(--verdin-escurin) py-3 px-4 w-full'
                placeholder='Procurar produto'
            />

            <button className='rounded-lg py-2 px-3 cursor-pointer
                bg-(--verdin-escurin) hover:bg-(--verdin) transition delay-2'>
                <MagnifyingGlass size={24} className="text-white" />
            </button>
            </div>

            <div className="flex items-center text-lg gap-3.5 text-(--verdin-escurin)">
                <Link to='/' className='hover:underline'>Home</Link>
                <Link to='/categorias' className='hover:underline'>Categorias</Link>
                <Link to='/cadastrarcategorias' className='hover:underline'>Cadastrar</Link>
            </div>

            <div className="flex items-center gap-4 text-(--verdin-escurin)">
            <UserIcon size={36} className="hover:text-(--verdin)" />
            <ShoppingCartIcon size={36} className="hover:text-(--verdin)" />
            </div>
           
        </div>
        
    </div>
    <hr  className="text-(--verdin-escurin) border"/>
    </>
    
  )
}

export default Navbar