import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import MedicsLogo from '../assets/medicslogo.png'
import tw from 'twrnc'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import axios from "axios";
import Toast from "react-native-toast-message";

const register = () => {

    const router = useRouter()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
          const response = await axios.post('https://klusterhon.onrender.com/auth/signup', {
            firstName,
            lastName,
            email,
            phone,
            password,
          });
          if (response.data.success) {
            Toast.show({ 
                type: 'success', 
                text1: "User Created Successfully", 
            })
            router.replace('/login');
          }
          
          console.log('Registration successful:', response.data);
        } catch (error) {
          if (error.response) {
            console.error('Registration failed:', error.response.data);
          } else if (error.request) {
            console.error('No response received during registration');
          } else {
            console.error('Error during registration:', error.message);
          }
        } finally{
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setPhone('')
        }
      
      };

    return (
        <View style={tw`p-5`}>
            <ScrollView>
            <View style={tw`flex justify-center items-center`}>
                <Image source={MedicsLogo} />
            </View>
            <View style={tw`mt-5`}>
                <Text style={tw`font-bold`}>SIGN UP</Text>
                <Text>Fill in your details to create an acconut</Text>
            </View>

            <View style={tw`grid gap-2 mb-5`}>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Firstname</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500`} 
                        placeholder="First Name"
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Lastname</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500`} 
                        placeholder="Last Name"
                        onChangeText={(text) => setLastName(text)}
                        value={lastName} 
                    />
                </View>
                <View style={tw`mt-3`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Email</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="email@gmail.com"
                        onChangeText={(text) => setEmail(text)}
                        value={email} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Number</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="735 986 5433"
                        onChangeText={(text) => setPhone(text)}
                        value={phone} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Password</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Enter Password Here"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={tw`items-center justify-center rounded-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>
                        <Text style={tw`text-white text-[15px] text-center`}>
                            SIGN UP
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`font-bold`}>Don't have an account</Text>
                    <Link href='/login'>
                        <Text style={tw`font-bold text-green-500 underline`}>Sign In</Text>
                    </Link>
                </View>

                <View style={styles.container}>
                    <View style={styles.blueBox}></View>
                    <Text style={tw`text-sm`}>OR</Text>
                    <View style={styles.grayBox}></View>
                </View>

                <View>
                    <Text style={tw`text-center`}>Connect using the following</Text>
                </View>
                
                <View style={tw`mt-4 flex-row justify-center`}>
                    <View style={tw`rounded-full`}>
                        <Entypo name="facebook" size={35} color="black" />
                    </View>
                    <View style={tw`mx-3`}>
                        <AntDesign name="twitter" size={35} color="black" />
                    </View>
                    <AntDesign name="google" size={35} color="black" />
                    <View style={tw`mx-3`}>
                        <AntDesign name="apple1" size={35} color="black" />
                    </View>
                </View>

            </View>
            <Toast />
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: 100,
      paddingTop: 20
    },
    blueBox: {
      width: '45%',
      alignItems: 'center',
      borderBottomWidth: 4,
      borderBottomColor: 'gray',
    },
    grayBox: {
      width: '45%',
      alignItems: 'center',
      borderBottomWidth: 4,
      borderBottomColor: 'gray',
    },
  });

export default register