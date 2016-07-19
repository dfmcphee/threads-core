import React from 'react';
import Component from '../component';

export default class Header extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  componentOptions = {
    base: 'header'
  };

  render() {
    return (
      <header className={this.classes()}>
        {this.props.children}
      </header>
    );
  }
}
