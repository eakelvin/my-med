import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="add_medicine" options={{headerShown: false}} />
            <Stack.Screen name="reminder" options={{headerShown: false}} />
            <Stack.Screen name="schedule" options={{headerShown: false}} />
        </Stack>
    )
}

export default Layout