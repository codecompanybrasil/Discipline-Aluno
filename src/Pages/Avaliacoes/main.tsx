//Componente principal da página de avaliações
import Paginacao from "./Components/Paginacao"
import HeaderAvaliacao from "./Components/HeaderAvaliacao"
import QueryAvaliacao from "./Components/QueryAvaliacao";
import styles from './Components/Avaliacao.module.css'
import { Enem, Mit, Obmep } from "../../Components/DcpIcons/Icon";

const Avaliacoes = () => {
    const mudaPaginacao = (paginacao: Number) => {
        console.log(`Mudando para a página ${paginacao}`)
    }

    return (
        <div className={styles.centralizer} >
            <div className={styles.avaliacao} >
                <HeaderAvaliacao />
                <div className={styles.querys_avaliacao} >
                    <QueryAvaliacao text="Enem - 2016" icon={<Enem />} />
                    <QueryAvaliacao text="MIT - 2016" icon={<Mit />} />
                    <QueryAvaliacao text="Obmep - 2016" icon={<Obmep />} />
                    <QueryAvaliacao text="Concurso Público para ingresso na carreira de Delegado de Polícia Civil do Estado do Rio Grande do Norte" icon={<Enem />} />
                    <QueryAvaliacao text="Enem - 2016" />
                </div>
                <Paginacao actualPage={1} totalPages={6} mudaPaginacao={mudaPaginacao} />
            </div>
        </div>
    )
}

export default Avaliacoes

