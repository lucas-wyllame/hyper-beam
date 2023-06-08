import styled from "styled-components";

export const Divider = styled.div`
  width: 1.7px;
  height: 82.5px;
  background: #711bb4;
  @media (min-width: 768px) {
    height: 64.5px;
  }
  @media (min-width: 1024px) {
    width: 1px;
    height: 77.2px;
  }
`;

export const GroupTexts = styled.div`
  width: 302px;
  display: flex;
  gap: 22px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 570px;
    gap: 30px;
    align-items: normal;
    justify-content: normal;
    p {
      text-align: left;
    }
    h1 {
      text-align: left;
    }
  }
  @media (min-width: 1024px) {
    width: 694px;
    gap: 18px;
    p {
      text-align: center;
    }
    h1 {
      text-align: center;
    }
  }
`;

export const BrTag = styled.br`
  @media (min-width: 768px) {
    display: ${(props) => props.display};
  }
`;
