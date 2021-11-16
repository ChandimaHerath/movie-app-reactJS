import { Component } from 'react';
import './App.css';
import NotFound from './components/common/notFound';
import Customers from './components/customers';
import Movies from './components/movies';
import Rentals from './components/rentals';
import {Route} from 'react-router-dom'

class App extends Component{
  render(){
    return (
      <main className="container">
      <Route path="/movies"  component={Movies}>  </Route>
      <Route path="/customers"  component={Customers}>  </Route>
      <Route path="/rentals"  component={Rentals}>  </Route>
      <Route path="/not-found"  component={NotFound}>  </Route>



    </main>
    );
  }
}

export default App;
