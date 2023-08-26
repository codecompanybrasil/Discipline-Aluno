//Componente principal da página de avaliações
import Paginacao from "./Components/Paginacao"

const Avaliacoes = () => {
    const mudaPaginacao = (paginacao: Number) => {
		console.log(`Mudando para a página ${paginacao}`)
	}

    return (
        <>
            <Paginacao actualPage={1} totalPages={6} mudaPaginacao={mudaPaginacao} />	
        </>
    )
}

export default Avaliacoes

