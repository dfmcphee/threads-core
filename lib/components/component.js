'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'variant',
    value: function variant(base, _variant) {
      return base + '--' + _variant;
    }
  }, {
    key: 'getVariantClass',
    value: function getVariantClass(key) {
      var variantClass = false;
      if (Array.isArray(this.componentOptions.variants[key])) {
        if (this.componentOptions.variants[key].indexOf(this.props[key]) !== -1) {
          variantClass = this.variant(this.componentOptions.base, key + '-' + this.props[key]);
        }
      } else {
        variantClass = this.variant(this.componentOptions.base, key);
      }
      return variantClass;
    }
  }, {
    key: 'variants',
    value: function variants() {
      var classes = [this.componentOptions.base];
      if (this.componentOptions.variants) {
        for (var key in this.props) {
          if (this.componentOptions.variants.hasOwnProperty(key)) {
            var variantClass = this.getVariantClass(key);
            if (variantClass) {
              classes.push(variantClass);
            }
          }
        }
      }
      return classes.join(' ');
    }
  }, {
    key: 'classes',
    value: function classes() {
      return this.variants();
    }
  }]);

  return Component;
}(_react2.default.Component);

exports.default = Component;
//# sourceMappingURL=component.js.map