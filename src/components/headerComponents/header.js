import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { u1F3E0 } from 'react-icons-kit/noto_emoji_regular/u1F3E0';
import { u1F469 } from 'react-icons-kit/noto_emoji_regular/u1F469';
import { u1F4DE } from 'react-icons-kit/noto_emoji_regular/u1F4DE';
import LCLogo from '../../Assets/images/LC.png';

class Header extends Component {
  render() {
    return (
      <header>
      	<div className="logo">
      		<img src={LCLogo} width="90px" height="70px" />
      	</div>

      	<nav>
      		<ul>
      			<li className="first">
      				<a href="#home"><Icon size={32} icon={u1F3E0} /></a>
      			</li>
      			<li>
      				<a href="#about"><Icon size={32} icon={u1F469} /></a>
      			</li>
      			<li className="last">
      				<a href="#contact"><Icon size={32} icon={u1F4DE} /></a>
      			</li>
      		</ul>
      	</nav>
      </header>
    );
  }
}


export default Header;
