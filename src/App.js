import eyeImage from "./Contants/bi_eye-slash-fill.svg";
import groupimage from "./Contants/undraw_authentication_re_svpt 1 (1).png";
import { Apps, Rectangle, Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5, RectangleRemember, RectangleRememberFlex} from "./Contants/Components/Div";
import { GroupImage, EyeImg } from "./Contants/Components/Images";
import { LoginButton } from "./Contants/Components/Buttons";
import { H1, H1R, H2R, HDont } from "./Contants/Components/H1";
import { Label } from "./Contants/Components/Label";
import { Input } from "./Contants/Components/Input";
import { Hregister } from "./Contants/Components/ATag";




function App() {
  return (
    <Apps>
      <GroupImage src={groupimage} alt=""></GroupImage>
      <Rectangle>
        <Rectangle1>
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
        </Rectangle1>
      </Rectangle>
    </Apps>
  );
}

export default App;
