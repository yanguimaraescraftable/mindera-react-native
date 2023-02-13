import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { BottomNavigation, ScreenContainer } from "../../components/common"
import { NavigationProps } from '../../types'
import { useNavigation } from '@react-navigation/native';
import { HomeContainer } from './home.styles'
import {HomeFavorites, HomeTabSelector, HomeTinder} from '../../components/home'


const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProps>();
    const [isTinderSelected, setIsTinderSelected] = useState<boolean>(true)
    const userStore = useSelector((state: RootState) => state.userStore)
    const {user} = userStore
    const dispatch = useDispatch()

    return (
        <ScreenContainer>
            <HomeContainer>
                <HomeTabSelector 
                    tinderSelected={isTinderSelected} 
                    setTinderSelected={setIsTinderSelected}
                />{isTinderSelected ? (
                    <HomeTinder/>
                ) : (
                    <HomeFavorites/>
                )}
                <BottomNavigation/>
            </HomeContainer>
        </ScreenContainer>
    )
}


export default HomeScreen