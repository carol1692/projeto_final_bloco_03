import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { PencilIcon, TrashIcon } from "@phosphor-icons/react"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <>
    <div className="border border-slate-200 bg-white flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition justify-between">
      <header className="py-3 px-6 bg-(--amarelinho) text-(--cinzao) font-semibold text-2xl">
        Categoria
      </header>

      <p className="p-8 text-2xl text-(--cinzao) h-full">
        {categoria.nome}
      </p>

      <div className="flex">

        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-1/2 bg-(--verdin)  hover:bg-(--verdin-escurin) hover:text-white text-(--cinzao) py-2 flex items-center justify-center transition border-r border-white"
        >
            <button className="flex items-center">
                <PencilIcon 
                    width={32}
                    className="hover:text-white"
                />
                <span>Editar</span>
            </button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-1/2 bg-(--verdin-escurin)  hover:bg-(--verdin) hover:text-(--cinzao) text-white py-2 flex items-center justify-center transition"
        >
          <button className="flex items-center">
                <TrashIcon 
                    width={32}
                    className="hover:text-(--cinzao)"
                />
                <span>Deletar</span>
            </button>
        </Link>

      </div>
    </div>
    </>
  )
}

export default CardCategorias