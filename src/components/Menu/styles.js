import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.menuBackground};
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

export const ThemeMode = styled.div``;

export const Label = styled.span`
  margin-right: 10px;
`;
