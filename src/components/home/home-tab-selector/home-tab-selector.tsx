import { Action, Dispatch } from '@reduxjs/toolkit';
import React, { SetStateAction } from 'react';
import { View } from 'react-native';
import { HomeTabSelectorContainer, TabButtonItem, TabButtonsContainer } from './home-tab-selector.styles';
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

interface IHomeTabSelector {
    tinderSelected: boolean
    setTinderSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const checkTabActive = (tinderTab: boolean) => {
    if(tinderTab){
        return "#EC537E"
    } else {
        return "#bfbfc0"
    }
}

const HomeTabSelector: React.FC<IHomeTabSelector> = (props) => {
    const {tinderSelected, setTinderSelected} = props

    return (
        <HomeTabSelectorContainer>
            <TabButtonsContainer>
                <TabButtonItem isActive={tinderSelected} onPress={() => setTinderSelected(true)}>
                    <Fontisto name="tinder" size={16} color={checkTabActive(tinderSelected)} />
                </TabButtonItem>
                <TabButtonItem isActive={!tinderSelected} onPress={() => setTinderSelected(false)}>
                    <AntDesign name="star" size={16} color={checkTabActive(!tinderSelected)} />
                </TabButtonItem>
            </TabButtonsContainer>
        </HomeTabSelectorContainer>
    )
}

export default HomeTabSelector;