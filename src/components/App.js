import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Homepage from './components/Home/Homepage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Homepage} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;