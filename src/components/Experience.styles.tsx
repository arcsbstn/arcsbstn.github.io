import styled from "styled-components";

// Web View

export const Table = styled.table`
  border-spacing: 5em;
`;

export const TableRow = styled.tr`
  vertical-align: top;
  border-spacing: 2em;
`;

export const TableCell = styled.td`
  padding-bottom: 2em;
`;

// Mobile View

export const Row = styled.div`
  margin-bottom: 3em;
`;

// Common

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8em;
`;

export const JobTitle = styled.p`
  font-weight: 800;
  min-width: 190px;
  margin: 0;
`;

export const Organization = styled.p`
  font-size: 1em;
  margin: 0;
`;

export const Duration = styled.p`
  text-transform: uppercase;
  font-size: 0.8em;
  min-width: 160px;
`;

export const ChipsWrapper = styled.div`
  display: flex;
  gap: 0.5em;
`;
