import styled, { css } from 'styled-components/native';

export const RatingStar = styled.Text`
  display: flex;
  color: #3498db;
  background-color: transparent;
  margin-left: 12px;
  text-align: left;
  max-width: 900px;
  max-height: 900px;
`;

export const TextFonte = styled.Text`
  display: flex;
  font-size: 14px;
  padding-left: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// export const Container = styled.View`
//   display: flex;
//   margin-top: 250px;
//   padding-left: 26px;
//   justify-content: center;
//   justify-content: space-between;
//   max-width: 900px;
//   max-height: 900px;
// `;

export const TextFieldCampo = styled.TextInput`
  display: flex;
  width: 350px;
  height: 200px;
  background-color: #e5e5e5;
  max-width: 900px;
  max-height: 900px;
  justify-content: center;
`;

export const LogButtonEnvio = styled.TouchableOpacity`
  display: flex;
  background-color: blue;
  width: 80%;
  max-width: 400px;
  height: 40px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const TextEnvio = styled.Text`
  display: flex;
  font-size: 16px;
  color: #ffff;
  justify-content: center;
  text-align: center;
  max-width: 900px;
  max-height: 900px;
`;

export const ViewHead = styled.View`
  display: flex;
  max-width: 600px;
  max-width: 100%;
  max-height: 100%;
`;

export const ViewContainerSugestao = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
`;

export default styled;
