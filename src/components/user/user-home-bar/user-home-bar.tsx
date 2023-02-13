import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { AppTitle, BarContainer, ProfileImage, UserImage } from './user-home-bar.styles';

interface IUserHomeBar {
    profileClick(): void
}

const UserHomeBar: React.FC<IUserHomeBar> = (props) => {
    const {profileClick} = props
    const userStore = useSelector((state: RootState) => state.userStore)
    const {user} = userStore
    const dispatch = useDispatch()

    return (
        <BarContainer>
            <AppTitle>Mindera Native</AppTitle>
            <UserImage onPress={() => profileClick()}>
                <ProfileImage source={{uri: user.image}}/>
            </UserImage>
        </BarContainer>
    );
}

export default UserHomeBar;