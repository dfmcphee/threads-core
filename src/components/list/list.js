import React from 'react';
import Component from '../component';

export default class List extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    type: React.PropTypes.string
  }

  componentOptions = {
    base: 'list',
    variants: {
      type: [
        'ordered',
        'unordered'
      ]
    }
  }

  renderUnorderedList() {
    return (
      <ul className={this.classes()}>
        {this.props.children}
      </ul>
    );
  }

  renderOrderedList() {
    return (
      <ol className={this.classes()}>
        {this.props.children}
      </ol>
    );
  }

  render() {
    let list;
    if (this.props.type === 'ordered') {
      list = this.renderOrderedList();
    } else {
      list = this.renderUnorderedList();
    }
    return list;
  }
}
