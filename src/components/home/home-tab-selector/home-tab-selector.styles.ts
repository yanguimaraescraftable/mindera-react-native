import styled from 'styled-components/native';

export const HomeTabSelectorContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
`;


export const TabButtonsContainer = styled.View`
    elevation: 2;
    padding: 2px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.greyscale.light};
    flex-direction: row;
    width: 100px;
    overflow: hidden;
`

export const TabButtonItem = styled.TouchableOpacity<{isActive: boolean}>`
    background-color: ${props => props.isActive ? props.theme.colors.greyscale.white : props.theme.colors.greyscale.light};
    padding: 5px;
    border-radius: 20px;
    width: 50%;
    align-items: center;
    justify-content: center;
`