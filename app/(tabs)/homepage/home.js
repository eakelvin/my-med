import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Pill from './covid_vaccine-protection-medicine-pill.png'
import { Link, useRouter } from "expo-router";

const home = () => {
    const router = useRouter()
    
    return (
        <View style={tw`p-5`}>
            <View style={tw`flex-row justify-between`}>
                <View style={tw`flex-row`}>
                    <Image 
                        style={tw`w-15 h-15 mx-auto rounded-full dark:bg-gray-500 aspect-square`}
                        source={'https://source.unsplash.com/150x150/?portrait?3'} 
                    />

                    <View style={tw`ml-2 justify-center`}>
                        <View>
                            <Text style={tw`text-2xl font-semibold`}>Leroy Jenkins</Text>
                            <Text style={tw`text-sm dark:text-gray-400`}>Country-Gender</Text>
                        </View>
                    </View>
                </View>

                <View style={tw`mt-3`}>
                    <Ionicons name="notifications-circle" size={40} color="black" />
                </View>
            </View>

            <View style={tw`mt-10 flex-row justify-between`}>
                <Text style={tw`font-bold text-lg`}>Upcoming Schedule</Text>
                <TouchableOpacity onPress={() => router.push('/schedule')}>
                    <Text style={tw`underline text-green-500 font-bold`}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={tw`mt-2 p-5 bg-green-500 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800`}>
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
                <View style={tw`p-5`}>
                    <Text>Date</Text>
                    <Text style={tw`mt-1`}>Time</Text>
                </View>
            </View>

            <View style={tw`mt-20 items-center`}>
                <TouchableOpacity onPress={() => router.push('/homepage/reminder')}>
                    <Image source={Pill} />
                </TouchableOpacity>
                <Text>Enter medication details and set reminder</Text>
            </View>

            <View style={tw`mt-20`}>
                <TouchableOpacity onPress={() => router.push('/homepage/add_medicine')}>
                    <View style={tw`items-center justify-center rounded-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>
                    <Text style={tw`text-white text-[15px] text-center`}>
                        ADD MEDICINE
                    </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <Link href={'/login'} replace asChild>
                    <Button title="Logout" />
                </Link>
            </View>
            
        </View>
    )
}

export default home