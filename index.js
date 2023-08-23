"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withReactRouterProps = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var withReactRouterProps = function withReactRouterProps(Component) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
      location: (0, _reactRouterDom.useLocation)(),
      navigate: (0, _reactRouterDom.useNavigate)()
    }));
  };
};
exports.withReactRouterProps = withReactRouterProps;
