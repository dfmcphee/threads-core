import React from 'react';
import Component from '../component';

export default class Card extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  componentOptions = {
    base: 'card'
  };

  render() {
    return (
      <section className={this.classes()}>
        {this.props.children}
      </section>
    );
  }
}
