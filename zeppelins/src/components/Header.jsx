import "../styles/header.css";
import Logo from "./icons/Logo";
import Linkedin from "./icons/Linkedin";

export default function Header() {
    return (
        <header className="container">
            <div id="logo">
                <Logo />
                <button className="arrowBtn"><Linkedin/>Hire Me</button>
            </div>
            <nav>
                <ul>
                    <li>portfolio</li>
                    <li className="active">blog</li>
                    <li>cv</li>
                    <li>store</li>
                    <li>freelance</li>
                    <li>about me</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    );
}