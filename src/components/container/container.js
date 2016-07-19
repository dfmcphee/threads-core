import React from 'react';
import Component from '../component';

export default class Container extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  componentOptions = {
    base: 'container'
  };

  render() {
    return (
      <main className={this.classes()}>
        {this.props.children}
      </main>
    );
  }
}
