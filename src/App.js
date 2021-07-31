import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import CrudLocalAPI from './pages/CrudLocalAPI';
// import CallingApiAxios from './components/CallingApiAxios';
// import CallingApiVanila from './components/CallingApiVanila';
// import Story from './pages/Story';
// import LifecycleFunction from './components/LifecycleFunction';
// import LifecycleClass from './components/LifecycleClass';
// import CardProduct from './components/CardProduct';
// import Profile from './pages/Profile';
// import Blogging from './assets/images/Blogging.svg';
// import SampleComponent from './pages/SampleComponent';

const App = () => {
  // const [counter, setCounter] = useState(0);
  return (
    <View>
      {/* <Profile jumlah={counter} /> */}
      {/* <SampleComponent /> */}
      {/* <LifecycleClass /> */}
      {/* <LifecycleFunction /> */}
      {/* <Story /> */}
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <CardProduct btnClickCount={() => setCounter(counter + 1)} />
          <CardProduct btnClickCount={() => setCounter(counter + 1)} />
          <CardProduct btnClickCount={() => setCounter(counter + 1)} />
        </View>
      </ScrollView> */}

      {/* <Blogging width={200} height={200} /> */}
      {/* <CallingApiVanila /> */}
      {/* <CallingApiAxios /> */}
      <CrudLocalAPI />
    </View>
  );
};

export default App;
