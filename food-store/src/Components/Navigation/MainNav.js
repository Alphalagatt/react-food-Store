import { Link } from "react-router-dom";
import { useState } from "react";
import './MainNav.css';
import { Overlay } from "../Login/Login";

function MainNav(){
    const [isOn,setIsOn] = useState(false);

    function showOverLay(){
        setIsOn(true);
    }
    

    return(
        <header>
            <h2><Link to='/'>Mama's Food Store</Link></h2>
            <nav>
            <ul className='nav_links'>
            <li className='nav_links'><Link to='/products'>Products</Link></li>
            <li className='nav_links'><Link to='/cart'>Cart</Link></li>
            <li className='nav_links'><Link to='/'>About</Link></li>
            </ul>
            </nav>
            <Link to='/'><button onClick={showOverLay}>Get Started</button></Link>
            {isOn?<Overlay/>:""}
        </header>
    )
}

export default MainNav;