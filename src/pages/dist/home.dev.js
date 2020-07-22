"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("../utils/getData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Home = function Home() {
  var characters, view;
  return regeneratorRuntime.async(function Home$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _getData["default"])());

        case 2:
          characters = _context.sent;
          view = "\n        <div class=\"Characters\">\n            ".concat(characters.results.map(function (character) {
            return "\n                <article class=\"Characters-item\">\n                <a href=\"#/".concat(character.id, "/\">\n                    <img src=\"").concat(character.image, "\" alt=\"").concat(character.name, "\">\n                    <h2>").concat(character.name, "</h2>\n                </a>\n                </article>\n            ");
          }).join(''), "\n        </div>\n    ");
          return _context.abrupt("return", view);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = Home;
exports["default"] = _default;