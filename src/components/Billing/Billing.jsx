import { apple, bill, google } from "../../assets";
import {
  PinkGradientDiv,
  ImageDiv,
  StyledImg,
  StyledSection,
  TextDiv,
  WhiteGradientDiv,
  StyledHeading,
  StyledParagraph,
  AppIconDiv,
  AppImg,
} from "./Style";

const Billing = () => {
  return (
    <StyledSection id="product">
      <ImageDiv>
        <StyledImg src={bill} />

        <WhiteGradientDiv />
        <PinkGradientDiv />
      </ImageDiv>

      <TextDiv>
        <StyledHeading>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </StyledHeading>

        <StyledParagraph>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </StyledParagraph>

        <AppIconDiv>
          <AppImg src={apple} alt="apple-store"/>
          <AppImg src={google} alt="google-store"/>
        </AppIconDiv>
      </TextDiv>
    </StyledSection>
  );
};

export default Billing;
