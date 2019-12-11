import React from 'react'
// CSS 
import './style.css'
 
import Logo from '../../img/logo-topo.png'

const Header = () => (

    <div className="container">
        <header className="grid-header">
            
                <img src={Logo}></img>
            <nav className="menu-estilo">
            <ul>
                    <li><a>Menu</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Cursos</a></li>
                </ul>
            </nav>
        </header>


    </div>

)
export default Header
