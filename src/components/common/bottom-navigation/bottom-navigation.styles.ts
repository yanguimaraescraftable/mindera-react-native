import styled from 'styled-components/native';

export const BottomNavigationContainer = styled.View`
    flex-direction: row;
    width: 100%;
    bottom: 30px;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const ButtonsContainer = styled.View`
    elevation: 3;
    padding: 10px 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.greyscale.white};
`

export const BottomNavigationItem = styled.TouchableOpacity`
    margin-left: 15px;
    margin-right: 15px;
`