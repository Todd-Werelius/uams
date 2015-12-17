(function (angular) {
  'use strict';

  var APP_ID  = "app";

  angular.module( APP_ID )
    .value('CONSTANTS',{
      brand   : "Ubemy",
      restURL : "localhost:3030"
    });

}(window.angular));