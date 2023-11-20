import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";
import {
  ImageDiv,
  LinkDiv,
  RightsDiv,
  RightsParagraph,
  SocialDiv,
  StyledDiv,
  StyledImg,
  StyledParagraph,
  StyledSection,
} from "./style";

const Footer = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <ImageDiv>
          <StyledImg src={logo} alt="logo" />
          <StyledParagraph>
            A new way to make the payment easy, reliable and secure.
          </StyledParagraph>
        </ImageDiv>

        <LinkDiv>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="my-4 flex min-w-[150px] flex-col ss:my-0"
          >
            <h4 className="font-poppins text-[18px] font-medium leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="mt-4 list-none">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`cursor-pointer font-poppins text-[16px] font-normal leading-[24px] text-dimWhite hover:text-secondary ${
                    index !== footerLinks.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </LinkDiv>
      </StyledDiv>

      

      <RightsDiv>
        <RightsParagraph>
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </RightsParagraph>

        <SocialDiv>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`h-[21px] w-[21px] cursor-pointer object-contain ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </SocialDiv>
      </RightsDiv>
    </StyledSection>
  );
};

export default Footer;
