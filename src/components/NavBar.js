import {CartWidget} from './CartWidget'

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className='logo'>Yo Helados</div>
            <ul className="listaNavbar">
                <li className="itemsListaNavbar">Helados</li>
                <li className="itemsListaNavbar">Tortas Heladas</li>
                <li className="itemsListaNavbar">Milkshakes</li>
            </ul>
            <CartWidget />
        </nav>
    )
};