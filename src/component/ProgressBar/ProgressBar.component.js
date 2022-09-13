// import PropTypes from 'prop-types';
import { PureComponent } from "react";

import "./ProgressBar.style";

export class ProgressBar extends PureComponent {
  static propTypes = {
    // TODO: implement prop-types
  };
  constructor() {
    super();
    this.state = {
      stepsArray: ["adress", "shipping", "order"],
      currentStep: 0,
    };
  }
  prev = () => {
    let step = this.state.currentStep;
    if (step > 0) {
      step = step - 1;
      // this.setState({
      //     completedSteps: step,
      // });
      this.setState({
        currentStep: step,
      });
    }
  };
  next = () => {
    let step = this.state.currentStep;
    if (step < this.state.stepsArray.length) {
      step = step + 1;
      // this.setState({
      //     completedSteps: step,
      // });
      this.setState({
        currentStep: step,
      });
    }
  };
  render() {
    return (
      <div block="ProgressBar">
        {/* TODO: Implement render method */}
        <div className="stepContainer"></div>
        <div className="control-buttons">
          <button onClick={this.prev} className="btn previous">
            Prev
          </button>
          <button onClick={this.next} className="btn next">
            next
          </button>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

class Step extends PureComponent {
  static propTypes = {
    // TODO: implement prop-types
  };

  render() {
    return (
      <div block="ProgressBar">
        {/* TODO: Implement render method */}
        <div className="step">
          <div className="circle"></div>
          <div className="title"></div>
        </div>
      </div>
    );
  }
}
