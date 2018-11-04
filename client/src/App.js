import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import AppNavbar from './components/AppNavbar';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (



      <Provider store={store}>
        <div className="App">

          <AppNavbar />
          <Container>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </BrowserRouter>


          </Container>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
