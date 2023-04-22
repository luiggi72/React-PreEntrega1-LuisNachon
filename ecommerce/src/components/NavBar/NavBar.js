import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Hogar</button>
                <button>Deportes</button>
                <button>Electronicos</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar