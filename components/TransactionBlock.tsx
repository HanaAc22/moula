import { Transaction } from "../types";
import { View, StyleSheet, Image, Text } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function TransactionBlock(transaction: Transaction){

   
    return(
    <>
        <View>

        {( transaction.url != null && transaction.url!="") && <Image style={styles.img} source={{uri: transaction.url}}/> }
        {( transaction.url != null && transaction.url=="") && <Image  source={require('../assets/images/favicon.png')}/> }
        <Text>{transaction.username}</Text>
        <Text>{transaction.amont}$</Text>
        <Text>{transaction.date}</Text>
        <View>
        { transaction.sent  && <FontAwesome
                    name="arrow-circle-right"
                    size={25}
                    color={'green'}
                    style={{marginRight: 15}}
                /> }
        { !transaction.sent  && <FontAwesome
                    name="arrow-circle-left"
                    size={25}
                    color={'red'}
                    style={{marginRight: 15}}
                /> }

        { transaction.finished && <Text>{transaction.finished}</Text> }
        { transaction.accepted && <Text>{transaction.accepted}</Text> }
        </View>
        
        </View>
         
    </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:0.5,
      flexDirection:"row",
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },

    img: {
        width:50,
        height:50,
        
    }

   

  });
  