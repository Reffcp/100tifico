"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getHash = function getHash() {
  return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
};

var _default = getHash;
exports["default"] = _default;