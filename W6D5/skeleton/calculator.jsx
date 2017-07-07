import React from 'react';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {result: 0,num1: "", num2: ""};
    this.setNum1 =this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clicksum = this.clicksum.bind(this);
    this.clickmultiply = this.clickmultiply.bind(this);
    this.clickminus = this.clickminus.bind(this);
    this.clickdivide = this.clickdivide.bind(this);
  }

  setNum1(event){
    this.setState({num1: parseInt(event.target.value)});
  }

  setNum2(event){
    this.setState({num2: parseInt(event.target.value)});
  }

  clicksum(event){
    event.preventDefault();
    this.setState({result: this.state.num1+this.state.num2});
  }

  clickmultiply(event){
    event.preventDefault();
    this.setState({result: this.state.num1*this.state.num2});
  }

  clickminus(event){
    event.preventDefault();
    this.setState({result: this.state.num1-this.state.num2});
  }

  clickdivide(event){
    event.preventDefault();
    this.setState({result: this.state.num1/this.state.num2});
  }

  render(){
    return(
      <div>
        <h1>{this.state.result}</h1>
        <input type="text" onChange={this.setNum1} ></input>
        <br/>
        <input type="text" onChange={this.setNum2 }></input>
        <br/>
        <button onClick={this.clicksum}>+</button>
        <button onClick={this.clickmultiply}>*</button>
        <button onClick={this.clickminus}>-</button>
        <button onClick={this.clickdivide}>/</button>
      </div>
    );
  }
}

export default Calculator;
