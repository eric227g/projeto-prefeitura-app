import styled, { css } from 'styled-components/native';

export const LogButtonFoto = styled.TouchableOpacity`
  background-color: #e5e5e5;
  width: 75px;
  height: 40px;
  border-radius: 10px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 45px;
`;

export const LogButtonEnvio = styled.TouchableOpacity`
  background-color: blue;
  width: 60%;
  max-width: 400px;
  height: 40px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
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
  text-align: center;
  justify-content: center;
  color: #ffff;
`;

export const Container = styled.View`
  display: flex;
  margin-top: 10%;
  padding-left: 26px;
  justify-content: 'center';
  justify-content: space-between;
  align-items: 'center';
`;


export const ViewContainer = styled.View`
  display: flex;
  width: 80%;
  max-width: 500px;
  align-items: center;
`;
export const ViewTop = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

interface IColor {
  isValid: boolean;
};
export const Input = styled.TextInput<IColor>`
    width: 90%;
    height: 25px;
    border-color: rgb(34, 63, 253);
    font-size: 15px;
    border-Bottom-Width: 1px;
    padding: 4px;
    margin-top: 15px;
    ${props => !props.isValid && css`
        border: 1px solid red;
        font-weight: bold;`
    }
`;

export default styled;
