import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.2em;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 1em 1em 0.5em 1em;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
