import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import tw from 'twrnc'

const updateMeds = () => {
    return (
        <View style={tw`mt-20 px-2 py-3`}>
        <ScrollView>
            <View>
                <Text>Edit Meds</Text>
            </View>
        </ScrollView>
        </View>
    )
}

export default updateMeds