import { createGlobalStyle } from "styled-components";

export const SlickCss = createGlobalStyle`
.slick-slide.slick-active {
    @media (min-width: 769px) {
    /* display: flex;
    background: blue;
    align-items: center;
    justify-content: center;
    flex-direction:column; */
    display: ${(props) => props.display} ;
    background: ${(props) => props.background} ;
    align-items: ${(props) => props.alignItems} ;
    justify-content: ${(props) => props.justifyContent} ;
    flex-direction:${(props) => props.flexDirection} ;
    }
}
`;
