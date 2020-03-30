import styled from 'styled-components';
import devices from '~/styles/config/devices';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${devices.desktop} {
    grid-template-rows: 60px calc(100vh - 60px);
  }

  @media ${devices.mobile} {
    grid-template-rows: 70px calc(100vh - 70px);
  }
`;

export const Content = styled.div`
  position: relative;
  &:before {
    content: '';
    opacity: 0.25;
    position: absolute;
    z-index: 1;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 60px));
    background-image: ${({ src }) => `url('${src}')`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 300px;
  }
`;
