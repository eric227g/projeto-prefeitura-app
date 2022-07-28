import styled, { css } from 'styled-components/native';

export const LogButtonEnvio = styled.TouchableOpacity`
  background-color: #e5e5e5;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: black 3px;
  /* background: linear-gradient(98.88deg, #4960f9 -14.33%, #1433ff 92.04%); */
  border-radius: 28px;
`;

export const TextFonte = styled.Text`
  position: absolute;
  width: 100%;
  height: 53px;
  left: 28px;
  top: 323px;
  background-color: gray;
  border-radius: 16px;
  border: 2px solid Black;
  padding-bottom: 5px;
  padding-left: 15px;
`;

export const TextButtonEnvio = styled.Text`
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  display: flex;
`;

export const Container = styled.View`
  display: flex;
  margin-top: 70%;
  padding-left: 26px;
`;

export default styled;
