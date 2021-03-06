"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var allPromises = function allPromises(action, promises) {
  return Promise.all(promises.map(action));
};

var _default = allPromises;
exports.default = _default;