import { View, Text,Image } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import icons from '../../constants/icons'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
const TabIcon = ({color,focused,icon,name})=>{
    return <View className="items-center justify-center gap-1">
        <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-4 h-4"
        />
        <Text className={`${focused? 'font-psemibold':'font-pregular'} text-xs`} style={{color:color}}>
        {name}
        </Text>
    </View> 
    
}

const TabsLayout = () => {
  return (
    <>
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#FFA001',
        tabBarInactiveTintColor:'#CDCDE0',
        tabBarStyle:{
            backgroundColor:'#161622',
            borderTopWidth:1,
            borderTopColor:'#232533',
            height:84,
        }

    }}>
        <Tabs.Screen name="home" options={{
            headerShown:false,
            title:"Home",
            tabBarIcon:({color,focused})=>(
                <TabIcon color={color} focused={focused} name={"Home"} icon={icons.home}/>
            )            
        }}></Tabs.Screen>
        <Tabs.Screen name="bookmark" options={{
            headerShown:false,            
            title:"Bookmark",
            tabBarIcon:({color,focused})=>(
                <TabIcon color={color} focused={focused} name={"Bookmark"} icon={icons.bookmark}/>
            )            
        }}></Tabs.Screen>
        <Tabs.Screen name="create" options={{
            headerShown:false,            
            title:"Create",
            tabBarIcon:({color,focused})=>(
                <TabIcon color={color} focused={focused} name={"Create"} icon={icons.plus}/>
            )            
        }}></Tabs.Screen>
        <Tabs.Screen name="profile" options={{
            headerShown:false,            
            title:"Profile",
            tabBarIcon:({color,focused})=>(
                <TabIcon color={color} focused={focused} name={"Profile"} icon={icons.profile}/>
            )            
        }}></Tabs.Screen>


    </Tabs>
    </>
  )
}

export default TabsLayout