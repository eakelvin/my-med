import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import tw from 'twrnc'

const add_medicine = () => {
    const [selected, setSelected] = useState("")

    const data = [
        {key:'1', value:'Mobiles'},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
    ]

    return (
        <View style={tw`p-5 mt-5`}>
            <View>
                <Text style={tw`font-bold text-xl`}>Add Medicine</Text>
                <Text>Alarm notification is automatic when Scheduling reminders</Text>
            </View>
            <View style={tw`mt-5`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Name</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Input medicine name here" 
                    />
            </View>
            
            <View style={tw`mt-3 flex-row items-center`}>
                <View style={tw`flex-row`}>
                    <TouchableOpacity style={tw`w-6 h-6 border-2 rounded-xl items-center justify-center`}>
                        <View style={tw`h-4 w-4 rounded-lg bg-green-500`} />
                    </TouchableOpacity>
                    <Text style={tw`font-bold text-lg ml-2`}>Pill</Text>
                </View>

                <View style={tw`flex-row mx-10`}>
                    <TouchableOpacity style={tw`w-6 h-6 border-2 rounded-xl items-center justify-center`}>
                        <View style={tw`h-4 w-4 rounded-lg bg-green-500`} />
                    </TouchableOpacity>
                    <Text style={tw`font-bold text-lg ml-2`}>Syrup</Text>
                </View>
            </View>

            <View style={tw`mt-4`}>
                <Text style={tw`font-bold text-lg`}>Dosage and Duration</Text>
                <Text>Select the amount of pills to be taken and how long</Text>
            </View>

            <View style={tw`mt-3 flex-row`}>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                />
                <View style={tw`mx-10`}>
                    <SelectList 
                        setSelected={(val) => setSelected(val)} 
                        data={data} 
                        save="value"
                    />
                </View>
            </View>

            <View style={tw`mt-4`}>
                <Text style={tw`font-bold text-lg`}>Days Interval</Text>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                />
            </View>

            <View style={tw`mt-4`}>
                <Text style={tw`font-bold text-lg`}>Date and Time</Text>
                <Text>Add when you need to start taking your medicines</Text>

                <View style={tw`mt-3 flex-row`}>
                    <SelectList 
                        setSelected={(val) => setSelected(val)} 
                        data={data} 
                        save="value"
                    />
                    <View style={tw`mx-10`}>
                        <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={data} 
                            save="value"
                        />
                    </View>
                </View>

                <View style={tw`mt-3 flex-row`}>
                    <SelectList 
                        setSelected={(val) => setSelected(val)} 
                        data={data} 
                        save="value"
                    />
                    <View style={tw`mx-10`}>
                        <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={data} 
                            save="value"
                        />
                    </View>
                </View>
            </View>

            <View style={tw`mt-5`}>
                    <TouchableOpacity>
                        <View style={tw`rounded-none focus:outline-none hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border border-green-500`}>
                        <Text style={tw`text-green-500 text-[15px] text-center`}>
                            ADD TIME
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <Text>Need to take medicines via time interval? add more time</Text>
            </View>

            <View style={tw`mt-4`}>
                <Text style={tw`font-bold text-lg`}>Food & Pill</Text>
                <Text>Need to take medicines via time interval? add more time</Text>

                <View style={tw`mt-3`}>
                    <View style={tw`flex-row`}>
                        <TouchableOpacity style={tw`w-6 h-6 border-2 rounded-xl items-center justify-center`}>
                            <View style={tw`h-4 w-4 rounded-lg bg-green-500`} />
                        </TouchableOpacity>
                        <Text style={tw`font-bold text-lg ml-2`}>Pill</Text>
                    </View>

                    <View style={tw`flex-row`}>
                        <TouchableOpacity style={tw`w-6 h-6 border-2 rounded-xl items-center justify-center`}>
                            <View style={tw`h-4 w-4 rounded-lg bg-green-500`} />
                        </TouchableOpacity>
                        <Text style={tw`font-bold text-lg ml-2`}>Syrup</Text>
                    </View>

                    <View style={tw`flex-row`}>
                        <TouchableOpacity style={tw`w-6 h-6 border-2 rounded-xl items-center justify-center`}>
                            <View style={tw`h-4 w-4 rounded-lg bg-green-500`} />
                        </TouchableOpacity>
                        <Text style={tw`font-bold text-lg ml-2`}>Syrup</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity>
                    <View style={tw`items-center justify-center rounded-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>
                    <Text style={tw`text-white text-[15px] text-center`}>
                        SCHEDULE
                    </Text>
                    </View>
            </TouchableOpacity>

        </View>
    )
}

export default add_medicine