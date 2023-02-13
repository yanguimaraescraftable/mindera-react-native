import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.colors.brand};
  justify-content: flex-start;
`;



export const ProfileImageContainer = styled.View`
    width: 100px;
    height: 100px;
    border: 4px solid ${props => props.theme.colors.brand};
    border-radius: 50px;
    overflow: hidden;
    background-color: ${props => props.theme.colors.greyscale.white};
    margin-bottom: 10px;
`

export const ProfileImage = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const UserName = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

export const UserEmail = styled.Text`
    font-size: 16px;
`

export const ProfileHeader = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.greyscale.white};
    width: 100%;
    padding: 15px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    position: relative;
    margin-bottom: 30px;
`

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 15px;
    left: 15px;
`

export const ProfileButton = styled.TouchableOpacity`
    padding: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    flex-direction: row;
`

export const ProfileButtonText = styled.Text`
    color: ${props => props.theme.colors.greyscale.black};
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
`