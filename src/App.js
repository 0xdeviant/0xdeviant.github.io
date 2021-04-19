import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Main from './components/main/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Main}/>
      </Router>
    </div>
  );
}

export default App
