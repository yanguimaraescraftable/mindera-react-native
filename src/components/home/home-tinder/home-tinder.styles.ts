import styled from 'styled-components/native';

export const HomeTinderContainer = styled.View`
    flex: 1;
    flex-direction: column;
    display: flex;
    padding: 15px;
`;


export const HomeTinderImageContainer = styled.View`
    width: 100%;
    height: 60%;
    margin-bottom: 40px;
    border-radius: 20px;
    overflow: hidden;
    elevation: 3;
`

export const TinderImage = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const TinderButtonsRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 170px;
    justify-content: space-between;
    margin: auto;
    margin-top: 0;
`

export const TinderButtonItem = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    elevation: 4;
    background-color: ${props => props.theme.colors.greyscale.white};
    
`