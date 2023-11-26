import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import tw from 'twrnc'

const profile = () => {
    const router = useRouter()
    
    return (
        <View style={tw`mt-20 p-4`}>
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
                <Text style={tw`border border-slate-200 border-t-2 text-mute p-3`}>Medical Details</Text>
                <View style={tw`p-5`}>
                    <View style={tw`flex-row justify-between`}>
                        <View>
                            <Text>Blood Type</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>O+</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between my-3`}>
                        <View>
                            <Text>Chronic Disease</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>O+</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between`}>
                        <View>
                            <Text>Epilepsy</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>O+</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between my-3`}>
                        <View>
                            <Text>Organ Donor</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>O+</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between`}>
                        <View>
                            <Text>Weight</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>O+</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between my-3`}>
                        <View>
                            <Text>Height</Text>
                        </View>
                        <View>
                            <Text style={tw`text-mute`}>O+</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View style={tw`mt-2 border-b-2 border-slate-300`}>
                <Text style={tw`border border-slate-200 border-2-4 border-t-2 text-mute p-3`}>Conditions & Allergies</Text>
                <View style={tw`p-2`}>
                    <Text style={tw`text-green-500 mt-2`}>Medical Conditions</Text>
                    <Text style={tw`mt-2`}>High blood Pressure</Text>

                    <Text style={tw`text-green-500 mt-5`}>Allergies & Reactions</Text>
                    <Text style={tw`mt-2 mb-3`}>Penicillin - Severe skin rash</Text>
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