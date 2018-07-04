import React from 'react';
import RootNavigator from './src/RootNavigator/Navigator';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
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
 