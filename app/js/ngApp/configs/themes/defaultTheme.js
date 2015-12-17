(function ( angular ) {
  'use strict';

  var APP_ID = "app";

  //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  angular.module( APP_ID )
    .config(function($mdThemingProvider) {
      var THEME_ID      = "default";
      var THEME_PREFIX  = APP_ID+"Default";
      //noinspection JSUnusedLocalSymbols
      var PRIMARY       = THEME_PREFIX+"PrimaryPalette";
      //noinspection JSUnusedLocalSymbols
      var ACCENT        = THEME_PREFIX+"AccentPallet";
      //noinspection JSUnusedLocalSymbols
      var WARN          = THEME_PREFIX+"WarnPalette";
      //noinspection JSUnusedLocalSymbols
      var BACKGROUND    = THEME_PREFIX+"BackgroundPalette";

      $mdThemingProvider.definePalette(PRIMARY,{
        "50"  : "#ffffff",
        "100" : "#ffffff",
        "200" : "#ffffff",
        "300" : "#ffffff",
        "400" : "#ffffff",
        "500" : "#ffffff",
        "600" : "#f0f0f0",
        "700" : "#e0e0e0",
        "800" : "#d1d1d1",
        "900" : "#c2c2c2",
        "A100" : "#5d5d5e",
        "A200" : "#ffffff",
        "A400" : "#ffffff",
        "A700" : "#e0e0e0",
        'contrastDefaultColor' : 'dark',
        'contrastDarkColors'   : ['50',
          '100','200','300','400','500','600','700',
          '800','A100','A200','A400'],
        'contrastLightColors': ['900','A700']
      });

      //noinspection JSUnresolvedFunction
      $mdThemingProvider.definePalette( ACCENT,{
          '50': '#ffb280',
          '100': '#ffa266',
          '200': '#ff934d',
          '300': '#ff8333',
          '400': '#ff741a',
          '500': '#ff6400',
          '600': '#e65a00',
          '700': '#cc5000',
          '800': '#b34600',
          '900': '#993c00',
          'A100': '#ffc199',
          'A200': '#ffd1b3',
          'A400': '#ffe0cc',
          'A700': '#803200',
          'contrastDefaultColor' : 'light'
        } );

      //noinspection JSUnresolvedFunction
      $mdThemingProvider.definePalette( WARN, {
          "50"   : '#ffffff',
          "100" : "#ffbdbd",
          "200" : "#ff8585",
          "300" : "#ff3d3d",
          "400" : "#ff1f1f",
          "500" : "#ff0000",
          "600" : "#e00000",
          "700" : "#c20000",
          "800" : "#a30000",
          "900" : "#850000",
          "A100" : "#ffffff",
          "A200" : "#ffbdbd",
          "A400" : "#ff1f1f",
          "A700" : "#c20000",
          'contrastDefaultColor' : 'light'
        } );

      //noinspection JSUnresolvedFunction
      $mdThemingProvider.theme( THEME_ID )
        .primaryPalette( PRIMARY, {
          'default' : '500',
          'hue-1'   : '600',
          'hue-2'   : '800',
          'hue-3'   : 'A100'
        } )
        .warnPalette( WARN, {
          'default' : '500',
          'hue-1'   : '300',
          'hue-2'   : '800',
          'hue-3'   : 'A200'
        } )
        .accentPalette( ACCENT, {
          'default' : '500',
          'hue-1'   : '100',
          'hue-2'   : '200',
          'hue-3'   : '600'

        }).backgroundPalette('blue-grey');
  });

}( window.angular ));