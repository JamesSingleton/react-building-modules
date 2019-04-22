import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const primaryCss = css`
  background-color: #008bf8;
  color: #fff;
`;

const StyledCard = styled.div`
  width: ${props => (props.big ? '450px' : '300px')};
  padding: 15px;
  opacity: 0;
  transform: translateY(50px);
  transition: 500ms all ease-in-out;
  margin: ${props => (props.noMargin ? 0 : '15px')};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  border-radius: 5px;
  ${props => props.animated && animatedCss}
  ${props => props.primary && primaryCss}
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };
  }

  componentDidMount() {
    const { delay } = this.props;
    setTimeout(() => {
      this.setState(() => ({ animated: true }));
    }, delay);
  }

  render() {
    const {
      delay = 0,
      noAnimation,
      primary,
      noMargin,
      big,
      ...props
    } = this.props;
    const { animated } = this.state;
    return (
      <StyledCard
        animated={animated}
        delay={delay}
        primary={primary}
        noAnimation={noAnimation}
        big={big}
        noMargin={noMargin}
        {...props}
      />
    );
  }
}

export default Card;
