import React from 'react';
import { ButtonContainer, ButtonDisclaimer, ButtonLabel } from './button.styles';

interface IButton {
    onPress(): void
    label: string
    buttonDisclaimer?: string
}

const Button: React.FC<IButton> = (props) => {
    const {onPress, label, buttonDisclaimer} = props
    return (
        <>  
            {buttonDisclaimer && (
                <ButtonDisclaimer>{buttonDisclaimer}</ButtonDisclaimer>
            )}
            <ButtonContainer onPress={onPress}>
                <ButtonLabel>{label}</ButtonLabel>
            </ButtonContainer>
        </>
    );
}

export default Button;