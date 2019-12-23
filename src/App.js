import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

function Home(props){
  return <h1>Home Component</h1>;
}
function About(props){
  return <h1>Abotut Component</h1>;
}
function Contact(props){
  return <h1>Contact Component</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Link to ='/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/contact'>Contact</Link>
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
      </Router>


      </header>
    </div>
  );
}

export default App;
