import Header from "../../Components/Header/Header";
import DisciplineLogo from "../../Components/DisciplineLogo/DisciplineLogo";
import loading from '../../assets/loading3.gif'
import './LoadingPage.css'

function LoadingPage() {
    return (
        <div className="default_page">
            <div className="centralizer_loading" >
                <div>
                    <DisciplineLogo type="complete" />
                </div>
                <div>
                    <img src={loading} alt="Icone de Loading"  style={{width: "150px"}} />
                </div>
                <h2>Se prepare para um upgrade nos seus estudos</h2>
            </div>
        </div>
    )
}

export default LoadingPage;