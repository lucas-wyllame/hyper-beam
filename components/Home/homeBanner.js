import styled from "styled-components";
import HyperCard from "../HyperCard/hyperCard";

const Content = styled.div`
  width: 100%;
  height: 600px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  `;
  
  const Banner = styled.div`
  width: 1317px;
  height: 488px;
  background: green;
  border-radius: 44px;
  display: flex;
  align-items: center;
  position: relative;

`;

const TextsDiv = styled.div`
  width: 45%;
  height: 40%;
  background: cyan;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 34px;
  button {
    width: 130px;
    height: 49px;
    background: #ffe747 0% 0% no-repeat padding-box;
    border-radius: 44px;
    border: none;
    color: #A127FF;
  }
`;

const Title = styled.div`
  font-size: 20px;
  margin: 10px 0;
  width: 30%;
  color: #fff;
  font: Poppins;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{ 
    color: #FFE747;
  }
  div{
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: gray;
    opacity: 0.5;
    margin-top: 5px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  margin: 10px 0;
  color: #fff;
  font: Poppins;
  font-weight: bold;
`;



const BigImg = styled.img`
  width: 35%;
  position: absolute;
  background: red;
  height: 510px;
  right: 80px;
  bottom: 0;
`;

export default function HomeBanner() {
  return (
    <Content>
      <Banner>
        <TextsDiv>
          <Title>Hyper Beam <div/> <span>03</span></Title>
          <Desc>Pokémon Unite e The World Ends with You</Desc>
          <button>Play</button>
        </TextsDiv>
        <BigImg></BigImg>
        <HyperCard></HyperCard>
      </Banner>
    </Content>
  );
}
