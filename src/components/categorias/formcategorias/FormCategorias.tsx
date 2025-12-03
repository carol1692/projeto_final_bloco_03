import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Services";
import { ClipLoader } from "react-spinners";
import ToastAlert from "../../../utils/ToastAlert";

function FormCategorias() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      ToastAlert('Categoria não encontrada!', 'info')
      console.error(error)
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)

        ToastAlert('Categoria atualizado com sucesso','sucesso')

      } catch (error: any) {
        ToastAlert('Erro ao atualizar o Categoria','erro')
        console.error(error)
      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)
        ToastAlert('Categoria cadastrada com sucesso', 'sucesso')

      } catch (error: any) {
        ToastAlert('Erro ao cadastrar a Categoria', 'erro')
        console.error(error)
      }
    }

    setIsLoading(false)
    retornar();

  }

  function retornar() {
    navigate("/categorias")
  }
  return (
    <> 
      <div className="container flex flex-col items-center justify-start px-4 pt-6 mx-auto min-h-[70vh]">
			<h1 className="my-8 text-3xl font-semibold text-slate-800 md:text-4xl">
				{id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
			</h1>

			<form
			className="flex flex-col w-full max-w-lg gap-4 p-4 bg-white border rounded-xl shadow-sm border-slate-200"
			onSubmit={gerarNovaCategoria}
			>
			<div className="flex flex-col gap-2">
				<label htmlFor="nomeCategoria" className="text-(--cinzao) font-medium">Categoria</label>

				<input
				type="text"
				placeholder="Digite uma nova categoria"
				id="nomeCategoria"
				name="nome"
				required
				className="p-2 text-base border rounded-lg border-slate-300 focus:ring-2 focus:text-(--verdin-escurin) focus:outline-none"
				value={categoria.nome}
				onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
				/>
			</div>

			<button
				className="flex justify-center w-full py-2 mt-2 text-base font-semibold rounded-lg
				text-white bg-(--verdin) hover:bg-(--verdin-escurin) transition"
				type="submit"
			>
				{isLoading ?
				<ClipLoader
				color="#7c8753"
				size={24}
				/>
				:
				<span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
				}
			</button>
			</form>
      </div>
    </>
  )
}

export default FormCategorias


