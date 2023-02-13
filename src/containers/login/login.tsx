import React, {useState, useEffect} from 'react';
import { Keyboard } from 'react-native';
import {Button, Input, ScreenContainer} from '../../components/common/';
import { ButtonContainer, InputsContainer, LoginContainer, LogoContainer, LogoImage } from './login.styles';
import {useDispatch} from 'react-redux'
import { Formik } from 'formik';
import { updateUser } from '../../store/slices/userSlice';
import withAuth from '../../components/common/withAuth/withAuth';
import axios from 'axios';

const LoginScreen: React.FC = () => {
    const [isKeyboardVisible, setKeyboardVisible] = useState<Boolean>(false);
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [errorDisclaimer, setErrorDisclaimer] = useState<string>('')
    const dispatch = useDispatch()

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
            setKeyboardVisible(true);
          }
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setKeyboardVisible(false);
          }
        );
    
        return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
        };
    }, []);

    const authUser = (values: {username: string, password: string}) => {
        if(isLoading){
            return 
        }
        
        setIsLoading(true)
        axios.post('https://dummyjson.com/auth/login', {
            username: values.username,
            password: values.password
        }).then(
            response => {
                dispatch(updateUser(
                    {...response.data, sub_id: 'minderaCat'}
                ))
            }
        ).catch(
            err => {
                setErrorDisclaimer(err.response.data.message)
            }
        ).finally(
            () => setIsLoading(false)
        )
    }

    return (
        <ScreenContainer>
            <LoginContainer behavior='height'>
                <Formik
                    initialValues={{ username: 'kminchelle', password: '0lelplR' }}
                    onSubmit={values => authUser(values)}
                    validate={(values) => {
                        let errors : Record<string,string> = {}
                        if(!values.username || values.password.length < 3 ){
                            errors.username = 'Username is required'
                        }
                        if(!values.password || values.password.length < 6){
                            errors.password = 'Passsword should have at least 6 characters'
                        }

                        return errors
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors}) => (
                        <>
                            
                            <InputsContainer>
                                {!isKeyboardVisible && (
                                    <LogoContainer>
                                        <LogoImage source={require('../../assets/images/mindera-logo.png')}/>
                                    </LogoContainer>
                                )}
                                <Input
                                    label='Username'
                                    onChange={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    errorMessage={errors.username}
                                />
                                <Input
                                    label='Password'
                                    onBlur={handleBlur('password')}
                                    onChange={handleChange('password')}
                                    value={values.password}
                                    password
                                    errorMessage={errors.password || errorDisclaimer}
                                />
                            </InputsContainer>
                            <ButtonContainer>
                                <Button label="Login" onPress={handleSubmit}/>
                            </ButtonContainer>
                        </>
                    )}
                </Formik>
            </LoginContainer>
        </ScreenContainer>
    );
}

export default withAuth(LoginScreen);