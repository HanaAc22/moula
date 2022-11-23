import { FontAwesome } from "@expo/vector-icons";
import { View,  Image, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Contact} from "../types";

export default function ContactBlock(contact: Contact){
    return(
        <>
        <View style={styles.container}>
            {( contact.url != null && contact.url!="") && <Image style={styles.img} source={{uri: contact.url}}/> }
            {( contact.url != null && contact.url=="") && <Image  source={require('../assets/images/favicon.png')}/> }

            <Text>{contact.username}</Text>
            <TouchableOpacity onPress={()=>Alert.alert('Send')}>
                <FontAwesome
                    name="arrow-circle-right"
                    size={25}
                    color={'green'}
                    style={{marginRight: 15}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Alert.alert('Request')}>
                    <FontAwesome
                        name="arrow-circle-left"
                        size={25}
                        color={'red'}
                        style={{marginRight: 15}}
                    />
            </TouchableOpacity>
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
  