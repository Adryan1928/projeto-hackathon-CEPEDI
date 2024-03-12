import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Container = styled.View`
  background-color: ${theme.colors.gray[50]};
  box-shadow: 0px 4px 31px -6px rgba(0, 0, 0, 0.25);
  padding: 16px;
  gap: 16px;
`;

export const InfoContainer = styled.View`
  gap: 4px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  gap: 4px;
`;

export const LocationTitle = styled.Text`
  ${theme.texts.p3Bold};
  color: ${theme.colors.gray[900]};
`;

export const LocationCaption = styled.Text`
  ${theme.texts.c3Regular};
  color: ${theme.colors.gray[900]};
`;

export const WaitlistHeader = styled.Text`
  ${theme.texts.p5Regular};
  color: ${theme.colors.gray[900]};
`;
