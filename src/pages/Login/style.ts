import styled, { css } from 'styled-components/native';

export const ImageDetails = styled.Image`
    height: 275px;
    width: 316px;
`;

export const BtnLogIn = styled.TouchableOpacity`
    width: 300px;
    height: 53px;
    left: 0%;
    top: 10px;
    background-color: rgb(34, 63, 253);
    border-radius: 23px;
    border: 1px solid rgb(34, 63, 253);
    padding-bottom: 5px;
`;

export const DivInputs = styled.View`
    top: 100px;
    justify-content: center;
    align-items: center;
`;

export const SignInSign = styled.Text`
    font-size: 50px;
    color: black;
    font-family: 'Segoe UI';
    font-weight: bold;
`;

export const Letreiro = styled.Text`
    position: absolute;
    top: 143px;
    padding-left: 15px;
    font-size: 35px;
    text-align-last: center;
    color: white;
    width: 150px;
`;

export const TxtButton = styled.Text`
    color: white;
    text-align: left;
    padding: 15px;
`;

interface IColor {
    isValid: boolean;
};

export const Input = styled.TextInput<IColor>`
    width: 200px;
    height: 25px;
    border-color: rgb(34, 63, 253);
    font-size: 19px;
    border-Bottom-Width: 1px;
    ${props => !props.isValid && css`
        border-color: rgb(255, 81, 81);
        font-weight: bold;
        background-color: rgb(254, 205, 205);`
    }
`;

