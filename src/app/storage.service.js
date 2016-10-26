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
    StorageService.isUserLoggedIn = isUserLoggedIn;
    StorageService.clearAll = clearAll;
    StorageService.setProfileImageUrl = setProfileImageUrl;


    function setToken(token) {
      localStorage.setItem("token", token);
    }
    function setUserData(user_info) {
      localStorage.setItem("user_info", user_info);
    }

    function setProfileImageUrl(profileImageUrl) {
      localStorage.setItem("profileImageUrl", profileImageUrl);
    }


    function clearAll() {
      localStorage.clear();
    }

    function getUserData() {
      return localStorage.getItem("user_info");
    }
    function getToken() {
      return localStorage.getItem("token");
    }

    function isUserLoggedIn() {
      console.log(localStorage.getItem("token")===null);
      if(localStorage.getItem("token")!==null){
        return true;
      } else {
        return false;
      }
    }

    return StorageService;

  }

}());
