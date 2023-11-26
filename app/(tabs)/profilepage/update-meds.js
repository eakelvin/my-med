import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import tw from 'twrnc'

const updateMeds = () => {
    return (
        <View style={tw`mt-20 px-2 py-3`}>
            <View>
                <Text>Edit Meds</Text>
            </View>
        </View>
    )
}

export default updateMeds