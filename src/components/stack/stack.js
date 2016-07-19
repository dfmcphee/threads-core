import React from 'react';
import Component from '../component';

export default class Stack extends Component {
  static defaultProps = {
    wrap: true
  }

  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  componentOptions = {
    base: 'stack',
    variants: {
      wrap: true,
      vertical: true,
      distribution: [
        'leading',
        'trailing'
      ]
    }
  }

  render() {
    return (
      <div className={this.classes()}>
        {this.props.children}
      </div>
    );
  }
}
