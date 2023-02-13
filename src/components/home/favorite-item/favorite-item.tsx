import React, {useState} from 'react';
import { IFavorite } from '../../../types';
import { FavImage, FavoriteDelete, FavoriteImageContainer, FavoriteItemContainer, FavoriteItemText, TextContent } from './favorite-item.styles';
import { Feather } from '@expo/vector-icons'; 
import api from '../../../api/api';

interface IFavoriteItem{
    favoriteItem: IFavorite
    getFavorites(): void
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const FavoriteItem: React.FC<IFavoriteItem> = (props) => {
    const {favoriteItem, getFavorites, loading, setLoading} = props
    const date = new Date(favoriteItem.created_at)
    
    const deleteFavorite = () => {
        if(loading){
            return null
        }

        setLoading(true)
        api.delete(`/favourites/${favoriteItem.id}`)
        .catch(err => {
            console.log(err)
        }).finally(
            () => {
                setLoading(false)
                getFavorites()
            }
        )
    }

    return (
        <FavoriteItemContainer>
            <FavoriteImageContainer>
                <FavImage source={{uri: favoriteItem.image.url}}/>
            </FavoriteImageContainer>
            <FavoriteItemText>
                <TextContent>
                    favorited at: {date.toLocaleString('en-US')}
                </TextContent>
                <TextContent>
                    image id: {favoriteItem.image_id}
                </TextContent>
                <TextContent>
                    user id: {favoriteItem.user_id}
                </TextContent>
            </FavoriteItemText>
            <FavoriteDelete onPress={() => deleteFavorite()}>
                <Feather name="trash" size={24} color="#e16359" />
            </FavoriteDelete>
        </FavoriteItemContainer>
    );
}

export default FavoriteItem;