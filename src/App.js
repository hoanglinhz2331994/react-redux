import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import News from './News';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.dulieu}         
          <News/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.mang1 //lấy dữ liệu mang1 trong Store gán vào biến dulieu
  }
}

export default connect(mapStateToProps)(App);

