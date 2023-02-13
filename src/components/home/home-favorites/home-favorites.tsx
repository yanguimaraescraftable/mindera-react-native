import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import api from '../../../api/api';
import { RootState } from '../../../store/store';
import { IFavorite } from '../../../types';
import { LoadingScreen } from '../../common';
import FavoriteItem from '../favorite-item/favorite-item';
import { HomeFavoritesContainer } from './home-favorites.styles';


const HomeFavorites: React.FC = () => {
    const userStore = useSelector((state: RootState) => state.userStore)
    const {user} = userStore
    const [isFavLoading, setIsFavLoading] = useState<boolean>(false)
    const [favorites, setFavorites] = useState<Array<IFavorite>>()
    const getFavorites = () => {
        if(isFavLoading){
            return null
        }

        setIsFavLoading(true)
        api.get('/favourites', {
            params: {
                sub_id: user.sub_id
            }
        })
        .then(response => {
            setFavorites(response.data)
        }).catch(err => {
            console.log(err)
        }).finally(
            () => setIsFavLoading(false)
        )
    }

    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <HomeFavoritesContainer>
            {isFavLoading ? (
                <LoadingScreen/>
            ) : (
                <>
                {favorites?.map((favoriteItem, index) => {
                    return (
                        <FavoriteItem
                            loading={isFavLoading}
                            setLoading={setIsFavLoading}
                            favoriteItem={favoriteItem} 
                            key={`${favoriteItem.id}-${index}`}
                            getFavorites={getFavorites}
                        />
                    )
                })}
                </>
            )}
        </HomeFavoritesContainer>
    )
}

export default HomeFavorites;