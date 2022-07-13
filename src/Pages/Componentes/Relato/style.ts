import styled, { css } from 'styled-components/native';

export const LogButtonFoto = styled.TouchableOpacity`
  background-color: #e5e5e5;
  width: 75px;
  height: 40px;
  border-radius: 10px;
  /* background: linear-gradient(98.88deg, #4960f9 -14.33%, #1433ff 92.04%); */
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 45px;
`;

export const LogButtonEnvio = styled.TouchableOpacity`
  background-color: #e5e5e5;
  width: 200px;
  height: 40px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 70px;
`;

export const TextInputAdress = styled.TextInput`
  width: 90%;
  height: 40px;
  background-color: #e5e5e5;
  border-radius: 10px;
  padding-left: 10px;
  margin-top: 8px;
`;

export const TextInputArea = styled.TextInput`
  width: 90%;
  height: 30%;
  background-color: #e5e5e5;
  border-radius: 10px;
  padding-left: 10px;
  margin-top: 8px;
`;

export const TextFoto = styled.Text`
  font-size: 10px;
`;

export const TextEnviar = styled.Text`
  font-size: 16px;
`;

export const Container = styled.View`
  display: flex;
  margin-top: 70%;
  padding-left: 26px;
`;
export default styled;
