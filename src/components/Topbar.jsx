import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../assets/img/instagram-logo.svg';
import './Topbar.scss';


//
class Topbar extends React.Component{
  render() {  
    return (
      <header className="topbar">
      <div className="container">
        <Link to="/" className="topbar__logo">
          <LogoSvg alt="Instagram logo"/>
        </Link>

        <div className="topbar__group">
          <button className="topbar__icon">
            <Link to="/users">
            <i className="fas fa-users"/>
            <span>Usuários</span>
            </Link>
          </button>

          <button className="topbar__icon">
            <Link to="/newuser">
              <i className="fas fa-user-plus"/>
              <span>Nova Conta</span>
            </Link>
          </button>
        </div>
        
      </div>
    </header> 
    );
  }
}  


export default Topbar;