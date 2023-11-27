import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import tw from 'twrnc'
import { Fontisto } from '@expo/vector-icons';

const schedule = () => {
    return (
        <View style={tw`px-2 py-5`}>
        <ScrollView>
        <View style={tw`border-b-2 border-slate-200`}>
            <Text style={tw`font-bold text-xl`}>Schedule</Text>
            <Text>Tap to edit or delete scheduled reminders</Text>
        </View>
        <View style={tw`mt-3 px-2 py-3 border border-green-400 flex-row justify-between`}>
                <View style={tw`flex-row`}>
                    <View style={tw`border rounded-full p-5`}>
                        <Fontisto name="pills" size={25} color="black" />
                    </View>
                    <View style={tw`ml-3 justify-center`}>
                        <View>
                            <Text style={tw`text-sm`}>No of Pills</Text>
                            <Text style={tw`text-md font-bold`}>Type of Pill</Text>
                            <Text style={tw`text-sm`}>Time to take</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`font-bold text-lg`}>Date</Text>
                    <Text>Time</Text>
                </View>
            </View>
            <View style={tw`mt-3 px-2 py-3 border border-green-400 flex-row justify-between`}>
                <View style={tw`flex-row`}>
                    <View style={tw`border rounded-full p-5`}>
                        <Fontisto name="pills" size={25} color="black" />
                    </View>
                    <View style={tw`ml-3 justify-center`}>
                        <View>
                            <Text style={tw`text-sm`}>No of Pills</Text>
                            <Text style={tw`text-md font-bold`}>Type of Pill</Text>
                            <Text style={tw`text-sm`}>Time to take</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`font-bold text-lg`}>Date</Text>
                    <Text>Time</Text>
                </View>
            </View>
            <View style={tw`mt-3 px-2 py-3 border border-green-400 flex-row justify-between`}>
                <View style={tw`flex-row`}>
                    <View style={tw`border rounded-full p-5`}>
                        <Fontisto name="pills" size={25} color="black" />
                    </View>
                    <View style={tw`ml-3 justify-center`}>
                        <View>
                            <Text style={tw`text-sm`}>No of Pills</Text>
                            <Text style={tw`text-md font-bold`}>Type of Pill</Text>
                            <Text style={tw`text-sm`}>Time to take</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`font-bold text-lg`}>Date</Text>
                    <Text>Time</Text>
                </View>
            </View>
            <View style={tw`mt-3 px-2 py-3 border border-green-400 flex-row justify-between`}>
                <View style={tw`flex-row`}>
                    <View style={tw`border rounded-full p-5`}>
                        <Fontisto name="pills" size={25} color="black" />
                    </View>
                    <View style={tw`ml-3 justify-center`}>
                        <View>
                            <Text style={tw`text-sm`}>No of Pills</Text>
                            <Text style={tw`text-md font-bold`}>Type of Pill</Text>
                            <Text style={tw`text-sm`}>Time to take</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`font-bold text-lg`}>Date</Text>
                    <Text>Time</Text>
                </View>
            </View>
            <View style={tw`mt-3 px-2 py-3 border border-green-400 flex-row justify-between`}>
                <View style={tw`flex-row`}>
                    <View style={tw`border rounded-full p-5`}>
                        <Fontisto name="pills" size={25} color="black" />
                    </View>
                    <View style={tw`ml-3 justify-center`}>
                        <View>
                            <Text style={tw`text-sm`}>No of Pills</Text>
                            <Text style={tw`text-md font-bold`}>Type of Pill</Text>
                            <Text style={tw`text-sm`}>Time to take</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`font-bold text-lg`}>Date</Text>
                    <Text>Time</Text>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default schedule