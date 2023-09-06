import ModalAvaliacao from "./Components/ModalAvaliacao"
import Header from "../../Components/Header/Header"
import DcpButton from "../../Components/DcpButton/DcpButton"

function AvaliacaoPage() {
    return (
        <div className="default_page">
            <Header />
            <div style={{marginTop: "100px"}}>
                <div>
                    <ModalAvaliacao />
                </div>
                <div className="w-100 d-flex justify-content-center mt-5">
                    <DcpButton text="Resolver Avaliações" color="accent" />
                </div>
            </div>
        </div>
    )
}

export default AvaliacaoPage