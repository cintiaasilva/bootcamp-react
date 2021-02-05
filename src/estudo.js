import React, {Component} from 'react';


class MeuBtn extends Component{
    render(){
      return <button onClick={()=>this.props.change(this.props.text)}>{this.props.text}</button> // this.props passa propriedades para o botão
    }
}

class MeuTitulo extends Component{
  render(){
    return <h2>Vc clicou no {this.props.title}</h2>
  }
}

export default class App extends Component{
    constructor(props){
      super(props);

      this.state = {
        btnAtual : ''
      }
    }
    // função
    handleChange = (nome) => {
        this.setState({
          btnAtual : nome
        })
    }

  render(){
    //console.log(this.state);
    return(
    <> 
      <MeuTitulo title={this.state.btnAtual}/>
      <MeuBtn change={this.handleChange} text="Botao 01"/>
      <MeuBtn change={this.handleChange} text="Botao 02"/>
      <MeuBtn change={this.handleChange} text="Botao 03"/>
      
    </>
    );
  }
}