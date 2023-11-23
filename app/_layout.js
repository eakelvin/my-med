import React from "react";
import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="splash" options={{headerShown:false}} />
            <Stack.Screen name="onboarding1" options={{headerShown:false}} />
            <Stack.Screen name="onboarding2" options={{headerShown:false}} />
            <Stack.Screen name="onboarding3" options={{headerShown:false}}  />
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
        </Stack>
    )
}