import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import tw from 'twrnc'
import MedicsLogo from '../assets/medicslogo.png'

export default function splash() {
  return (
    <View style={tw`flex-1 justify-center items-center p-24`}>
        <Link href='/onboarding1'>
          <Image source={MedicsLogo} />
        </Link>
    </View>
  );
}

