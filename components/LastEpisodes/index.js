import styled from "styled-components";
import { Title, Desc } from "./../Global/globalStyles";
import HyperCard from './../HyperCard/hyperCard';

const Content = styled.div`
  width: 100%;
  height: 1000px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  padding: 0 88px;
`;

const ListPodcasts = styled.div`
  width: 100%;
  height: 700px;
  margin: 20px 0;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Background = styled.div`
  width: 100%;
  height: 429px;
  border-radius: 44px 44px 0px 0px;
  background: green;
`;

export default function LastEpisodes() {
  return (
    <Content>
      <Title>Episódios Recentes</Title>
      <Desc>Acompanhe nosso podcast e seus episódios</Desc>

      <ListPodcasts>
        <Background>
          <HyperCard position={'static'} width={'337px'} height={'337px'}></HyperCard>
        </Background>
      </ListPodcasts>
    </Content>
  );
}
