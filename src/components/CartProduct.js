import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import iconCart from '../assets/images/cartProduct.png';

const CartProduct = props => {
  return (
    <View style={styles.cartWrapper}>
      <Image style={styles.iconCart} source={iconCart} />
      <Text style={styles.amoutProduct}> {props.quantity} </Text>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  cartWrapper: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 43,
    height: 43,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#2E71F1',
    position: 'relative',
  },
  iconCart: {
    backgroundColor: '#eaeaea',
  },
  amoutProduct: {
    padding: 2,
    position: 'absolute',
    top: -10,
    right: -5,
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'red',
    borderRadius: 50,
    color: '#ffffff',
  },
});
