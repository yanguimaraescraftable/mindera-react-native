import styled from 'styled-components/native';

export const ChatContainer = styled.View`
    flex: 1;
    margin-bottom: 80px;
`;


export const ChatBg = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const ChatContent = styled.View`
    padding: 15px;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
`

export const FriendMessage = styled.Text`
    background-color: ${props => props.theme.colors.greyscale.light};
    display: flex;
    justify-content: flex-start;
    padding: 15px;
    border-radius: 12px;
    width: 200px;
    margin-bottom: 20px;
`

export const MyMessage = styled.Text`
    background-color: #98f2c4;
    display: flex;
    justify-content: flex-start;
    padding: 15px;
    border-radius: 12px;
    width: 200px;
    margin-left: auto;
`