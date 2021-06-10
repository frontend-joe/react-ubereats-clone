import styled from "styled-components";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const StyledWrapper = styled.div``;

const StyledCard = styled.div`
  border-top: 20px solid #f6f6f6;

  padding: 20px;
  background: white;
`;

const StyledImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  font-size: 1.15rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledSubtitle = styled.div`
  font-size: 1rem;
`;

const StyledRating = styled.div`
  background: #eeeeee;
  color: black;
  height: 30px;
  border-radius: 15px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledCard>
        <StyledImage src={image1} />
        <StyledRow>
          <div>
            <StyledTitle>McDonalds</StyledTitle>
            <StyledSubtitle>£3.99 Delivery Fee - 20-30 mins</StyledSubtitle>
          </div>
          <StyledRating>4.5</StyledRating>
        </StyledRow>
      </StyledCard>
      <StyledCard>
        <StyledImage src={image2} />
        <StyledRow>
          <div>
            <StyledTitle>Shirley Kebab House</StyledTitle>
            <StyledSubtitle>£2.29 Delivery Fee - 15-25 mins</StyledSubtitle>
          </div>
          <StyledRating>4.6</StyledRating>
        </StyledRow>
      </StyledCard>
    </StyledWrapper>
  );
};

export default Wrapper;
