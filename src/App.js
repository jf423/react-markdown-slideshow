'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _SlideShow = require('./Components/SlideShow');

var _LivePreview = require('./Components/LivePreview');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement("div", null, _react2.default.createElement(_SlideShow.SlideShow, null), _react2.default.createElement(_LivePreview.LivePreview, null)), document.getElementById('content'));