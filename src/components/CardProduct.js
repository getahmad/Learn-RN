import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// const CounterCart = props => {
//   return (
//     <Text
//       style={{
//         marginTop: 20,
//         marginBottom: 20,
//         marginLeft: 20,
//         fontWeight: 'bold',
//         fontSize: 20,
//       }}>
//       {props.counterProps}
//     </Text>
//   );
// };

const CardProduct = props => {
  // const [counter, setCounter] = useState(0);
  // const add = () => {
  //   setCounter(counter + 1);
  // };
  return (
    <View>
      {/* <View style={{alignItems: 'center'}}>
        <CounterCart counterProps={counter} />
      </View> */}
      <View style={styles.bgCard}>
        <Image
          style={styles.imageProduct}
          source={{uri: 'https://placeimg.com/200/100/tech'}}
        />
        <Text style={styles.titleProduct}>Asus a456ur</Text>
        <Text style={styles.price}>Rp. 25.000</Text>
        {/* <Button title="Add to cart" color="salmon" onPress={add} /> */}
        <TouchableOpacity onPress={props.btnClickCount}>
          <View style={styles.buyButton}>
            <Text style={styles.textButton}>Beli Sekarang</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgCard: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    width: 220,
    backgroundColor: '#eaeaea',
  },
  imageProduct: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  titleProduct: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    marginTop: 10,
    color: 'green',
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: 'salmon',
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
  },
  textButton: {
    textAlign: 'center',
  },
});

export default CardProduct;
