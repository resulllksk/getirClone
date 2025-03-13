import React, { Children } from 'react';
import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import HomeNavigator from './HomeNavigator'; // HomeNavigator bileşeninizin yolu
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();

function RootNavigator() {

    const CustomTabBarBottom=({children})=>{
        return(
            <TouchableOpacity
            style={{
                width:55,
                height:55,
                backgroundColor:"",
                justifyContent: 'center',
                alignItems:'center',
                borderRadius:33,
                marginTop:-8,
                borderWidth:3,
                borderColor:'white'
            }}
            >
                 <Entypo name="list" size={32} color="#FFD00C" />
            </TouchableOpacity>
        )
    }
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C4EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
<Entypo name="home" size={24} color="black" />          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
<FontAwesome5 name="search" size={24} color="black" />          ),
        }}
      />

        <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
            tabBarButton:(props)=><CustomTabBarBottom{...props}/>
        }}
        />


      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
<Feather name="user" size={24} color="black" />          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
<AntDesign name="gift" size={24} color="black" />          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
