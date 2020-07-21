"use strict";

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener('load', _routes["default"]);
window.addEventListener('hashchange', _routes["default"]);