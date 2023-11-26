import { Link, useRouter } from "expo-router";
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import Frame from '../assets/frame37156.png'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

const onboarding1 = () => {
    const router = useRouter()

    return (
        <View style={tw`mt-18`}>
            <ScrollView>
            <View style={tw`flex justify-center items-center`}>
                <Image source={Frame} />
            </View>
            <View style={tw`p-5`}>
                <Text style={tw`font-bold text-2xl pb-2`}>Find The Best Service</Text>
                <Text style={tw`text-lg`}>Share your reports to a healthcare
                    provider to help you access them and take
                    adequate suggestions about your health 
                </Text>
               
                <View style={tw`flex-row justify-center mt-8 mb-10`}>
                    <View style={tw`flex w-3 h-3 mx-2 bg-gray-200 rounded-full`}></View>
                    <View style={tw`flex w-3 h-3 bg-gray-200 rounded-full`}></View>
                    <View style={tw`flex w-3 h-3 mx-2 bg-green-500 rounded-full`}></View>
                </View>

                 <View style={tw`pt-5 flex-row`}>
                    <Link href='/onboarding2'>
                        <AntDesign name="back" size={24} color="black" />
                        <Text style={tw `font-bold text-2xl`}>Back</Text>
                    </Link>
                </View>
                
                <View style={tw`mt-2`}>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                        <View style={tw`items-center justify-center rounded-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>
                        <Text style={tw`text-white text-[15px] text-center`}>
                            GET STARTED
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </View>
    )

}

export default onboarding1