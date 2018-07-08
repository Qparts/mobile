import React from 'react';
import RootNavigator from './src/RootNavigator/Navigator';
import { I18nManager } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
 export default class App extends React.Component {
  constructor(props) {
    super(props);
    I18nManager.forceRTL(false);
  }
  render() {
    
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk) )}>
        <RootNavigator />
      </Provider>
     );
  }
}
 