import styled from 'styled-components'

const Block = styled.div`
  margin: 0 auto;
  position: relative;
  width: 75%;
  text-align: center;
  margin-top: 80px;
  .avatar {
    position: relative;
    margin: 0 auto;
    background-color: #3B79D3;
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 40px;
    width: 100px;
    height: 100px;
  }
`;
const Title = styled.div`
    padding: 0px 34px;
    font-size: 26px;
    font-weight: bold;
`;

const Text = styled.div`
  &.subtitle {    
    font-weight: bolder;
    margin: 40px;
  }
`;

const ProfileSettings = styled.div`
  position: relative;
  display: inline-grid;
  width: 300px;
  text-align: initial;
  .form-text {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  height: 25px;
  margin-bottom: 20px;
`;

const TextAerea = styled.textarea`
  margin-bottom: 20px;
  border-radius: 5px;
  height: 80px;
`;

const Button = styled.button`
  background: #3B79D3;
  border-radius: 10px;
  font-weight: 600;
  color: #ffffff;
  font-size: 15px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export {
    Block,
    Title,
    Text,
    ProfileSettings,
    Input,
    TextAerea,
    Button
};
