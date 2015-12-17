(function ( angular ) {
  'use strict';
  var APP_ID         = "app";
  var APP_SERVICE_ID = "appStates";

  //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  angular.module( APP_ID )
    .constant('cStates',{
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
    })
    .config(function($stateProvider, $urlRouterProvider,cStates) {
      $urlRouterProvider.otherwise( "/" );

      angular.forEach( cStates, function ( myState, key ) {
        myState.seoTitle   = myState.seoTitle   || "";
        myState.seoContent = myState.seoContent || myState.seoTitle;

        $stateProvider.state( key, myState.params );
      });
    })
    .factory( APP_SERVICE_ID, function ($state,cStates) {
      return {
        name       : function () {
          return $state.current.name;
        },
        title      : function () {
          return cStates[$state.current.name].route;
        },
        seoTitle   : function () {
          return cStates[$state.current.name] ? cStates[$state.current.name].seoTitle : "";
        },
        seoContent : function () {
          return cStates[$state.current.name] ? cStates[$state.current.name].seoContent : "";
        }
      }
    });
}( window.angular ));