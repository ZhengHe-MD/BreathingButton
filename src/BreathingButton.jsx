import React, { Component, PropTypes } from 'react';
import anime from './anime';
import MDButton from 'mdbutton';
import styles from './BreathingButton.css';

class BreathingButton extends Component {
  constructor() {
    super();
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    if(!this.breathing) {
      const { targetScale, period } = this.props;
      this.breathing = anime({
        targets: this.refs.button,
        scale: [1., targetScale || 1.05],
        duration: period || 1000,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        loop: true,
      });
    } else {
      this.breathing.restart();
    }
  }

  onMouseLeave() {
    this.breathing.pause();
  }

  render() {
    return (
      <div ref="button" className={styles.container} >
      <MDButton
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        {...this.props}
      >
        {this.props.children}
      </MDButton>
    </div>
    );
  }
}

BreathingButton.propTypes = {
  isDisabled: PropTypes.bool,
  theme: PropTypes.string,
  href: PropTypes.string,
  targetScale: PropTypes.number,
  period: PropTypes.number,

  onClick: PropTypes.func,
};

export default BreathingButton;
