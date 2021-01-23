import React from 'react'
import logo from '../../images/logo.png'

function Header() {
  return(
    <header>
      <div className="logo">
        <img src={logo} alt="facebook" />
      </div>
      <div className="perfil">Meu Perfil</div>
    </header>
  )
}

export default Header