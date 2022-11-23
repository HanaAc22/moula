import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import TransactionBlock from '../components/TransactionBlock';

export default function TabTwoScreen() {
  const TRANSACTIONS = [
    {
        url: 'https://www.naturephotographie.com/wp-content/uploads/2021/05/Black-Sorbaire.jpg',
        username: 'SendOrGet', 
        amont: 15,
        date: '23/11/2022',
        sent: true,
        finished: true, 
        accepted: true
        

    },

    {
      url: 'https://www.naturephotographie.com/wp-content/uploads/2021/05/Black-Sorbaire.jpg',
      username: 'SendOrGet2', 
      amont: 15,
      date: '23/11/2022',
      sent: true,
      finished: true, 
      accepted: false
      

  }, 
  {
    url: 'https://www.naturephotographie.com/wp-content/uploads/2021/05/Black-Sorbaire.jpg',
    username: 'SendOrGet3', 
    amont: 15,
    date: '23/11/2022',
    sent: false,
    finished: true, 
    accepted: false
    

}, 
{
  url: 'https://www.naturephotographie.com/wp-content/uploads/2021/05/Black-Sorbaire.jpg',
  username: 'SendOrGet4', 
  amont: 15,
  date: '23/11/2022',
  sent: true,
  finished: true, 
  accepted: false
  

}, 
 
]


  return (
    <View style={styles.container}>
      <FlatList data={TRANSACTIONS} renderItem={({ item }) => <TransactionBlock { ...item } /> }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
