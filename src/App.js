import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.scss';
import { ConnectedRouter } from 'connected-react-router';
//import Header from './components/Header/Header'
import Maps from './components/Maps/Maps'
import Error from './components/Error/Error'

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <ConnectedRouter history={this.props.history}>
          <div className="container">

            <section>
              <Switch>
                <Route exact path={"/"} component={Maps} />
                <Route render={() => <Error/> } />
              </Switch>
            </section>
          </div>
          </ConnectedRouter>
        </main>
      </div>
    );
  }
}

export default App;
