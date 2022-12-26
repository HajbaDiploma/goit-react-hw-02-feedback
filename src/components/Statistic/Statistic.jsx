import React from 'react';
import PropTypes from 'prop-types';
import {StatisticsWrapper, StatisticsItem} from './Statistic.styled';

const Statistic = ({
                     goodAmount,
                     neutralAmount,
                     badAmount,
                     onCountTotalFeedback,
                     onCountPositiveFeedbackPercentage,
                   }) => (
  <StatisticsWrapper>
    <StatisticsItem>Good: {goodAmount}</StatisticsItem>
    <StatisticsItem>Neutral: {neutralAmount}</StatisticsItem>
    <StatisticsItem>Bad: {badAmount}</StatisticsItem>
    <StatisticsItem>
      Total: {onCountTotalFeedback}
    </StatisticsItem>
    <StatisticsItem>
      Positive feedback: {onCountPositiveFeedbackPercentage}%
    </StatisticsItem>
  </StatisticsWrapper>
);

Statistic.propTypes = {
  goodAmount: PropTypes.number.isRequired,
  neutralAmount: PropTypes.number.isRequired,
  badAmount: PropTypes.number.isRequired,
  onCountTotalFeedback: PropTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.number.isRequired,
}

export default Statistic;
