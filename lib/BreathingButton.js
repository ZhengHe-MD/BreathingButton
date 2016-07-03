'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _anime = require('./anime');

var _anime2 = _interopRequireDefault(_anime);

var _mdbutton = require('mdbutton');

var _mdbutton2 = _interopRequireDefault(_mdbutton);

var _BreathingButton = require('./BreathingButton.css');

var _BreathingButton2 = _interopRequireDefault(_BreathingButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreathingButton = function (_Component) {
  _inherits(BreathingButton, _Component);

  function BreathingButton() {
    _classCallCheck(this, BreathingButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BreathingButton).call(this));

    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    return _this;
  }

  _createClass(BreathingButton, [{
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      if (!this.breathing) {
        var _props = this.props;
        var targetScale = _props.targetScale;
        var period = _props.period;

        this.breathing = (0, _anime2.default)({
          targets: this.refs.button,
          scale: [1., targetScale || 1.05],
          duration: period || 1000,
          direction: 'alternate',
          easing: 'easeInOutQuad',
          loop: true
        });
      } else {
        this.breathing.restart();
      }
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      this.breathing.pause();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'button', className: _BreathingButton2.default.container },
        _react2.default.createElement(
          _mdbutton2.default,
          _extends({
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
          }, this.props),
          this.props.children
        )
      );
    }
  }]);

  return BreathingButton;
}(_react.Component);

BreathingButton.propTypes = {
  isDisabled: _react.PropTypes.bool,
  theme: _react.PropTypes.string,
  href: _react.PropTypes.string,
  targetScale: _react.PropTypes.number,
  period: _react.PropTypes.number,

  onClick: _react.PropTypes.func
};

exports.default = BreathingButton;