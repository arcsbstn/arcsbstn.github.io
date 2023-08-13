import styled from "styled-components";

import { Chip } from "./index";

interface ICardProps {
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  leftComponent?: string | React.ReactNode;
}

const CardWrapper = styled.div`
  border-radius: 0.2em;
  padding: 1em 1em 0.5em 1em;
  display: flex;
  flex-direction: row;
  gap: 1em;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const LeftColumn = styled.div`
  flex-basis: 25%;
  text-transform: uppercase;
  font-size: 0.8em;
`;

const RightColumn = styled.div`
  flex-basis: 75%;
`;

export function Card(props: ICardProps) {
  const { title, subtitle, description, techStack, leftComponent } = props;

  return (
    <CardWrapper>
      <LeftColumn>{leftComponent}</LeftColumn>
      <RightColumn>
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{description}</p>
        <p>
          {techStack.map((tech: string) => (
            <Chip>{tech}</Chip>
          ))}
        </p>
      </RightColumn>
    </CardWrapper>
  );
}
