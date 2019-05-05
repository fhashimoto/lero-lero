import React, { Component } from 'react';
import aleatorias from "./aleatorias.json";

class Random extends Component {
  constructor(props){
    super(props);
    this.state = {
      novo : "Clique no botão para gerar uma frase aleatória",
    }
  }

  handleClick = () => {
    this.setState({
      novo: aleatorias.frases[Math.trunc((Math.random()*10))].frase
    })
  }

  render() {
    return (
      <div className="container">
          <img src="https://i.imgur.com/FRK6meX.png" style={{width:'250px', height:'200px'}}alt="..."/>
          <div >
            <h5>Lero Lero do Hashi</h5>
            <blockquote>{this.state.novo}</blockquote>
            <button onClick={this.handleClick}>Frase Aleatória</button>
          </div>
      </div>
    );
  }
}

export default Random;

{/* 
<div className="jumbotron">
        <h1 className="display-4">LERO LERO</h1>
        <p className="lead">Gerador de frases aleatórias</p>
        <hr className="my-4"/>
        <p>{this.state.novo}</p>
        <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Frase Aleatória</button>
      </div>
       */}
      {/* <div>
        
        <button onClick={this.handleClick}>Frase aleatória</button> 
        <p>{this.state.novo}</p>
      </div> */}