import { StyleSheet, Image, FlatList  } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ContactBlock from '../components/ContactBlock';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const DATA = [
    {
      url:"https://www.naturephotographie.com/wp-content/uploads/2021/05/Black-Sorbaire.jpg",
      username: 'Hana1',

    },
    {
      url:"https://www.naturephotographie.com/wp-content/uploads/2021/05/Black-Sorbaire.jpg",
      username: 'Hana2',

    },
    {
      url:"https://www.naturephotographie.com/wp-content/uploads/2021/05/Black-Sorbaire.jpg",
      username: 'Hana3',

    },
  ];

  

 
  return (
    <View style={styles.container}>
      {/* <ContactBlock url="https://www.naturephotographie.com/wp-content/uploads/2021/05/Black-Sorbaire.jpg" username="rabie123" />  */}
      <FlatList data={DATA} renderItem={({ item }) => <ContactBlock { ...item } /> }/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  
});
