//noinspection JSUnresolvedFunction
(function (angular) {
  'use strict';

  angular.module( 'app', ['ngMaterial','mdxUtil','ui.router'] )
    .config(function (appThemesProvider, appStatesProvider) {

      //appStatesProvider.register();
      //appThemesProvider.register();

    }).controller( 'AppCtrl', ['$rootScope','appStates',function($rootScope,appStates) {
      "use strict";
      var vmc   = this;
      var brand = "Mopholo";

      vmc.getRouteName = function() {
        return appStates.title();
      };

      vmc.seoTitle = function() {
        return brand + " : " + appStates.seoTitle();
      };

      vmc.seoContent = function() {
        return brand + " : " + appStates.seoContent();
      };

      vmc.brandName = function(){
        return brand;
      };
  }]);

}(window.angular));



