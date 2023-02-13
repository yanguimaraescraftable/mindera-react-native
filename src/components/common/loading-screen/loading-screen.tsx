import React, {useState, useEffect} from 'react';
import {Easing, View} from 'react-native'
import { LoadingContainer} from './loading-screen.styles';
import {Animated} from 'react-native';


let spinValue = new Animated.Value(0);

Animated.timing(
    spinValue,
  {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear, 
    useNativeDriver: true 
  }
).start()

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: [1, 1.5]
})



const LoadingScreen: React.FC = (props) => {
    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.5],
    });
    
    useEffect(() => {
        Animated.loop(
          Animated.timing(spinAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ).start();
    });


    return (
        <LoadingContainer>
            <View>
                <Animated.Image
                    style={{height: 100, width: 100, transform: [{scale: spin}]}}
                    source={require('../../../assets/images/minderaicon.png')}
                />
            </View>
        </LoadingContainer>
    )
}

export default LoadingScreen;