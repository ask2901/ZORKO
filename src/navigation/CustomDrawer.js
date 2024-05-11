import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import HomeScreen from './../screens/HomeScreen';

const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
  return (
    <View
    style={{flex:1, backgroundColor:themeColors.bgColor(1)}}
    >
        <Drawer.Navigator
            drawerType='slide'
            overlayColor='transparent'
            drawerStyle={{
                flex:1,
                width:'65%',
                paddingRight:20,
                backgroundColor:'transparent'
            }}
            sceneContainerStyle={{
                backgroundColor:'transparent'
            }}
            initialRouteName='Home'
        >
            <Drawer.Screen name='Home' component={HomeScreen} />
        </Drawer.Navigator>
    </View>
  )
}

export default CustomDrawer