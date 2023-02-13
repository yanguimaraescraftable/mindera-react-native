import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BottomNavigation, ScreenContainer, withAuth } from '../../components/common';
import { RootState } from '../../store/store';
import { BackButton, ProfileButton, ProfileButtonText, ProfileContainer, ProfileHeader, ProfileImage, ProfileImageContainer, UserEmail, UserName } from './profile.styles';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { updateUser } from '../../store/slices/userSlice';
import { NavigationProps } from '../../types';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = (props) => {
    const navigation = useNavigation<NavigationProps>()
    const userStore = useSelector((state: RootState) => state.userStore)
    const {user} = userStore
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(updateUser({}));
        navigation.navigate("Login")
    }

    return (
        <ScreenContainer>
            <ProfileContainer>
                <ProfileHeader>
                    <ProfileImageContainer>
                        <ProfileImage source={{uri: user.image}}/>
                    </ProfileImageContainer>
                    <UserName>{user.firstName} {user.lastName}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                </ProfileHeader>
                <ProfileButton onPress={() => logout()}>
                    <SimpleLineIcons name="logout" size={24}/>
                    <ProfileButtonText> Logout</ProfileButtonText>
                </ProfileButton>
            </ProfileContainer>
            <BottomNavigation/>
        </ScreenContainer>
    )
}

export default ProfileScreen;