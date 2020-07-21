"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var resolveRoutes = function resolveRoutes(route) {
  if (route.length <= 3) {
    var validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }

  return route;
};

var _default = resolveRoutes;
exports["default"] = _default;