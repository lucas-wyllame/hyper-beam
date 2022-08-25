import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentBox = styled.div`
  width: 85%;
  height: 80%;
  background: red;
  font-size: 200px;
  color: #fff;
  @media (max-width: 480px) {
    font-size: 45px;
  }
`;

export default function Comments() {
  return (
    <Content>
      <CommentBox>COMENTARIOS</CommentBox>
    </Content>
  );
}
