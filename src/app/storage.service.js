(function() {
  'use strict';
  angular.module('BlurAdmin')
  .factory('StorageService', StorageService);

  function StorageService(){
    var StorageService = {};

    StorageService.setToken = setToken;
    StorageService.setUserData = setUserData;
    StorageService.getUserData = getUserData;
    StorageService.getToken = getToken;

    function setToken(token) {
      localStorage.setItem("token", token);
    }
    function setUserData(user_info) {
      localStorage.setItem("user_info", user_info);
    }

    function getUserData() {
      return localStorage.getItem("user_info");
    }
    function getToken() {
      return localStorage.getItem("token");
    }

    function clearAll() {
      localStorage.clear();
    }

    return StorageService;

  }

}());
