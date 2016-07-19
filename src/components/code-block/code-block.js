import React from 'react';
import Component from '../component';
import beautify from 'js-beautify';

export default class CodeBlock extends Component {
  static propTypes = {
    code: React.PropTypes.string.isRequired
  }

  componentOptions = {
    base: 'code-block'
  };

  beautify(code) {
    const newCode = beautify.js_beautify(code, {
      indent_size: 4,
      indent_char: ' ',
      eol: '\n',
      indent_level: 0,
      preserve_newlines: true,
      jslint_happy: true
    });

    return newCode
      .replace(/< /gm, '<')
      .replace(/\/ >/gm, '/>')
      .replace(/ = /gm, '=');
  }

  render() {
    return (
      <div className={this.classes()}>
        <pre>
          <code>{this.beautify(this.props.code)}</code>
        </pre>
      </div>
    );
  }
}
