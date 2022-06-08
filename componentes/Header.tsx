<script src="mobile-navbar.tsx"></script>
function Header(){

const show = () => {
console.log("Hey 🎇")
}

return (

    <header>
        <nav className=" nav navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Lucas Sena</a>

            <div className="mobile-menu"
            onClick={show}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>

            <ul className="navbar-nav nav-list">

                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/sobre">Sobre</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/sobre">Contato</a>
                </li>

            </ul>
        </nav>
    </header>

)}

export default Header


