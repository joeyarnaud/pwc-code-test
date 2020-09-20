import styled from 'styled-components';

// Styled components likely to appear often in the application

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: ${(props) => props.theme.fontSizes.fontLg};
  transform: translate(-50%, -50%);
`;

export const Error = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: ${(props) => props.theme.fontSizes.fontLg};
  transform: translate(-50%, -50%);
  color: red;
`;

export const SuperscriptDegree = styled.span`
  position: absolute;
  top: -0.2rem;
  right: -0.5rem;
  font-size: ${(props) => props.theme.fontSizes.fontXs};
`;

export const SuperscriptCelcius = styled.span`
  position: absolute;
  top: 0rem;
  right: -1.1rem;
  font-size: ${(props) => props.theme.fontSizes.fontXs};
`;

export const SuperscriptDegreeLg = styled(SuperscriptDegree)`
  top: 0rem;
  right: -1rem;
  font-size: ${(props) => props.theme.fontSizes.fontSm};
`;

export const SuperscriptCelciusLg = styled(SuperscriptCelcius)`
  top: 0.2rem;
  right: -2rem;
  font-size: ${(props) => props.theme.fontSizes.fontSm};
`;
