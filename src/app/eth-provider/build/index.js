import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.array.index-of";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.promise";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.object.define-property";
import "regenerator-runtime/runtime";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import getContract from "./getContract";
import getAccounts from "./getAccounts";
import getWeb3 from "./getWeb3";
export function EthProvider(Component) {
  function Wrapper(props, context) {
    var innerRef = props.innerRef,
        remainingProps = _objectWithoutProperties(props, ["innerRef"]);

    return React.createElement(WithWeb3, {
      render: function render(props) {
        return React.createElement(Component, _extends({}, remainingProps, props, {
          ref: innerRef
        }));
      }
    });
  }

  Wrapper.displayName = "withWeb3(".concat(Component.displayName, ")");
  Wrapper.WrappedComponent = Component;
  hoistNonReactStatic(Wrapper, Component);
  return Wrapper;
}

var WithWeb3 =
/*#__PURE__*/
function (_Component) {
  function WithWeb3() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, WithWeb3);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithWeb3)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: null,
      web3: null,
      accounts: null,
      contract: null
    }), _temp));
  }

  _createClass(WithWeb3, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var web3, accounts, contract;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return getWeb3();

              case 3:
                web3 = _context.sent;
                _context.next = 6;
                return getAccounts(web3);

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return getContract(web3, this.props.contractDefinitions);

              case 9:
                contract = _context.sent;
                this.setState({
                  web3: web3,
                  accounts: accounts,
                  contract: contract
                });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          web3 = _this$state.web3,
          accounts = _this$state.accounts,
          contract = _this$state.contract,
          error = _this$state.error;
      return web3 && accounts ? this.props.render({
        accounts: accounts,
        contract: contract,
        error: error,
        web3: web3
      }) : this.props.renderLoading();
    }
  }]);

  _inherits(WithWeb3, _Component);

  return WithWeb3;
}(Component);

_defineProperty(WithWeb3, "defaultProps", {
  contractDefinitions: [],
  network: 'Kovan',
  renderLoading: function renderLoading() {
    return React.createElement("div", null, "modal");
  }
});