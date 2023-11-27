import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import tw from 'twrnc'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import { ScrollView } from "react-native-gesture-handler";

const reminder = () => {
    return (
        <View style={tw`mt-5 p-5`}>
        <ScrollView>
            <View>
                <Text style={tw`font-bold text-xl`}>Reminder</Text>
                <Text>Turn off reminder by selecting either of the options below</Text>
            </View>
            <View style={tw`mt-3 px-2 py-3 border border-green-400 flex-row justify-between`}>
                <View style={tw`flex-row`}>
                    <View style={tw`border rounded-full p-5`}>
                        <Fontisto name="pills" size={50} color="black" />
                    </View>
                    <View style={tw`ml-3 justify-center`}>
                        <View>
                            <Text style={tw`text-sm`}>No of Pills</Text>
                            <Text style={tw`text-lg font-bold`}>Type of Pill</Text>
                            <Text style={tw`text-sm`}>Time to take</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`font-bold text-lg`}>Date</Text>
                    <Text>Time</Text>
                    <View style={tw`mt-3`}>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={tw`mt-3 mb-5`}>
                <Text style={tw`font-bold text-lg`}>Did you take your medication?</Text>
                <View style={tw`flex-row`}>
                    <TouchableOpacity>
                        <View style={tw`rounded-lg border border-green-500 px-6 py-1.5`}>
                        <Text>Yes, I took it</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={tw` mx-3 rounded-lg border border-green-500 px-6 py-1.5`}>
                            <Text>No, I did not take it</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={tw`border-b-2 border-gray-500`}></View>

            <View style={tw`mt-3 flex-row justify-between`}>
                <Text style={tw`font-bold text-lg`}>November 2023</Text>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`text-lg mr-2`}>This Month</Text>
                    <Entypo name="dot-single" size={30} color="green" />
                    <Text style={tw`font-bold text-lg`}>52.49%</Text>
                </View>
            </View>

            <View style={tw`mt-3 p-5`}>
                <View style={tw``}>
                    <View style={tw`bg-green-200 border border-green-200 w-8 h-8`}></View>
                    <View style={tw`bg-green-200 border border-green-200 w-8 h-8 my-2`}></View>
                    <View style={tw`bg-green-200 border border-green-200 w-8 h-8`}></View>
                    <View style={tw`bg-green-200 border border-green-200 w-8 h-8 my-2`}></View>
                    <View style={tw`bg-green-200 border border-green-200 w-8 h-8`}></View>
                    <View style={tw`bg-green-200 border border-green-200 w-8 h-8`}></View>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default reminder