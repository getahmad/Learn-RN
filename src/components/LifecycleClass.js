import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CartProduct from './CartProduct';

export default class LifecycleClass extends Component {
  constructor(props) {
    super(props);
    console.log('==>> constructor');
    this.state = {
      locations: 'Palembang',
      isShowCart: true,
    };
  }

  componentDidMount() {
    console.log('==>>  componentDidMount');
    setTimeout(() => {
      this.setState({locations: 'Banyuasin'});
    }, 2000);
    setTimeout(() => {
      this.setState({isShowCart: false});
    }, 4000);
  }

  componentDidUpdate() {
    console.log('===> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('==>componentWillUnmount');
  }

  render() {
    console.log('===> Render');
    return (
      <View>
        <View style={styles.backgroundProfile}>
          <Image
            style={styles.imageProfile}
            source={{
              uri: 'https://ahmaddanang.my.id/wp-content/uploads/2021/05/about-profile.png',
            }}
          />
          <View>
            <Text style={styles.nameProfile}>Ahmad Danang</Text>
            <Text>{this.state.locations}, Sumatera Selatan</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Text style={{fontWeight: 'bold'}}>Beranda</Text>
          <Text>Playlist</Text>
          <Text>Videos</Text>
          <Text>Tentang</Text>
          {this.state.isShowCart && <CartProduct />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundProfile: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  nameProfile: {
    fontWeight: 'bold',
  },
  menu: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
