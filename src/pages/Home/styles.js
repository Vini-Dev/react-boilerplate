import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.titleHomeForeground};
  z-index: 2;
`;

export const List = styled.div`
  max-width: 400px;
  z-index: 2;
`;

export const Item = styled.span`
  display: inline-block;
  margin: 5px 10px;
  font-weight: 500;
`;

export const AuthorName = styled.a`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: underline;
  color: ${({ theme }) => theme.authorForeground};
`;
