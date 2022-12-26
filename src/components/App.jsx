import React, {Component} from 'react';
import {Wrapper} from "./Statistic/Statistic.styled";
import Statistic from "./Statistic/Statistic";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export class App extends Component {

  state = {
    goodAmount: 0,
    neutralAmount: 0,
    badAmount: 0,
  };

  feedbackBtnClick = event => {
    console.log("on click")
    console.log(this.state)
    this.setState(prevState => {
      const target = event.target.name + "Amount";
      return {
        [target]: prevState[target] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.goodAmount + this.state.neutralAmount + this.state.badAmount;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.goodAmount / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const {goodAmount, neutralAmount, badAmount} = this.state;

    return (
      <Wrapper>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onBtnClick={this.feedbackBtnClick}/>
        </Section>

        <Section title={"Statistics"}>
          {this.countTotalFeedback() === 0 ? (
            <Notification/>
          ) : (
            <Statistic
              goodAmount={goodAmount}
              neutralAmount={neutralAmount}
              badAmount={badAmount}
              onCountTotalFeedback={this.countTotalFeedback()}
              onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}
