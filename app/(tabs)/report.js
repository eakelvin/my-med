import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons';

const Report = () => {
    return (
        <View style={tw`p-5`}>
            <View style={tw`flex-row justify-between`}>
                <View>
                    <Text style={tw`font-bold text-lg`}>Report</Text>
                    <Text>An overall view of your medical reports so far</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={tw`rounded-none focus:outline-none hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 border border-green-500`}>
                            <Text style={tw`text-green-500 text-[15px] text-center`}>
                                Share <FontAwesome name="share" size={24} color="black" />
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={tw`font-bold text-lg`}>Overall Visit</Text>
                <View style={tw`p-5 border-2 border-slate-400 rounded-xl`}>
                    <Text>NUmber of Visits</Text>
                </View>
            </View>
            <View style={tw`mt-2`}>
                <Text style={tw`font-bold text-lg`}>Medication Timing</Text>
                <View style={tw`p-5 border-2 border-slate-400 rounded-xl`}>
                    <Text>DIV//Visits</Text>
                </View>
            </View>
            <View style={tw`mt-2`}>
                <Text style={tw`font-bold text-lg`}>Medication</Text>
                <View style={tw`p-5 border-2 border-slate-400 rounded-xl`}>
                    <Text>DIV//Visits</Text>
                </View>
            </View>

           
        </View>
    )
}

export default Report