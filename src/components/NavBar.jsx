import {CartWidget} from './CartWidget'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to='/'>
                  <img className='logo' src="https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/272973963_5180834145268368_1609589585057874965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YTdDMpclf8IAX9RjQAt&_nc_ht=scontent.fcor2-2.fna&oh=00_AfCf1txlBJGNYmyFuB2we0zRrFLnufGHBs5IUsvJx9xIcQ&oe=638AF7C0" alt="logo de la marca" />
                </Link>
            </div>
            <ul className="listaNavbar">
                <Link to='/category/3'><li className="itemsListaNavbar">| HELADOS |</li></Link>
                <Link to='/category/2'><li className="itemsListaNavbar">| POSTRES HELADOS |</li></Link>
                <Link to='/category/1'><li className="itemsListaNavbar">| MILKSHAKES |</li></Link>
            </ul>
            <div className='iconContainer'>
                <i className="bi bi-person icons">LOG IN</i>
                <i className="bi bi-box-arrow-in-right icons"> SIGN UP</i>
                <Link to='/cart'><CartWidget /></Link>
            </div>
        </nav>
    )
}