'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('../component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stack = function (_Component) {
  _inherits(Stack, _Component);

  function Stack() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Stack);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Stack)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentOptions = {
      base: 'stack',
      variants: {
        wrap: true,
        vertical: true,
        distribution: ['leading', 'trailing']
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Stack, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.classes() },
        this.props.children
      );
    }
  }]);

  return Stack;
}(_component2.default);

Stack.defaultProps = {
  wrap: true
};
Stack.propTypes = {
  children: _react2.default.PropTypes.node.isRequired
};
exports.default = Stack;
//# sourceMappingURL=stack.js.map