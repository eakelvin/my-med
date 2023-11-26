import { Text, View, Image, Animated } from "react-native";
import { Link } from "expo-router";
import tw from 'twrnc'
import MedicsLogo from '../assets/mymed.PNG'
import { useEffect, useRef } from "react";

export default function splash() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={tw`flex-1 justify-center items-center mt-20`}>
       <Animated.View style={{ opacity: fadeAnim }}>
            <Link href='/onboarding1'>
              <Image 
                source={MedicsLogo} 
                // style={{width: 100, height: 100}} 
              />
            </Link>
        </Animated.View>
    </View>
  );
}

