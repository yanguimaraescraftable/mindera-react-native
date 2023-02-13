import styled from 'styled-components/native';

export const InputContainer = styled.View`
    width: 100%;
    margin-bottom: 20px;
    position: relative;
`;

export const InputLabel = styled.Text<{hasError: boolean}>`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${props => props.hasError ? props.theme.colors.negative : props.theme.colors.greyscale.black};
`

export const TextInput = styled.TextInput`
    border: 1px solid;
    padding: 15px;
    font-size: 18px;
    border-color: ${props => props.hasError ? props.theme.colors.negative : props.theme.colors.greyscale.medium};
    border-radius: 4px;
`

export const ErrorMessage = styled.Text`
    color: ${props => props.theme.colors.negative};
    font-size: 14px;
    font-weight: bold;
`


export const VisibilityButton = styled.TouchableOpacity`
    position: absolute;
    top: 50px;
    right: 20px;
`

export const VisibilityText = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
`