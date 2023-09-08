import './AvaliacoesOptions.css'
import Header from '../../Components/Header/Header'
import enem_lg_logo from '../../assets/Icons/enem_lg_logo.png'
import modalStyle from '../../Components/Modal/Modal.module.css'
import { DcpButton } from '@codecompanybrasil/discipline-core'

type QueryDetailsProps = {
    title: string,
    value: string
}

function ContentModalComponent() {
    return (
        <div>
            <h1>Content Modal</h1>
        </div>
    )
}

function QueryDetails({title, value}: QueryDetailsProps) {
    return (
        <div className="query_details" >
            <span>
                <strong>{title}</strong>
            </span>
            <span>{value}</span>
        </div>
    )
}

function AvaliacoesOptions() {
    return (
        <div className="default_page" >
            <Header title="Enem" />
            <div className={modalStyle.modal_centralizer}>
                <div className={modalStyle.modal}>
                    <div className="content_avaliacoes">
                        <div className="description_area">
                            <h1 className="description_title">Descrição:</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic at culpa eligendi quas fugiat nihil laboriosam quae impedit, excepturi asperiores aliquam suscipit facilis perspiciatis minus itaque officiis adipisci. Praesentium, vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate, labore voluptate quis libero aut, totam cum unde sint ipsam deleniti. Odio voluptatum eligendi nisi, dolores cumque eos ducimus ea!</p>
                        </div>
                        <div className="detail_area" >
                            <img src={enem_lg_logo} className="img_detail_area" alt="Logo do Enem" />
                            <QueryDetails title="Quantidade questões: " value="10" />
                            <QueryDetails title="Quantidade avaliações: " value="20" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AvaliacoesOptions