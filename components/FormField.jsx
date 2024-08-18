import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({title,value,placeHolder,handleChangeText,otherStyles,...props}) => {
  const [showPassWord, setshowPassWord] = useState(false)
  
    return (
    <View className="space-y-2">
      <Text className={`text-gray-100 font-pmedium text-base ${otherStyles}`}>{title}</Text>
      <View className="bg-black-100 px-4 items-center w-full h-16 rounded-2xl border-2 focus:border-secondary flex-row">
      <TextInput 
      className="flex-1 text-white font-psemibold text-base"
      value={value}
      onChangeText={handleChangeText}
      placeholder={placeHolder}
      placeholderTextColor="#7b7b8b"
      secureTextEntry={title==='Password' && !showPassWord}
      />
        {title==='Password' && (
            <TouchableOpacity onPress={()=>setshowPassWord(!showPassWord)}>
               <Image
               source={!showPassWord? icons.eye:icons.eyeHide}
               className="w-6 h-6"
               resizeMethod='contain'
               />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField