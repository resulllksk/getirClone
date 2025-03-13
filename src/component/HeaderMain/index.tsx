import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles' 
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';function index() {
  return (
    <View style={styles.headerMain}>
        <View style={styles.headerOne}>
            <Image/>
            <Ionicons name="home" size={30} color="black" />
            <View style ={styles.headerOneView}>
                <Text style={{fontWeight:'600',fontSize: 16}}>Ev</Text>
                <Text style={{fontWeight:'500',fontSize: 11, color: 'gray',marginLeft: 6, marginRight: 30}}>Bosna-Hersek Mah./Tanış Sk./Yörü</Text>
                <Entypo name="chevron-right" size={25} color="black" />
            </View>
            <View style={styles.headerTwo}>
                <Text style={{fontSize:10,fontWeight:'bold', color:'#FFD00C'}}>TVS</Text>
                <Text style={{fontSize:18,fontWeight:'bold', color:'#FFD00C'}} >13<Text style={{fontSize:18,fontWeight:'bold', color:'#FFD00C'}}>dkr</Text></Text>

            </View>
        </View>

        <View>

        </View>
    </View>
  )
}

export default index