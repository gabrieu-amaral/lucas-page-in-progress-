
import { useState } from "react";
function Header(){

const show = () => {
console.log("Hey 🎇")
setXuxu(!xuxu)
}

let [xuxu, setXuxu] = useState(false);
const [goTo, setGoTo] = useState("Home")


return (

    <header>
        <nav className=" nav navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Lucas Sena</a>

            <div className="mobile-menu"
            onClick={show}>
                <div className={"line1" + (xuxu ? "-active" : "")}></div>
                <div className={"line2" + (xuxu ? "-active" : "")}></div>
                <div className={"line3" + (xuxu ? "-active" : "")}></div>

            </div>

            <ul className={"navbar-nav nav-list" + (xuxu ? "active outside-menu" : "")}>

                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/sobre" onClick={() => {}}>Sobre</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/sobre">Contato</a>
                </li>

            </ul>
        </nav>
    </header>

)}

export default Header


