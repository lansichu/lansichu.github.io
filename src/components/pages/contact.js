import React, { Component } from 'react';
import github from '../../Assets/images/github.png';
import email from '../../Assets/images/email.png';
import linkedin from '../../Assets/images/linkedin.png';
import Popup from 'reactjs-popup';

class Contact extends Component {
  emailPopup() {
    Popup.alert("My email is: chulansi@gmail.com");
  }

  render() {
    return (
      <div className="container-fluid">
      	<h1>
        	Contact me!
          <br />
          <br />
        </h1>
        <div className="inline">
        	<span><a href="https://github.com/lansichu" target="_blank"><img src={github} style={{width:50,height:50}} /></a></span>
          <span>
            <Popup trigger={<img src={email} style={{width:50,height:50, cursor:'pointer'}} />} position="top left" >
              {close => (
                <div>
                  Email is: chulansi@gmail.com
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                </div>
              )}
            </Popup>
          </span>
          <span><a href="https://www.linkedin.com/in/lansichu/" target="_blank"><img src={linkedin} style={{width:54,height:54}} /></a></span>
        </div>
        <p>
          
        </p>

      </div>
    );
  }
}

export default Contact;
