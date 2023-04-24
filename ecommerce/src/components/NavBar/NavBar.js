// import { Button } from "../Button"
import CartWidget from "../CartWidget/CartWidget"
import { Button } from "../Button"
const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3> 
            <div>
                <button>Hogar</button>
                <button>Deportes</button>
                <button>Electronicos</button>
                <button>Automoviles</button>
                
            </div>
            
            <CartWidget />
        </nav>
    )
}
export default NavBar