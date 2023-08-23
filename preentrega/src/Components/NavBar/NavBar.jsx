import React from "react";
import './Navbar.css'
import CartWidget from '../Cartwidget/CartWidget'

const NavBar = () =>{
    return(
        <header>
            <div className='containerNav'>
            <h1>IvenClothes</h1>
                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">Productos</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">Ayuda</a>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;