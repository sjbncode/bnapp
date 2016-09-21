(function() {

  angular
    .module('adminApp')
    .service('authentication', authentication);
  authentication.$inject = ['$http', '$window'];

  function authentication($http, $window) {

    var token_key = 'bnapp-token';
    var saveToken = function(token) {
      $window.localStorage[token_key] = token;
    };

    var getToken = function() {
      return $window.localStorage[token_key];
    };

    var isLoggedIn = function() {
      var token = getToken();

      if (token) {
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    var currentUser = function() {
      if (isLoggedIn()) {
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return {
          email: payload.email,
          name: payload.name
        };
      }
    };

    register = function(user) {
      return $http.post('/api/register', user).success(function(data) {
        saveToken(data.token);
      });
    };

    login = function(user) {
      return $http.post('/api/login', user).success(function(data) {
        saveToken(data.token);
      });
    };

    logout = function() {
      $window.localStorage.removeItem(token_key);
    };

    return {
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      register: register,
      login: login,
      logout: logout
    };
  }


})();