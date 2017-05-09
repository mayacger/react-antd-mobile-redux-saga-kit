import { createStore, applyMiddleware } from 'redux';
// import createHistory from 'history/createBrowserHistory';

// import { Route } from 'react-router';
import createSagaMiddleware from 'redux-saga';
// import { connectRouter, routerMiddleware } from 'connected-react-router';

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import sagas from '../sagas';
import rootReducer from '../reducers';

// import history from '../services/history';
// const rootReducer = combineReducers({
//   ...reducers
// });
// const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    // connectRouter(history)(rootReducer),
    // combineReducers({
    //   rootReducer,
    //   router: routerReducer
    // }),
    initialState,
    applyMiddleware(sagaMiddleware)
    // compose(
    // applyMiddleware(
    //   middleware, // for dispatching history actions
    //   sagaMiddleware,
    //   // ... other middlewares ...
    // ),
  // ),
    // applyMiddleware(sagaMiddleware, middleware)
  )
  sagaMiddleware.run(sagas);
  return store;
}
