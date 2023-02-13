import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    padding: 20px;
    border: 1px solid ${props => props.theme.colors.brand};
    background-color: ${props => props.theme.colors.brand};
    border-radius: 8px;
    width: 100%;
`;


export const ButtonLabel = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.colors.greyscale.black};
  font-weight: bold;
`

export const ButtonDisclaimer = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.negative};
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
`