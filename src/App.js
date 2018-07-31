import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Components Life Cycle</h1>
        </header>
        <Body />
      </div>
    );
  }
}

class Body extends Component{
  constructor(props){
    super(props);

    this.state = {
      RN: 0
    }
    this.getRandomNumber = this.getRandomNumber.bind(this)
  }
  getRandomNumber(){
    //console.log('random number called')
    this.setState({RN: Math.floor(Math.random() * 10)})
  }
  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}> Random Number </button>
        <Numbers  myNumber={this.state.RN}/>
      </div>
    );
  }
}

//All of this methode represent the life cycle of component
class Numbers extends Component{
  componentWillMount(){
    console.log("componentWillMount called here")
  }

  componentDidMount(){
    console.log("componenteDidMount called here")
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called")
  }

  shouldComponentUpdate(newProps, nextState){
    console.log("Called shoud component Update");
    return true;
  }

  componentWillUpdate(newProps, NextState){
    console.log("Called Component will Update");
  }

  componentDidUpdate(newProps, nextState){
    console.log("Called component Did Update");
  }

  componentWillUnmount(){
    console.log("Called Component un mount");
  }
  render(){
    return(
      <div>
      <br />
        {this.props.myNumber}
      </div>
    );
  }
}
export default App;
