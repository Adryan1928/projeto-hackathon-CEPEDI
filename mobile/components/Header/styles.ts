import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Container = styled.View`
  padding: 0px 20px 20px 20px;
  background-color: ${theme.colors.primary[500]};
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  justify-content: center;
`;

export const TitleRegular = styled.Text`
  ${theme.texts.h2Regular}
  color: ${theme.colors.gray[50]}
`;

export const TitleBold = styled.Text`
  ${theme.texts.h2Bold}
  color: ${theme.colors.gray[50]}
`;
