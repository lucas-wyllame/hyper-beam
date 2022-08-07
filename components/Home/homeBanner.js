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
  width: 94.7%;
  height: 488px;
  background: purple;
  border-radius: 44px;
  display: flex;
  align-items: center;
  position: relative;
`;

const TextsDiv = styled.div`
  width: 45%;
  height: 40%;
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 34px;
  button {
    width: 20%;
    height: 25%;
    background: #ffe747 0% 0% no-repeat padding-box;
    border-radius: 44px;
    border: none;
    color: #a127ff;
    font-size: 25px;
    margin-top: 19px;
    @media (max-width: 1280px) {
      font-size: 20px;
    }
    @media (max-width: 1080px) {
      font-size: 15px;
    }
  }
`;

const TitleInside = styled.div`
  font-size: 30px;
  margin: 10px 0;
  width: 32%;
  color: #fff;
  font: Poppins;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #ffe747;
  }
  div {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: gray;
    opacity: 1;
    margin-top: 5px;
  }
  @media (max-width: 1366px) {
    width: 45%;
  }
  @media (max-width: 1280px) {
    font-size: 25px;
  }
  @media (max-width: 1080px) {
    font-size: 20px;
  }
`;

const Desc = styled.p`
  font-size: 25px;
  margin: 10px 0;
  color: #fff;
  font: Poppins;
  font-weight: bold;
  @media (max-width: 1280px) {
    font-size: 20px;
  }
  @media (max-width: 1080px) {
    font-size: 15px;
  }
`;

const BigImg = styled.img`
  width: 35%;
  position: absolute;
  background: yellow;
  height: 513px;
  right: 80px;
  bottom: 0;
`;

const HyperCards = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -30%;
  display: flex;
  justify-content: center;
  @media (max-width: 1080px) {
    bottom: -20%;
  }
`;

const HyperCardGroup = styled.div`
  width: 16%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  bottom: 31px;
  @media (max-width: 1280px) {
    height: 150px;
  }
  @media (max-width: 1080px) {
    height: 120px;
  }
`;

const HyperText = styled.label`
  width: 70%;
  font-size: 17px;
  color: #9A8DAC;
  @media (max-width: 1280px) {
    font-size: 12px;
  }
  @media (max-width: 1080px) {
    font-size: 10px;
  }
`;


export default function HomeBanner() {
  const TitleInsides = [
    {
      name: "Hyper Beam 1",
      numero: 1,
      foto: "linkgenericodefotourl",
    },
    {
      name: "Hyper Beam 2",
      numero: 2,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 3",
      numero: 3,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 4",
      numero: 4,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 5",
      numero: 5,
      foto: "linkgenericodefotourl2",
    },
  ];

  return (
    <Content>
      <Banner>
        <TextsDiv>
          <TitleInside>
            Hyper Beam <div /> <span>03</span>
          </TitleInside>
          <Desc>Pokémon Unite e The World Ends with You</Desc>
          <button>Play</button>
        </TextsDiv>
        <BigImg></BigImg>
        <HyperCards>
          {TitleInsides.map((res) => {
            return (
                // eslint-disable-next-line react/jsx-key
              <HyperCardGroup>
                <HyperCard
                  width={"72%"}
                  height={"85%"}
                  name={res.name}
                  numero={res.numero}
                  ></HyperCard>
                  <HyperText>Hyper Beam ● 01</HyperText>
              </HyperCardGroup>
            );
          })}
        </HyperCards>
      </Banner>
    </Content>
  );
}
