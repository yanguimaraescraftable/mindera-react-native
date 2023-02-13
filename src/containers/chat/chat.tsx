import React from 'react';
import { Text } from 'react-native';
import { BottomNavigation, ScreenContainer } from '../../components/common';
import { ChatBg, ChatContainer, ChatContent, FriendMessage, MyMessage } from './chat.styles';

const ChatScreen: React.FC = () => {
    return (
        <ScreenContainer>
            <ChatContainer>
                <ChatBg source={require('../../assets/images/chat-bg.jpg')}/>
                <ChatContent>
                    <FriendMessage>They sent a message and they want a chat</FriendMessage>
                    <MyMessage>So tell them I would need more time</MyMessage>
                </ChatContent>
            </ChatContainer>
            <BottomNavigation/>
        </ScreenContainer>
    )
}

export default ChatScreen;