import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, TitleH2 } from '../Statistic/Statistic.styled';

const Section = ({title, children}) => (
  <Wrapper>
    <TitleH2>{title}</TitleH2>
    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Section;
