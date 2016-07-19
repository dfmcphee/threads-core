import React from 'react';
import Component from '../../component';

export default class Button extends Component {
  static defaultProps = {
    label: '',
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
  }

  state = {
    label: this.props.label,
  }

  componentOptions = {
    base: 'button',
    variants: {
      type: [
        'primary',
        'danger'
      ]
    }
  };

  render() {
    return (
      <button type="button" className={this.classes()} id={this.props.id}>
        <div className="button__container">
          {this.state.label}
        </div>
      </button>
    );
  }
}
