import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  color: rgb(0,0,0);
  
  &:hover: {
    color: red,
    transition: transform .3s ease-out,
    transform: translate(2px, 2px)
  },
`;
