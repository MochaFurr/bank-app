import { stats } from "../../constants";
import { StyledDiv, StyledHeading, StyledSection, StyledText } from "./style";

const Stats = () => {
  return (
    <StyledSection>
      {stats.map((stat) => (
        <StyledDiv key={stat.id}>
          <StyledHeading>{stat.value}</StyledHeading>
          <StyledText>{stat.title}</StyledText>
        </StyledDiv>
      ))}
    </StyledSection>
  );
};

export default Stats;
