import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import tw from 'twrnc'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const reminder = () => {
    return (
        <View style={tw`mt-10 p-5`}>
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
            <View style={tw`mt-3`}>
                <Text style={tw`font-bold text-lg`}>Did you take your medication?</Text>
                <View style={tw`flex-row`}>
                    <TouchableOpacity>
                        <Text>Yes, I took it</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>No, I did not take it</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`mt-2 mb-3`}>
                    <Text style={tw`font-bold text-lg`}>Yaay! you are on time!</Text>
                    <Text>you turned off this reminder at 08:03 AM</Text>
                </View>
            </View>
            <View style={tw`border-b-2 border-gray-500`}></View>

            <View style={tw`mt-3 flex-row justify-between`}>
                <Text style={tw`font-bold text-lg`}>November 2023</Text>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`text-lg mr-2`}>This Month</Text>
                    <Text style={tw`font-bold text-lg`}>52.49%</Text>
                </View>
            </View>

            <View style={tw`mt-3 p-5 border-2 bg-green-200`}>
                <View style={tw`grid-cols-6`}>
                    <View><Text>1</Text></View>
                    <View><Text>2</Text></View>
                    <View><Text>3</Text></View>
                    <View><Text>4</Text></View>
                    <View><Text>5</Text></View>
                    <View><Text>6</Text></View>
                    <View><Text>7</Text></View>
                </View>
            </View>
            
        </View>
    )
}

export default reminder