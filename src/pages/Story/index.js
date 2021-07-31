import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const ComponentStory = props => {
  return (
    <View style={styles.wrapperStory}>
      <Image
        style={styles.thumStory}
        source={{uri: 'https://placeimg.com/50/50/nature'}}
      />
      <Text>{props.title}</Text>
    </View>
  );
};

const Story = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.WrapperStories}>
          <ComponentStory title="Palembang" />
          <ComponentStory title="Banyuasin" />
          <ComponentStory title="Bengkulu" />
          <ComponentStory title="Bangka" />
          <ComponentStory title="Lampung" />
          <ComponentStory title="Pagaralam" />
          <ComponentStory title="Belitung" />
          <ComponentStory title="jakarta" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  wrapperStory: {
    marginRight: 20,
    alignItems: 'center',
  },
  thumStory: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  WrapperStories: {
    padding: 10,
    flexDirection: 'row',
  },
});
