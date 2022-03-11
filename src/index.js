import React from 'react';
import ReactDOM from 'react-dom';
import logo from './coffee.gif'
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css'


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return (
      <p>{this.state.date.toLocaleTimeString()}</p>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-content">
          coffee break
          <hr className='App-divider'></hr>
          <a
          className="App-link"
          href=""
          rel="noopener noreferrer"
        >
          take a coffee break and read our papers
        </a>
        </p>
      </header>
    </div>
  );
}

function componentRendering(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(componentRendering, 1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
