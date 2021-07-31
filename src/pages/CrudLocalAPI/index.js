import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = ({nama, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.containerItem}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.avatar}
          source={{uri: `https://i.pravatar.cc/150?u=${email}`}}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{nama}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const CrudLocalAPI = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getDataUser();
  }, []);

  const submit = () => {
    const data = {
      nama: nama,
      email: email,
      bidang: bidang,
    };
    if (
      button === 'Simpan' &&
      data.nama !== '' &&
      data.email !== '' &&
      data.bidang !== ''
    ) {
      axios
        .post('http://127.0.0.1:3000/users', data)
        .then(response => {
          console.log('response post', response);
          setNama('');
          setEmail('');
          setBidang('');
          getDataUser();
        })
        .catch(err => console.log('err', err));
    } else if (
      button === 'Update' &&
      data.nama !== '' &&
      data.email !== '' &&
      data.bidang !== ''
    ) {
      axios
        .put(`http://127.0.0.1:3000/users/${selectedUser.id}`, data)
        .then(response => {
          console.log('response Update', response);
          setNama('');
          setEmail('');
          setBidang('');
          getDataUser();
          setButton('Simpan');
        })
        .catch(err => console.log('err', err));
    }
  };

  const getDataUser = () => {
    axios
      .get('http://127.0.0.1:3000/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log('err', err));
  };

  const selectedItem = user => {
    console.log(user);
    setNama(user.nama);
    setEmail(user.email);
    setBidang(user.bidang);
    setButton('Update');
    setSelectedUser(user);
  };

  const DeleteUser = user => {
    axios
      .delete(`http://127.0.0.1:3000/users/${user.id}`)
      .then(res => {
        console.log('res delete', res);
        getDataUser();
      })
      .catch(err => console.log('err', err));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerInput}>
        <Text style={styles.title}>Learn CRUD CrudLocalAPI</Text>
        <TextInput
          placeholder="Your Name"
          style={styles.input}
          value={nama}
          onChangeText={value => setNama(value)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          placeholder="Bidang"
          style={styles.input}
          value={bidang}
          onChangeText={value => setBidang(value)}
        />
        <Button title={button} onPress={submit} />
        <View style={styles.line} />
        {users.map(user => (
          <Item
            key={user.id}
            nama={user.nama}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectedItem(user)}
            onDelete={() =>
              Alert.alert('Warning', 'Anda yakin ingin menghapus user ini?', [
                {text: 'Tidak', onPress: () => console.log('urung delete')},
                {text: 'Iya', onPress: () => DeleteUser(user)},
              ])
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CrudLocalAPI;

const styles = StyleSheet.create({
  containerInput: {
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    marginBottom: 20,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  desc: {
    marginLeft: 10,
    flex: 1,
  },
  descName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  delete: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
