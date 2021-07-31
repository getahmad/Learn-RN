import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallingApiVanila = () => {
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

  useEffect(() => {
    // GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    // POST
    // const dataForApi = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('data object => ', dataForApi);
    // console.log('data stringinfy =>', JSON.stringify(dataForApi));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForApi),
    // })
    //   .then(response => response.json())
    //   .then(json => console.log(json));
  }, []);

  const getDataUser = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => setDataUser(json.data));
  };

  const postDataUser = () => {
    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForApi),
    })
      .then(response => response.json())
      .then(json => setDataJob(json));
  };

  return (
    <View>
      <Text style={styles.title}>to get data using fetch</Text>
      <Text>GET AND POST DATA FETCH</Text>

      <Button title="GET DATA" onPress={getDataUser} />
      <Image style={styles.avatar} source={{uri: dataUser.avatar}} />
      <Text>{dataUser.email}</Text>
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>

      <View style={styles.line} />
      <Button title="POST DATA" onPress={postDataUser} />
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallingApiVanila;

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
