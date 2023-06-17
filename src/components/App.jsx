import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotal = () => {
    let totalFeedbackArr = Object.values(this.state);
    return totalFeedbackArr.reduce((a, b) => a + b, 0);
  };

  countPercentage = () => {
    return Math.round((this.state.good / this.countTotal()) * 100);
  };

  changeState = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.changeState}
        />
        {this.countTotal() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotal()}
            positivePercentage={this.countPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
