import styled from 'styled-components/native';

export const FavoriteItemContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.greyscale.medium};
    border-left-color: ${props => props.theme.colors.greyscale.light};
    border-right-color: ${props => props.theme.colors.greyscale.light};
`;

export const FavoriteImageContainer = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 40px;
    overflow: hidden;
    border: 4px solid ${props => props.theme.colors.brand};
    margin-right: 20px;
`

export const FavImage = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const FavoriteItemText = styled.View``

export const TextContent = styled.Text``


export const FavoriteDelete = styled.TouchableOpacity`
    width: 70px;
    justify-content: flex-end;
    flex-direction: row;
`