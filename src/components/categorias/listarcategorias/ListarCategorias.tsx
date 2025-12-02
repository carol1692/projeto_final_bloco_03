import { useEffect, useState } from "react"
import type Categoria from "../../../models/Categoria"
import { listar } from "../../../services/Services"
import { SyncLoader } from "react-spinners"
import CardCategorias from "../cardcategorias/CardCategorias"

function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarCategorias() {
		setIsLoading(true)

		try {
			await listar('/categorias', setCategorias)
		} catch {
			console.log('Erro ao listar todos os Categorias!')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		buscarCategorias()
	}, [categorias.length])

  return (
    <>
        {isLoading && (
				<div className="flex justify-center w-full h-full py-8">
					<SyncLoader color="#7c8753" size={32} />
				</div>
			)}
			<div className="flex justify-center w-full min-h-[70vh] overflow-x-hidden">
				<div className="box-border w-full px-4 py-4 mt-8 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
						{categorias.map((categoria) => (
							<CardCategorias
								key={categoria.id}
								categoria={categoria}
							/>
						))}
					</div>
				</div>
			</div>
    </>
  )
}

export default ListarCategorias