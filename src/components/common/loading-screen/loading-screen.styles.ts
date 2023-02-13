import styled from 'styled-components/native';
import {Animated} from 'react-native'

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;


export const LoadingText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme.colors.greyscale.medium};
    text-align: center;
    width: 75%;
`

export const SpinnerContainer = styled(Animated.Image)`
    width: 100px;
    height: 100px;
`