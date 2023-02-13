import styled from 'styled-components/native';

export const ScreenView = styled.SafeAreaView<{statusBarSpacing?: string}>`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-top: ${props => props.statusBarSpacing || 0};
`;
