import React, {useState, useEffect} from 'react';
import { ErrorMessage, InputContainer, InputLabel, TextInput, VisibilityButton, VisibilityText } from './input.styles';

interface IInput {
    onBlur: any,
    onChange: any,
    value: string,
    label: string,
    errorMessage?: string
    password?: boolean
}

const Input: React.FC<IInput> = (props) => {
    const {errorMessage, label, onBlur, onChange, password, value} = props
    const [hidePassword, setHidePassword] = useState<Boolean>(password || false);

    useEffect(() => {
        if(password){
            setHidePassword(password)
        }
    }, [password])

    return (
        <InputContainer>
            <InputLabel hasError={errorMessage}>{label}</InputLabel>
            <TextInput 
                onChangeText={onChange}
                onBlur={onBlur}
                value={value} 
                secureTextEntry={hidePassword} 
                hasError={errorMessage}
            />
            {errorMessage && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
            {password && (
                <VisibilityButton onPress={() => setHidePassword(!hidePassword)}>
                    <VisibilityText>{hidePassword ? 'Show' : 'Hide'}</VisibilityText>
                </VisibilityButton>
            )}
        </InputContainer>
    );
}

export default Input;