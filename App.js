import React from 'react';
import RootNavigator from './app/RootNavigator';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/reducers';
import ReduxThunk from 'redux-thunk';
 export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk) )}>
        <RootNavigator />
      </Provider>
     );
  }
}
 