export default class JWT {
  constructor(AppConstants, $window) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
  }

  save(token) {
    return this._$window.localStorage[this._AppConstants.jwtKey] = token;
  }

  get() {
    return this._$window.localStorage[this._AppConstants.jwtKey];
  }

  destroy() {
    return this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
  }
}
