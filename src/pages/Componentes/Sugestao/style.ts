import styled, { css } from 'styled-components/native';

export const RatingStar = styled.Text`
  color: #3498db;
  background-color: transparent;
  margin-left: 12px;
  text-align: left;
`;

export const TextFonte = styled.Text`
  font-size: 14px;
  padding-left: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  display: flex;
  margin-top: 70%;
  padding-left: 26px;
`;

export const TextFieldCampo = styled.TextInput`
  width: 350px;
  height: 200px;
  background-color: #e5e5e5;
`;

export const LogButtonEnvio = styled.TouchableOpacity`
  background-color: #e5e5e5;
  width: 200px;
  height: 40px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: 70px;
`;

export const TextEnvio = styled.Text`
  font-size: 16px;
`;

export default styled;
