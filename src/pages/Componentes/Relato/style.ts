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

export const TextEnviar = styled.View`
  font-size: 16px;
  text-align: center;
  justify-content: center;
  color: #ffff;
`;

export const Container = styled.View`
  display: flex;
  margin-top: 10%;
  padding-left: 26px;
`;

export const ImageBackgroundShape = styled.ImageBackground`
  display: flex;
  border-radius: 28px;
  /* width: 255px; */
  width: 200px;
  background-color: blue;
  height: 38px;
  justify-content: center;
`;

export const ViewContainer = styled.View`
  flex: 1;
  /* paddinghorizontal: 20; */
  justify-content: 'center';
  align-items: 'center';
`;

export default styled;
