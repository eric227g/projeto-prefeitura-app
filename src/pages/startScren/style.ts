import styled from "styled-components/native";


export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageShapes = styled.Image`
  width: 100%;
  max-width: 600px;
  height: 600px;
  position: absolute;
`

export const Logo = styled.Image`
  width: 250px;
  height: 250px;
`

export const ButtonEntrar = styled.TouchableOpacity`
  width: 80%;
  max-width: 500px;
  height: 72px;
  border-radius: 20px;
  background-color: blue;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 14px;
  margin-top: 350px;
  margin-left: 20px;
`
export const TextEntrar = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 400;
`
export const ButtonCadastrar = styled.TouchableOpacity`
  width: 80%;
  max-width: 500px;
  height: 72px;
  border-radius: 20px;
  border: 1px solid blue;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 14px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`
export const TextCadastrar = styled.Text`
  font-size: 20px;
  color: blue;
  font-weight: 400;
`
export const Icon = styled.Text`
  margin-left: 80%;
  margin-top: -25px;
`
export const Title = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: 400;
  width: 150px;
  margin-left: 25px;
`
