import React from 'react';
import Component from '../component';

export default class Main extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  componentOptions = {
    base: 'main'
  }

  render() {
    return (
      <main className={this.classes()}>
        {this.props.children}
      </main>
    );
  }
}
