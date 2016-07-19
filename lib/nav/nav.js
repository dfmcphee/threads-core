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

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Nav)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentOptions = {
      base: 'nav'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Nav, [{
    key: 'renderTitle',
    value: function renderTitle() {
      var title = void 0;
      if (this.props.title) {
        title = _react2.default.createElement(
          'span',
          { className: 'nav__title' },
          _react2.default.createElement(
            'a',
            { href: this.props.title.link },
            this.props.title.name
          )
        );
      }
      return title;
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      return this.props.items.map(function (item) {
        return _react2.default.createElement(
          'li',
          { className: 'nav__item' },
          _react2.default.createElement(
            'a',
            { href: item.link },
            item.name
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: this.classes() },
        this.renderTitle(),
        _react2.default.createElement(
          'ul',
          { className: 'nav__list' },
          this.renderItems()
        )
      );
    }
  }]);

  return Nav;
}(_component2.default);

Nav.propTypes = {
  items: _react2.default.PropTypes.array.isRequired,
  title: _react2.default.PropTypes.object
};
exports.default = Nav;
//# sourceMappingURL=nav.js.map