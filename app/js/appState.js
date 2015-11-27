(function ( angular ) {
  'use strict';
  var states = {
    landing   : {
      params     : {
        url         : "/",
        templateUrl : "views/landing.html"
      },
      route      : "Landing",
      seoTitle   : "Online Courses, Anytime, Anywhere!",
      seoContent : "SEO Content Landing Page"
    },
    courses   : {
      params     : {
        url         : "/courses",
        templateUrl : "views/courses.html"
      },
      route      : "Courses",
      seoTitle   : "30,000+ On-Demand Classes",
      seoContent : "SEO Content Courses"
    },
    mycourses : {
      params    : {
        url         : "/mycourses",
        templateUrl : "views/mycourses.html"
      },
      route      : "My Courses",
      seoTitle   : "Courses for Life, Become an Instructor",
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
    },
    grids   : {
    params     : {
      url         : "/grids",
        templateUrl : "views/grids.html"
    },
    route      : "Grids",
      seoTitle   : "ngMaterial Grid Lecture",
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
