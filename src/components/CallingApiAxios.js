import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallingApiAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    id: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
    id: '',
  });

  const getDataUser = () => {
    axios
      .get('https://reqres.in/api/users/2')
      .then(response => {
        setDataUser(response.data.data);
      })
      .catch(err => console.log('error=> ', err));
  };

  const postDataUser = () => {
    const dataForApi = {
      name: 'ahmad danang',
      job: 'leader',
    };
    axios
      .post('https://reqres.in/api/users', dataForApi)
      .then(response => {
        setDataJob(response.data);
      })
      .catch(err => console.log('error', err));
  };

  return (
    <View>
      <Text style={styles.title}>to get data using fetch</Text>
      <Text>GET AND POST DATA FETCH</Text>

      <Button title="GET DATA" onPress={getDataUser} />
      {dataUser.avatar.length > 0 && (
        <Image style={styles.avatar} source={{uri: dataUser.avatar}} />
      )}
      <Text>{dataUser.email}</Text>
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>

      <View style={styles.line} />
      <Button title="POST DATA" onPress={postDataUser} />
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallingApiAxios;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 15,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 30,
  },
});
