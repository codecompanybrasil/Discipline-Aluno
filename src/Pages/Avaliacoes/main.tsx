//Componente principal da página de avaliações
import DcpButton from "../../Components/DcpButton/DcpButton"
import Paginacao from "./Components/Paginacao"

const Avaliacoes = () => {
    const mudaPaginacao = (paginacao: Number) => {
        console.log(`Mudando para a página ${paginacao}`)
    }

    return (
        <>
            {/* Button Primary */}
            <DcpButton text="Enviar" />

            {/* Button Accent */}
            <DcpButton text="Enviar" color="accent" />
            <Paginacao actualPage={1} totalPages={6} mudaPaginacao={mudaPaginacao} />
        </>
    )
}

export default Avaliacoes

