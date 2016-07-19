import React from 'react';
import Component from '../../component';

export default class TextArea extends Component {
  static defaultProps = {
    label: '',
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  }

  state = {
    label: this.props.label,
  }

  componentOptions = {
    base: 'text-area'
  };

  render() {
    return (
      <div className={this.classes()}>
        <label htmlFor={this.props.id} className="text-area__label">{this.state.label}</label>
        <textarea className="text-area__input" id={this.props.id}></textarea>
      </div>
    );
  }
}
