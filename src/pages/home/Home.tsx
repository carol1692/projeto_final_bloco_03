function Home() {
  return (
    <>
        <div className="flex justify-center h-[80vh] bg-(--verdin)">
            <div className="container grid grid-cols-2">
                <div className="flex flex-col justify-center items-center gap-6 text-(--cinzao)">
                    <h1 className="text-6xl font-bold">Seja bem vinde!</h1>
                    <p className="text-2xl font-semibold">Aqui você encontra Remedin e Perfumin!</p>
                        {/* coluna 1 */}
                    <div className="rounded py-2 w-1/3 cursor-pointer bg-(--abobora)
                        hover:bg-(--abobora-escuro) text-white flex justify-center transition delay-2">
                        Cadastrar ???
                     </div>
          
                </div>
                {/* coluna 2 */}
                <div className="p-30">
                    <img src="public/img.svg" alt="farmaceutica em um balcão de atendimento" />
                </div>
                
            </div>
        </div>
    </>
   
  )
}

export default Home