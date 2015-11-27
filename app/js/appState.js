(function ( angular ) {
  'use strict';
  var states = {
    landing   : {
      params     : {
        url         : "/",
        templateUrl : "views/landing.html"
      },
      route      : "Landing",
      seoTitle   : "Real Time Photography Destination Guides",
      seoContent : "GPS Guided Photography Tours"
    },
    courses   : {
      params     : {
        url         : "/destinations",
        templateUrl : "views/destinations.html"
      },
      route      : "Destinations",
      seoTitle   : "1000+ On-Demand Destinations",
      seoContent : "Inspirational Photography Destinations"
    },
    themes   : {
      params     : {
        url         : "/themes",
        templateUrl : "views/themes.html"
      },
      route      : "Themes",
      seoTitle   : "ngMaterial Themes Lecture",
      seoContent : ""
    },

    layouts   : {
      params     : {
        url         : "/layouts",
        templateUrl : "views/layouts.html"
      },
      route      : "Layouts",
      seoTitle   : "ngMaterial Layout Lecture",
      seoContent : ""
    }
  };

  //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  angular.module( "app" ).provider( 'appStates', function ( $stateProvider, $urlRouterProvider ) {

    this.register = function () {
      $urlRouterProvider.otherwise( "/" );

      angular.forEach( states, function ( myState, key ) {
        myState.seoTitle   = myState.seoTitle || "";
        myState.seoContent = myState.seoContent || myState.seoTitle;

        $stateProvider.state( key, myState.params );
      } );
    };

    //noinspection JSUnusedGlobalSymbols
    this.$get = function ( $state ) {
      var state = $state;

      return {
        name       : function () {
          return state.current.name;
        },
        title      : function () {
          return states[state.current.name].route;
        },
        seoTitle   : function () {
          return states[state.current.name] ? states[state.current.name].seoTitle : "";
        },
        seoContent : function () {
          return states[state.current.name] ? states[state.current.name].seoContent : "";
        }
      }
    };

  } );

}( window.angular ));
