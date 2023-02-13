import React, {useState, useEffect} from 'react';
import { HomeTinderContainer, HomeTinderImageContainer, TinderButtonItem, TinderButtonsRow, TinderImage } from './home-tinder.styles';
import api from '../../../api/api'
import { ICat } from '../../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { LoadingScreen } from '../../common';
import TinderCard from 'react-tinder-card'


const HomeTinder: React.FC = () => {
    const [currentCat, setCurrentCat] = useState<ICat>()
    const [isLoadingCat, setIsLoadingCat] = useState<boolean>(false)
    const [isFavLoading, setIsFavLoading] = useState<boolean>(false)
    const userStore = useSelector((state: RootState) => state.userStore)
    const {user} = userStore
    
    const getCat = () => {
        if(isLoadingCat){
            return null
        }

        setIsLoadingCat(true)
        api.get('/images/search')
        .then(response => {
            setCurrentCat(response.data[0])
        })
        .catch(err => {
            console.log(err)
        })
        .finally(
            () => setIsLoadingCat(false)
        ) 
    }

    const onReject = () => {
        setCurrentCat(undefined)
        getCat()
    }

    const onLike = () => {
        if(isFavLoading){
            return null
        }

        setIsFavLoading(true)
        api.post('/favourites', {
            image_id: currentCat?.id,
            sub_id: user.sub_id})
        .catch(err => {
            console.log(err)
        }).finally(
            () => {
                setIsFavLoading(false)
                getCat()
            }
        )
    }

    const onSwipe = (dir: string) => {
        if(dir === 'left'){
            onReject()
        }

        if (dir === 'right'){
            onLike()
        }
    }

    useEffect(() => {
        getCat()
    }, [])

    return (
        <HomeTinderContainer>
            {isLoadingCat ? (
                <LoadingScreen/>
            ) : (
                <>
                    <TinderCard onSwipe={(dir) => onSwipe(dir)} preventSwipe={['up', 'down']}>
                        <HomeTinderImageContainer>
                                <TinderImage source={{uri: currentCat?.url}}/>
                        </HomeTinderImageContainer>
                    </TinderCard>
                    <TinderButtonsRow>
                        <TinderButtonItem onPress={() => onReject()}>
                            <FontAwesome5 name="times" size={28} color="#e16359" />
                        </TinderButtonItem>
                        <TinderButtonItem onPress={() => onLike()}>
                            <AntDesign name="heart" size={32} color="#6bd88e" />
                        </TinderButtonItem>
                    </TinderButtonsRow>
                </>
            )}
        </HomeTinderContainer>
    )
}

export default HomeTinder;