import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="Logo" />
                    <h1>Raking de Vendedores</h1>
                    <p>Desenvolvido por Sant Anna</p>
                </div>
            </header>
        </>
    )
}
export default Header