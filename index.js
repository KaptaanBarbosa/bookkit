//create and dispatch the action
import {
    createStore,
    applyMiddleware
} from 'redux';
import {Provider} from 'react-redux'
import React from 'react';
import {render} from 'react-dom'
import logger from 'redux-logger';

import BooksListPage from './components/pages/BooksListPage'
import reducers from './reducers/index'
import {
    BrowserRouter as Router,
    Link,
    Route // for later
  } from 'react-router-dom'
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

class App extends Component {
  render() {

    return (
    <Provider store = {store}>

      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeView} />
          <Route path="/another" component={() => <div>yo!</div>} />
          <Route path="/catalog" component={CatalogView} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/nested" component={NestedView} />
        </div>
      </BrowserRouter>
    </Provider>  
    );
  }
}

render(<App />, document.getElementById('root'));

/**
 * React Router 4.1.2 example
 * This snippet includes following examples:
 * 
 * - Basic multi-view application 
 * - Route Parameters (views/Catalog)
 * - Nested Routes with sub-viws (views/Nested)
 */