import { Link } from "react-router-dom";

function MainNav(){
    return(
        <header>
            <h1><Link to='/'>Mama's Food Store</Link></h1>
            <nav>
                <ul>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav;