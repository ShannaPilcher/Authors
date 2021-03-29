import './App.css';
import { Router }from '@reach/router'
import Main from './views/main'
import New from './views/New'
import Edit from './views/Edit'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path= "/authors/" />
        <New path= "/authors/new" />
        <Edit path= "/authors/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
