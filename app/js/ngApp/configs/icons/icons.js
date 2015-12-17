(function ( angular ) {
  'use strict';

  var APP_ID = "app";

  //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  angular.module( APP_ID ).config(function($mdIconProvider) {
    $mdIconProvider.defaultIconSet( 'assets/icons.svg' );
  });

}( window.angular ));
