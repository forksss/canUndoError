import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Editor  from './pages/Editor'
import  About  from './pages/About'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/editor">Editor</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/editor" component={Editor} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome in Home Page</h2>;
}


export default App;
