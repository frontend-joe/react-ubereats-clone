import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const activeStyles = css`
  background: black;
  color: white;
`;

const StyledButton = styled.button`
  background: white;
  border: 0;
  color: black;
  width: 90px;
  height: 40px;
  border-radius: 20px;

  ${(p) => p.isActive && activeStyles};
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledButton isActive>Delivery</StyledButton>
      <StyledButton>Pick-up</StyledButton>
      <StyledButton>Dine-in</StyledButton>
    </StyledWrapper>
  );
};

export default Wrapper;
