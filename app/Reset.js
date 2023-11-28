import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import tw from 'twrnc'
import axios from "axios";
import { useRouter } from "expo-router";

const Reset = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://klusterhon.onrender.com/auth/forgotpassword', { email });
        } catch (error) {
            console.error('Error resetting password:', error.message);
        }
    }

    return (
        <View style={tw`px-3 py-6`}>
            <ScrollView>
                <View>
                    <Text style={tw`font-bold font-xl`}>Forgot Password?</Text>
                    <Text style={tw`mt-2`}>We'll email you a code to reset your password.</Text>
                </View>
                <View style={tw`mt-5`}>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Enter Email Address"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        required 
                    />
                </View>
                <View style={tw`mt-5`}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={tw`items-center justify-center rounded-none focus:outline-none text-white bg-slate-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-green-700 dark:focus:ring-slate-800`}>
                        <Text style={tw`text-white text-[15px] text-center`}>
                            RESET
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Reset