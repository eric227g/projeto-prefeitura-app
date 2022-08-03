import styled, { css } from 'styled-components/native';

export const BackgroundPurple = styled.Image`
  margin-left: auto;
  width: 193px;
  height: 263px;
`
export const BackgroundBlue = styled.Image`
  margin-left: auto;
  margin-top: -263px;
  width: 141px;
  height: 235px;
`
export const Prefile = styled.Text`
  font-size: 48px;
  font-weight: bold;
  margin-top: -100px;
  margin-left: 25px;
`
export const Photo = styled.TextInput`
  width: 79px;
  height: 82px;
  border-radius: 36px;
  background-color: #FCFCFC;
  margin-left: 20px;
  margin-top: -60px;
`

export const Name = styled.Text`
  font-size: 24px;
  color: #2743FD;
  font-weight: 600;
  margin-left: 116px;
  margin-top: 50px;
`

interface IColor {
  isValid: boolean;
};
export const User = styled.TextInput<IColor>`
  margin-top: 12px;
  margin-bottom: 24px;
  color: #808080;
  width: 80%;
  max-width: 500px;
  border-Bottom-Color: #A6A6A6;
  border-Bottom-Width: 1px;
  ${props => !props.isValid && css`
        border-color: rgb(255, 81, 81);
        font-weight: bold;
        background-color: rgb(254, 205, 205);`
    }
`
export const Info = styled.Text`
  display: flex;
  justify-content: start;
`
export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`
export const Button = styled.TouchableOpacity`
  border: 1px solid;
  width: 315px;
  height: 72px;
  display: flex;
  justify-content: center;
  margin-left: 30px;
  border-radius: 28px;
  padding-left: 25px ;
  border-color: #465EFF;
`
export const Sair = styled.Text `
  font-size: 24px;
  color: #465EFF;
`
export const Icon = styled.Text`
  margin-left: 80%;
  margin-top: -30px;
`
export const Background = styled.View`
  width: 100%;
`;
export const ContainerProfile = styled.View`
  width: 700px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
