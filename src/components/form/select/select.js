import React from 'react';
import Component from '../../component';
import Icon from '../../icon/icon';

export default class Select extends Component {
  static defaultProps = {
    label: '',
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired
  }

  state = {
    label: this.props.label,
  }

  componentOptions = {
    base: 'select'
  };

  options() {
    return this.props.options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
  }

  render() {
    return (
      <div className={this.classes()}>
        <label htmlFor={this.props.id} className="select__label">{this.state.label}</label>
        <div className="select__wrapper">
          <select className="select__input" id={this.props.id}>
            {this.options()}
          </select>
          <span className="select__icon">
            <Icon name="chevron" />
          </span>
        </div>
      </div>
    );
  }
}
