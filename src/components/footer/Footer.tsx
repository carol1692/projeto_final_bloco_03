import { LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
    let data = new Date().getFullYear()
  return (
       <> 
       <hr  className="text-(--verdin-escurin) border"/>
        <div className="flex justify-center text-(--verdin-escurin)">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Projeto Farmácia - Generation | Copyright: {data}
          </p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/analemos-3nj0y/">
              <LinkedinLogoIcon size={36} />
            </a>
          </div>
        </div>
      </div>
        </>
  )
}

export default Footer