import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (  
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <li><link to ="/">
                <img src="https://www.flaticon.com/edge/redirect?url=aHR0cHM6Ly9hZG9iZS5wcmYuaG4vY2xpY2svY2FtcmVmOjEwMTFscmNLSy9jcmVhdGl2ZXJlZjoxMTAxbDkwMTc2L3B1YnJlZjpHQTEuMi45MTkzNjIwMjQuMTY5Njk1OTI0Ni9kZXN0aW5hdGlvbjpodHRwcyUzQSUyRiUyRnN0b2NrLmFkb2JlLmNvbSUyRmVzJTJGaW1hZ2VzJTJGaWQlMkY2ODIxNDk2MjQlM0ZrJTNEY2FzYSUyNTIwY29uJTI1MjBjb3Jhem9uJTI1MjBsb2dvJTI1MjBpY29ubw==&_ga=2.63010159.1559663866.1715020386-919362024.1696959246&_gl=1*svr4m7*test_ga*OTE5MzYyMDI0LjE2OTY5NTkyNDY.*test_ga_523JXC6VL7*MTcxNTAyMzI0MS41LjEuMTcxNTAyMzI0MS42MC4wLjA.*fp_ga*OTE5MzYyMDI0LjE2OTY5NTkyNDY.*fp_ga_1ZY8468CQB*MTcxNTAyMzI0MS41LjEuMTcxNTAyMzI0MS42MC4wLjA."></img>
                <a className="navbar-brand" href="#">Oli DecoHogar</a>
                </link></li>
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <link to ="/" className="nav-link active" aria-current="page" href="#">Inicio</link></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">¿Quienes somos?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                <ul className="dropdown-menu">
                    <li><link to= "/categoriy/1" className="dropdown-item" href="#">Deco</link></li>
                    <li><link to="/category/2" className="dropdown-item" href="#">Espejos</link></li>
                    <li><link to="/category/3" className="dropdown-item" href="#">Kit de Baño</link></li>
                </ul>
                <li><link to={'/items'} className="text-white text-xl">Productos</link></li>
          <li><link className="text-white text-xl">Contacto</link></li>
          <li>
            <link to='/cart'><CartWidget /></link>
          </li>
                    </li>
                    <li className="nav-item">
                    <CartWidget/>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
}
export default NavBar;

