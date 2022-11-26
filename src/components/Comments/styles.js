import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 800px;
  background: #27273d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 54px;
`;

export const CommentBox = styled.div`
  width: 85%;
  height: 80%;
  background: #11122D;
  border: 2px solid #fff;
  font-size: 4.5rem;
  color: #fff;
  @media (min-width: 1024px) {
    font-size: 12rem;
  }
`;
