import styled from "styled-components";
import "./App.css";
import eyeImage from "./Contants/bi_eye-slash-fill.svg";
import groupimage from "./Contants/undraw_authentication_re_svpt 1 (1).png";

const Apps = styled.div`
  flex: auto;
  flex-direction: row;
  display: inline-flex;
  padding: 2.5rem 2.5rem 2.5rem 8.875rem;
  justify-content: flex-end;
  align-items: center;
  gap: 9.23631rem;
  background: white;
  width:auto;
  height:auto;
  @media (max-width: 768px) {
    width : 100%;
    height : auto;
      padding: 1rem;
      display:flex;
      gap: 1rem;
      flex-direction: column;
    
    
    }
  
`;

const GroupImage = styled.img`
width: 33.95119rem;
height: 39.60006rem;
  background:purple;
  @media (max-width:768) {
    width :100%;
    height : auto;
  }
`;

const Rectangle = styled.div`
  width: 65.4375rem;
  height: 60.0625rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  position: relative;

  @media (max-width: 768px) {
    
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.16);
    }
  
`;

const Group3595 = styled.div`
  width: 52.5rem;
  height: 34.6875rem;
  flex-shrink: 0;
  margin-top: 12.69rem;
  margin-bottom: 12.69rem;
  margin-left: 6.94rem;
  margin-right: 7rem;
  position: relative;
  
  @media (max-width: 768px) {
    
      width: 100%;
      height: auto;
      margin-top: 3rem;
      margin-bottom: 3rem;
      margin-left: .1rem;
     
    }
  
`;

const Rectangle2 = styled.div`
 
  position: relative;

  @media (max-width: 768px) {
    
    position: relative;
    }
  
`;

const Rectangle3 = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768) {
    
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: space-between;
    }
  
`;

const Rectangle4 = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom : 20px;
  

  @media (max-width: 768) {
    
      display: flex;
      align-items: center;
      align-content: center;
      
      margin-bottom : 10px;
    }
  
`;

const Rectangle5 = styled.div `
display: flex;
      align-items: center;
     
      margin-left : 15.2rem;
      margin-bottom : 10px;
      justify-content: flex-end
      width: 54.5rem;
  height: 3.5rem;
`

const LoginButton = styled.button`
  width: 33.625rem;
  height: 3.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: rgba(21, 117, 167, 1);
  color: white;
  color: var(--white-color, #fff);
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-left:8.94rem;
  @media(max-width : 768) {
    width: 100%;
    margin-left:1rem;
  }
`;

const RectangleRemember = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #737b86;
  align-items: center;
  @media (max-width: 768) {
    
      width: 0.75rem;
      height: 0.75rem;
      border: 1px solid #555555;
    }
  
`;

const RectangleRememberFlex = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom : 20px;
  margin-top : 20px;
  @media (media-width: 768) {
    .RectangleRememberFlex {
      display: flex;
      align-items: center;
      align-content: center;
      margin-bottom : 10px;
    }
  }
`;

const H1 = styled.h1`
  color: var(--text-color, #04072f);
  text-align: center;
  font-family: Poppins;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  @media (max-width: 768px) {
  }
`;
const Label = styled.label`
  color: var(--text-color, #04072f);
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 70px;
  
  @media (max-width: 768px) {
  }
`;
const Input = styled.input`
  width: 51.5rem;
  height: 3.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid rgba(4, 7, 47, 0.4);
  color: var(--light-color-1, #737b86);
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  padding: 10px 40px 10px 10px;
  font-color: rgba(115, 123, 134, 1);
  @media (max-width: 768px) {
    width: 90%;
    font-size: 1rem;
    padding: 2px 10px 2px 2px;
  }
`;
const EyeImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  ${'' /* margin-top:1rem; */}
  top: 50%;
  transform: translateY(-50%);
  margin-left:51rem;
  @media (max-width: 768px) {
    margin-left: -3rem;
  }
`;
const H1R = styled.h1`
  margin-left: 6px;
  color: var(--light-color-1, #737b86);
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 12%;
  ${"" /* text-align:left;float:left; */}
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const H2R = styled.h1`
  text-align: right;
  color: var(--light-color-1, #737b86);
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  ${"" /* ext-align:right;float:right; */}
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HDont = styled.h1 `
color: #04072F;
font-family: Poppins;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Hregister = styled.a`
color: var(--secondary-1, #F78719);
font-family: Poppins;
font-size: 1.125rem;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: underline;
`
function App() {
  return (
    <Apps>
      <GroupImage src={groupimage} alt=""></GroupImage>
      <Rectangle>
        <Group3595>
          <H1>Login</H1>
          <Label>login id</Label>
          <Input placeholder="Enter Login ID"></Input>
          <Label>Password</Label>
          <Rectangle2>
            <Input placeholder="Enter Password"></Input>
            <EyeImg src={eyeImage} alt="eyeImage"></EyeImg>
          </Rectangle2>
          <Rectangle3>
            <RectangleRememberFlex>
              <RectangleRemember />
              <H1R>Remember Me</H1R>
            </RectangleRememberFlex>
            <H2R>Change Password</H2R>
          </Rectangle3>
          <Rectangle4>
            <RectangleRemember />
            <H1R>Agree to Terms & Conditions</H1R>
          </Rectangle4>
          <LoginButton>Login</LoginButton>
          <Rectangle5>
          <HDont>Dont have an account?</HDont>
          <Hregister>Register Here</Hregister>
          </Rectangle5>
          

        </Group3595>
      </Rectangle>
    </Apps>
  );
}

export default App;
