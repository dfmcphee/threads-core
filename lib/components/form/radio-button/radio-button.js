'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('../../component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_Component) {
  _inherits(RadioButton, _Component);

  function RadioButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RadioButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      label: _this.props.label
    }, _this.componentOptions = {
      base: 'radio-button'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.classes() },
        _react2.default.createElement('input', { className: 'radio-button__input', type: 'radio', id: this.props.id, name: this.props.name }),
        _react2.default.createElement(
          'span',
          { className: 'radio-button__target' },
          _react2.default.createElement('span', { className: 'radio-button__indicator' })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.id, className: 'radio-button__label' },
          this.state.label
        )
      );
    }
  }]);

  return RadioButton;
}(_component2.default);

RadioButton.defaultProps = {
  label: ''
};
RadioButton.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  name: _react2.default.PropTypes.string.isRequired,
  label: _react2.default.PropTypes.string.isRequired
};
exports.default = RadioButton;
//# sourceMappingURL=radio-button.js.map