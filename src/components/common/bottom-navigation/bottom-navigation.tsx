import React from 'react';
import { BottomNavigationContainer, BottomNavigationItem, ButtonsContainer } from './bottom-navigation.styles';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../types';

const BottomNavigation: React.FC = () => {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute();

    const checkRouteActive = (currentRoute: string) => {
        if(route.name === currentRoute){
            return "#EC537E"
        } else {
            return "#434141"
        }
    }
    return (
        <BottomNavigationContainer>
            <ButtonsContainer>
                <BottomNavigationItem onPress={() => navigation.navigate('Home')}>
                    <FontAwesome name="paw" size={18} color={checkRouteActive('Home')} />
                </BottomNavigationItem>
                <BottomNavigationItem onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name="chatbubble-outline" size={18} color={checkRouteActive('Chat')} />
                </BottomNavigationItem>
                <BottomNavigationItem onPress={() => navigation.navigate('Profile')}>
                    <AntDesign name="user" size={18} color={checkRouteActive('Profile')} />
                </BottomNavigationItem>
            </ButtonsContainer>
        </BottomNavigationContainer>
    )
}

export default BottomNavigation;