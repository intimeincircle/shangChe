"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDidMount = useDidMount;
Object.defineProperty(exports, "useEffect", {
  enumerable: true,
  get: function get() {
    return _react.useEffect;
  }
});

var _react = require("react");

var _s = $RefreshSig$();

function useDidMount(function_) {
  _s();

  (0, _react.useEffect)(function () {
    var callback;
    var returnData = function_();

    if (typeof returnData === 'function') {
      callback = returnData;
    } else if (typeof returnData !== 'undefined') {
      returnData.then(function (c) {
        callback = c;
        return undefined;
      })["catch"](function (error) {
        console.error(error);
      });
    }

    return function () {
      if (typeof callback === 'function') {
        callback();
      }
    };
  }, []);
}

_s(useDidMount, "OD7bBpZva5O2jO+Puf00hKivP7c=");