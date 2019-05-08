import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { USER_LOGOUT } from '../actions'
import { Logo } from '../svg/logo'
import { Calendar, DressCode, Ticket, Present } from '../svg/icons'
import AuthAPI from '../utils/auth'

import './header.css'

class Header extends Component {
  state = {
    fixed: false
  }

  logoutAccount(){ 
    const { location, toggleMenu, logout} = this.props
    AuthAPI.logout().then(()=> {
      toggleMenu(false)
      logout()
      return <Redirect to={{pathname: "/",
      state: { from: location }}} />
    })
  }
  
  render() {
    const { toggleMenu, isOpen, logged } = this.props
    const { fixed } = this.state
    const css = classNames('header', { 'is-fixed': fixed }, { 'is-open': isOpen })

    return (
      <header className={css}>
        <div className="container">
          <div className="hamburger-holder">
            <button className="hamburger btn btn-icon" onClick={e => toggleMenu()}>
              <div key="line0" className="line" />
              <div key="line1" className="line" />
            </button>
          </div>
          <div className="logo-container" onClick={e => toggleMenu()}>
            <Link to="/">
              <Logo alt="logo" className="logo" />
            </Link>
          </div>
          {logged ? (
             <nav className="navigation">
             <ul className="nav-menu">
             <li className="nav-menu-item is-hidden-md" onClick={e => toggleMenu(false)}>
                 <Link to="/place">
                   <Calendar color="white" /> Lugar & Hora
                 </Link>
               </li>
               <li className="nav-menu-item" onClick={e => toggleMenu(false)}>
                 <Link to="/dress-code">
                   <DressCode color="white" /> Código de Vestimenta
                 </Link>
               </li>
               <li className="nav-menu-item" onClick={e => toggleMenu(false)}>
                 <Link to="/form">
                   <Ticket color="white" /> Confirmar Asistencia
                 </Link>
               </li>
               <li className="nav-menu-item" onClick={e => toggleMenu(false)}>
                 <Link to="/presents">
                   <Present color="white" /> Detalles
                 </Link>
               </li>
               <li className="nav-menu-item" onClick={e => this.logoutAccount()}>
                 <Link to="/login">
                   <Present color="white" /> Logout
                 </Link>
               </li>
             </ul>
           </nav>
          ) : (
            <nav className="navigation">
              <ul className="nav-menu">
              <li className="nav-menu-item" onClick={e => toggleMenu(false)}>
                  <Link to="/login">
                    <Present color="white" /> Entrar
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    )
  }
}

const mapState = ({user}) => {
  return {
    user
  }
}

const mapDispatch = dispatch => {
  return {
    userLogout: dispatch({
      type: USER_LOGOUT
    })
  }
}

export default connect(mapState, mapDispatch)(Header)
