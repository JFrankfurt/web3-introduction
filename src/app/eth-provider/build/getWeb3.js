import "core-js/modules/es6.promise";
import Eth from 'ethjs';

var resolveEth = function resolveEth(resolve, reject) {
  var _window = window,
      web3 = _window.web3;

  if (typeof web3 !== 'undefined') {
    resolve(new Eth(web3.currentProvider));
  } else reject('MetaMask not available.');
};

export default (function () {
  return new Promise(function (resolve, reject) {
    window.addEventListener('load', function () {
      return resolveEth(resolve, reject);
    });
    if (document.readyState === 'complete') resolveEth(resolve, reject);
  });
});