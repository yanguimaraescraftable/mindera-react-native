import React from 'react';
import { ScreenView } from './screen-container.styles';
import { StatusBar, Platform } from "react-native"


interface IScreenContainer {
    children: React.ReactNode
}

const ScreenContainer: React.FC<IScreenContainer> = (props) => {
    const {children} = props
    return (
        <ScreenView statusBarSpacing={Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0}>
            {children}
        </ScreenView>
    );
}

export default ScreenContainer;