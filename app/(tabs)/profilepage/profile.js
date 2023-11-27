import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import tw from 'twrnc'
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const profile = () => {
    const router = useRouter()
    
    return (
        <View style={tw`p-5`}>
        <ScrollView>
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
                    <View style={tw`border border-green-500 px-6 py-2 rounded-lg`}>
                        <TouchableOpacity onPress={() => router.push('profilepage/edit-profile')}>
                            <Text>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={tw`mt-2`}>
                <View style={tw`border border-b-3 border-slate-300`}>
                    <Text style={tw`text-mute p-2`}>Medical Details</Text>
                </View>
                <View style={tw`p-5`}>
                    <View style={tw`flex-row justify-between`}>
                        <View style={tw`flex-row`}>
                            <Fontisto name="blood-test" size={24} color="black" />
                            <Text style={tw`text-md font-bold ml-2`}>Blood Type</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>O+</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between my-3`}>
                        <View style={tw`flex-row`}>
                            <FontAwesome5 name="disease" size={24} color="black" />
                            <Text style={tw`text-md font-bold ml-2`}>Chronic Disease</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>Diabetes</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between`}>
                        <View style={tw`flex-row`}>
                            <MaterialCommunityIcons name="emoticon-sick" size={24} color="black" />
                            <Text style={tw`text-md font-bold ml-2`}>Epilepsy</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>NO</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between my-3`}>
                        <View style={tw`flex-row`}>
                            <AntDesign name="heart" size={24} color="black" />
                            <Text style={tw`text-md font-bold ml-2`}>Organ Donor</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>YES</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between`}>
                        <View style={tw`flex-row`}>
                            <FontAwesome5 name="weight" size={24} color="black" />
                            <Text style={tw`text-md font-bold ml-2`}>Weight</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>135 lb</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between my-3`}>
                        <View style={tw`flex-row`}>
                            <MaterialCommunityIcons name="human-male-height-variant" size={24} color="black" />
                            <Text style={tw`text-md font-bold ml-2`}>Height</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>5ft, 9in</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View style={tw`mt-2 border-b-2 border-slate-300`}>
                <Text style={tw`border border-slate-200 border-2-4 border-t-2 text-mute p-2`}>Conditions & Allergies</Text>
                <View style={tw`p-2`}>
                    <Text style={tw`text-green-500 mt-2`}>Medical Conditions</Text>
                    <Text style={tw`mt-1`}>High blood Pressure</Text>

                    <Text style={tw`text-green-500 mt-5`}>Allergies & Reactions</Text>
                    <Text style={tw`mt-1 mb-3`}>Penicillin - Severe skin rash</Text>
                </View>
            </View>

            <View style={tw`p-5 text-center items-center`}>
                <Text style={tw`text-mute`}>
                    Update your medical details frequently as it helps keeps
                    tracks of your health conditions.
                </Text>
                <View style={tw`mt-3 mb-3`}>
                    <TouchableOpacity onPress={() => router.push('profilepage/update-meds')}>
                        <View style={tw`bg-green-500 px-10 py-3 rounded-lg`}>
                            <Text>Update</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={tw`my-5 text-medium`}>Last updated Nov 27, 2023 at 8:37AM</Text>
            </View>

        </ScrollView>
        </View>
    )
}

export default profile