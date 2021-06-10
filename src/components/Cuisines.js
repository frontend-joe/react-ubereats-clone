import styled from "styled-components";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 160px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  border: 0;
  width: 120px;
`;

const StyledLabel = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

const StyledIcon = styled.img`
  width: 90px;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledButton>
        <StyledIcon src={icon1} />

        <StyledLabel>Burgers</StyledLabel>
      </StyledButton>
      <StyledButton>
        <StyledIcon src={icon2} />

        <StyledLabel>Halal</StyledLabel>
      </StyledButton>
      <StyledButton>
        <StyledIcon src={icon3} />

        <StyledLabel>Indian</StyledLabel>
      </StyledButton>
      <StyledButton>
        <StyledIcon src={icon4} />

        <StyledLabel>Pizza</StyledLabel>
      </StyledButton>
    </StyledWrapper>
  );
};

export default Wrapper;
