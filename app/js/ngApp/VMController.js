(function (angular) {
  'use strict';

  angular.module( "app")
  .controller( "vmCtrl", function(appStates,CONSTANTS) {
      var vmc = this;

      vmc.getRouteName = function() {
        return appStates.title();
      };

      vmc.seoTitle = function() {
        return CONSTANTS.brand + " : " + appStates.seoTitle();
      };

      vmc.seoContent = function() {
        return CONSTANTS.brand + " : " + appStates.seoContent();
      };

      vmc.brandName = function(){
        return CONSTANTS.brand;
      };

      vmc.doNothing = function(event) {

      };

      vmc.stopPropagation = function(event) {
        event.stopPropagation();
      };

      vmc.changeStopPropagation = function(event) {
        event.stopPropagation();
      };

      vmc.truthy = true;
      vmc.falsey = false;
    });

}(window.angular));