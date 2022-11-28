import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 66px;
  background: #11122d 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 16px #0000004f;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CenterLogoDiv = styled.div`
  width: 57%;
  height: 66px;
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 51.5%;
  }
`;

export const LogoTop = styled.div`
  width: 53px;
  height: 53px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  /* margin: 0 500px; */
`;

export const SearchLogoBox = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 23px;
  @media (min-width: 768px) {
    margin-right: 50px;
  }
  @media (min-width: 1024px) {
    margin-right: 155px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 66px;
  background: pink;
  border: 0px;
  font-size: 2rem;
  padding-left: 18px;
  outline: none;
  color: #fff;
  position: relative;
  ::placeholder {
    color: #9a8dac;
  }
`;

export const AfterSearch = styled.div`
  width: 100%;
  height: 300px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #423e5a;
  position: relative;
`;

export const IconAndButtonGrid = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 75px;
  /* background: blue; */
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;
