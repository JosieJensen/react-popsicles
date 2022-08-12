import './App.css';
import logo from './te-pops.png';


const Header = () => { 
    return(
        <header>
        <img id="TE Popsicles" src={logo} alt="Tech Elevator Popsicle"/> 
        <h1>Tech Elevator Popsicles</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="">Store</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;