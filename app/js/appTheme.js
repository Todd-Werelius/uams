(function ( angular ) {
  'use strict';

  //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  angular.module( "app" ).provider( 'appThemes', function ( $mdThemingProvider, $mdIconProvider ) {

    this.register = function () {
      //noinspection JSUnresolvedFunction
      $mdIconProvider
        .defaultIconSet( 'assets/icons.svg' );

      //noinspection JSUnresolvedFunction
      $mdThemingProvider.definePalette( 'app-main',
        {
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
          'contrastDarkColors'   : ['A100']
        } );

      //noinspection JSUnresolvedFunction
      $mdThemingProvider.definePalette( 'app-accent',
        {
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
          'A700': '#803200'
        } );

      //noinspection JSUnresolvedFunction
      $mdThemingProvider.definePalette( 'app-warn',
        {
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
          "A700" : "#c20000"
        } );

      //noinspection JSUnresolvedFunction
      $mdThemingProvider.theme( 'default' )
        .primaryPalette( 'app-main', {
          'default' : '500',
          'hue-1'   : '600',
          'hue-2'   : '800',
          'hue-3'   : 'A100'
        } )
        .warnPalette( 'app-warn', {
          'default' : '500',
          'hue-1'   : '300',
          'hue-2'   : '800',
          'hue-3'   : 'A200'
        } )
        .accentPalette( 'app-accent', {
          'default' : '500',
          'hue-1'   : '100',
          'hue-2'   : '200',
          'hue-3'   : '600'

        } );
    };

    //noinspection JSUnusedGlobalSymbols
    this.$get = function ( ) {
      return {
      }
    };

  } );

}( window.angular ));
