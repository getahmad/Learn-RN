import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CartProduct from '../../components/CartProduct';

const Profile = props => {
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
          <Text>Banyuasin, Sumatera Selatan</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <Text style={{fontWeight: 'bold'}}>Beranda</Text>
        <Text>Playlist</Text>
        <Text>Videos</Text>
        <Text>Tentang</Text>
        <CartProduct quantity={props.jumlah} />
      </View>
    </View>
  );
};
export default Profile;

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
