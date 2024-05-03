import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from 'react-native-feather'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, removefromCart, selectCartItems, selectItemsById } from '../../slices/cartSlice.js'

const DishRow = ({item}) => {
    // console.log("item_Dish_Row",item);

    const dispatch = useDispatch();
    const totalItem=useSelector(state=>selectItemsById(state,item.id,item.restroname));
 
    const handleIncrease = () => {
        dispatch(addtoCart({...item}));
    }
    const handleDecrease = () => {
        dispatch(removefromCart({id:item.id}));
    }

    const cartItems=useSelector(selectCartItems);
    // console.log("cartItems",cartItems);

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
    <Image className="rounded-3xl" style={{height:100,width:100}} source={{uri:item.image}} />
        <View className="flex flex-1 space-y-3">
            <View className="pl-3">
                <Text className="text-xl">{item.foodname}</Text>
                <Text className="text-gray-700">{item.desc}</Text>
            </View>
            <View className="flex-row justify-between pl-3 items-center">
                <Text className="text-lg font-bold text-gray-700">Rs {item.price}</Text>
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={handleDecrease} disabled={!totalItem.length} className="p-1 rounded-full" style={{backgroundColor:themeColors.bgColor(1)}}>
                    <Icon.Minus strokeWidth={2} stroke="white" height={20}/>
                    </TouchableOpacity>
                    <Text className="px-3">{totalItem.length}</Text>
                    <TouchableOpacity onPress={handleIncrease} className="p-1 rounded-full" style={{backgroundColor:themeColors.bgColor(1)}}>
                    <Icon.Plus strokeWidth={2} stroke="white" height={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default DishRow