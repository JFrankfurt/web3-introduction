import "core-js/modules/es6.promise";
export default (function (_ref) {
  var accounts = _ref.accounts;
  return new Promise(function (resolve, reject) {
    return accounts(function (error, accounts) {
      return error ? reject(error) : resolve(accounts);
    });
  });
});