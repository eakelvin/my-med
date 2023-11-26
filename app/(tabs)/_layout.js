import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="homepage" 
                options={{
                    headerShown: false, 
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (<AntDesign name="home" size={24} color="green" />)
                }} 
            />
            <Tabs.Screen 
                name="report" 
                options={{ 
                    tabBarLabel: 'Report',
                    tabBarIcon: () => (<Octicons name="report" size={24} color="black" />)
                }} 
            />
            <Tabs.Screen 
                name="profilepage" 
                options={{
                    headerShown: false, 
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (<AntDesign name="user" size={24} color="black" />)
                }} />
        </Tabs>
    )
}

export default Layout