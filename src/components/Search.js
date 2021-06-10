import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e0e0e0;
  margin: 0 32px;
  height: 60px;
  border-radius: 30px;
`;

const StyledIcon = styled.span`
  color: black;
  width: 60px;
  text-align: center;
  font-size: 24px;
`;

const StyledInput = styled.input`
  flex: 1 1 auto;
  background: transparent;
  border: 0;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  text-align: center;
  width: 60px;
  font-size: 24px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledIcon className="uil uil-search" />
      <StyledInput placeholder="Restaurants, cuisines, dishes" />
      <StyledButton className="uil uil-sliders-v-alt" />
    </StyledWrapper>
  );
};

export default Wrapper;
