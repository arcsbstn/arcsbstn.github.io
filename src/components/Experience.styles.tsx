import styled from "styled-components";

// Web View

export const Table = styled.table`
  border-spacing: 5em;
`;

export const TableRow = styled.tr`
  vertical-align: top;
  margin-bottom: 2em;
  border-spacing: 2em;
`;

export const TableCell = styled.td`
  padding-bottom: 2em;
`;

// Mobile View

export const Row = styled.div`
  margin-bottom: 2em;
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
`;

export const Organization = styled.h6``;

export const Duration = styled.p`
  text-transform: uppercase;
  font-size: 0.8em;
  min-width: 170px;
  padding-bottom: 0.7em;
`;

export const ChipsWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  margin: 0.7em 0;
`;
