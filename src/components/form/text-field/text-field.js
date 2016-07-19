import React from 'react';
import Component from '../../component';

export default class TextField extends Component {
  static defaultProps = {
    label: '',
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
  }

  state = {
    label: this.props.label,
  }

  componentOptions = {
    base: 'text-field'
  };

  render() {
    return (
      <div className={this.classes()}>
        <label htmlFor={this.props.id} className="text-field__label">{this.state.label}</label>
        <input className="text-field__input" type="text" id={this.props.id} />
      </div>
    );
  }
}
