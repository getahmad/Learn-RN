import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'red'}} />
      <Text>haloo</Text>
      <Text>haloo</Text>
      <Text>haloo</Text>
      <Danang />
      <Photo />
      <Photo />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGrenn />
      <BoxGrenn />
      <BoxGrenn />
      <BoxGrenn />
    </View>
  );
};

const Danang = () => {
  return <Text>Danang ahmad danang</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://ahmaddanang.my.id/wp-content/uploads/2021/05/about-profile.png',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGrenn extends Component {
  render() {
    return <Text>ini dari kelas component</Text>;
  }
}

export default SampleComponent;
