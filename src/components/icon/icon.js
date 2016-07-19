import React from 'react';
import Component from '../component';

export default class Icon extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
  }

  componentOptions = {
    base: 'icon',
    variants: {
      type: [
        'primary',
        'danger'
      ]
    }
  };

  href() {
    return `#${this.props.name}`;
  }

  render() {
    return (
      <svg className={this.classes()}>
        <use xlinkHref={this.href()} />
      </svg>
    );
  }
}
