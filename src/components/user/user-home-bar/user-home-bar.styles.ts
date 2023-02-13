import styled from 'styled-components/native';

export const BarContainer = styled.View`
    padding: 15px;
    background-color: ${props => props.theme.colors.greyscale.medium};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid;
    border-color: ${props => props.theme.colors.greyscale.medium};
    border-bottom-color: ${props => props.theme.colors.brand};
`;

export const UserImage = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #fff;
    overflow: hidden;
    background-color: ${props => props.theme.colors.greyscale.white};
    margin-right: 20px;
`
export const ProfileImage = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const AppTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
`