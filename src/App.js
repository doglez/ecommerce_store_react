import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./components/Header";
import ProductsListing from './components/ProductsListing';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductsListing} />
          <Route path='/product/:productID' exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
