import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="profile" options={{headerShown: false}} />
            <Stack.Screen name="edit-profile" options={{headerShown: false}} />
            <Stack.Screen name="update-meds" options={{headerShown: false}} />
        </Stack>
    )
}

export default Layout