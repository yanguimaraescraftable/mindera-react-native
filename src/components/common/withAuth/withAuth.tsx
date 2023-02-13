import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const withAuth = (Component: any) => (props: { navigation: any; }) => {
    const userStore = useSelector((state: RootState) => state.userStore)
    const {navigation} = props
    const {user} = userStore
    
    useEffect(() => {
        if(user?.token?.length > 0){
            navigation.navigate('Home')
        } else{
            navigation.navigate('Login')
        }
    }, [user])

    return <Component/>;
}

export default withAuth;