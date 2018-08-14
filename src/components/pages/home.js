import React, { Component } from 'react';
import hikeBW from '../../Assets/images/hikeBW.jpg';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
      	<h1>
        	Lansi Chu
        </h1>

        <img src={hikeBW} />
      </div>
    );
  }
}

export default Home;
