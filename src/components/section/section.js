import React from 'react';
import Component from '../component';

export default class Section extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  componentOptions = {
    base: 'section'
  }

  render() {
    return (
      <section className={this.classes()}>
        {this.props.children}
      </section>
    );
  }
}
