

import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from './cart-component/components/Header';
import ItemsContainer from './cart-component/components/ItemsContainer';
import BasketContainer from './cart-component/components/BasketComponent';
import Footer from './cart-component/components/Footer';

class Cart extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
      <Header />
      <ItemsContainer />
      <BasketContainer />
      <Footer />
    </View>
    );
  }
}

export default Cart;
