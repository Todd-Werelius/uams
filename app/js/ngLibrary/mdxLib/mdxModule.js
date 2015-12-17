(function ( angular ) {
  "use strict";

  var BACKGROUND = {
    name : "mdxBackground",
    css  : "background-color"
  };
  var COLOR = {
    name : "mdxColor",
    css  : "color"
  };
  var FILL = {
    name : "mdxFill",
    css  : "fill"
  };
  var ATTR = {
    PALETTE   : 'p:',
    THEME     : 't:',
    ALPHA     : 'a:',
    MALFORMED : undefined
  };
  var HUES = {default : 'default', 'hue-1' : 'hue-1', 'hue-2' : 'hue-2', 'hue-3' : 'hue-3'};
  var SHADES = {
    '50'   : '50', '100' : '100', '200' : '200', '300' : '300', '400' : '400',
    '500'  : '500', '600' : '600', '700' : '700', '800' : '800', 'a100' : 'A100',
    'a200' : 'A200', 'a400' : 'A400', 'a700' : 'A700'
  };
  var INTENTIONS = {primary : 'primary', accent : 'accent', warn : 'warn', background : 'background'};
  var mdxThemeProvider;

  angular.module( 'mdxUtil', ['ngMaterial'] )
    .config( function ( $mdThemeProvider ) {
      mdxThemeProvider = $mdThemeProvider;
    })
    .directive( BACKGROUND.name, function () {
      return {
        restrict : 'A',
        link     : function ( scope, element, attrs ) {
          //noinspection JSUnresolvedVariable
          applyCSS( BACKGROUND, attrs[BACKGROUND.name], element,mdxThemeProvider._THEMES,mdxThemeProvider._PALETTES );
        }
      }
    } )
    .directive( COLOR.name, function () {
      return {
        restrict : 'A',
        link     : function ( scope, element, attrs ) {
          //noinspection JSUnresolvedVariable
          applyCSS( COLOR, attrs[COLOR.name], element,mdxThemeProvider._THEMES,mdxThemeProvider._PALETTES );
        }
      }
    } )
    .directive( FILL.name, function () {
      return {
        restrict : 'A',
        link     : function ( scope, element, attrs ) {
          //noinspection JSUnresolvedVariable
          applyCSS( FILL, attrs[FILL.name], element,mdxThemeProvider._THEMES,mdxThemeProvider._PALETTES );
        }
      }
    } );
  /*
   [t:name|p:name](t:default) [intention(primary)] [hue(default):shade(primary)]
   */
  function applyCSS( directive, input, element, themes, palettes ) {
    var shade;
    var attrs = parse( input );

    if ( ATTR.THEME === attrs.source ) {
      if ( (themes[attrs.name]) ) {
        if ( !attrs.shade ) {
          attrs.shade = themes[attrs.name].colors[attrs.intention].hues[attrs.hue];
        }
        shade = palettes[themes[attrs.name].colors[attrs.intention].name][attrs.shade];
      }
    } else if ( ATTR.PALETTE === attrs.source ) {
      if ( palettes[attrs.name] ) {
        shade = palettes[attrs.name][attrs.shade];
      }
    }

    if ( shade ) {
      element.css( directive.css, 'rgb(' + shade.value[0] + ',' + shade.value[1] + ',' + shade.value[2] + ')' );
    } else {
      reportError( "Can't understand attributes for", directive.name, input );
    }
  }

  function parse( input ) {
    var attrs = {
      source : ATTR.MALFORMED
    };
    input = input.toLowerCase();

    if ( -1 !== input.indexOf( ATTR.PALETTE ) ) {
      attrs.name = (input.split( ATTR.PALETTE )[1]).split( ' ' )[0];
      attrs.source = ATTR.PALETTE;
      attrs.shade = '500';
      attrs.hue = undefined;

      angular.forEach( input.split( " " ), function ( value ) {
        if ( SHADES[value] ) {
          attrs.shade = SHADES[value];
        }
      } );

    } else {

      attrs.source = ATTR.THEME;
      attrs.name = 'default';
      attrs.intention = 'primary';
      attrs.hue = 'default';

      if ( -1 !== input.indexOf( ATTR.THEME ) ) {
        attrs.name = (input.split( ATTR.THEME )[1]).split( ' ' )[0] || 'default';
      }

      angular.forEach( input.split( " " ), function ( value ) {
        if ( SHADES[value] ) {
          attrs.shade = value;
          attrs.hue = undefined;
        } else if ( HUES[value] ) {
          if ( !attrs.hue.value ) {
            attrs.hue = value;
          }
        } else if ( INTENTIONS[value] ) {
          attrs.intention = value;
        }
      } );
    }
    return attrs;
  }

  function reportError( directive, input ) {
    console.error( "%s can't understand attributes='%s'", directive, input );
    console.log( '  usage %s="[' + ATTR.THEME + ':name|' + ATTR.PALETTE + ':name](default) [intention(primary)] [hue(default):shade(500)]"', name );
    console.log( '    acceptable intentions : primary,accent,warn,background' );
    console.log( '    acceptable hues       : default,hue-1,hue-2,hue-3' );
    console.log( '    acceptable shades     : 50,100,200,300 ... etc' );
  }

}( window.angular ));

// Save mdThemeProvider Couldn't get access to _PALETTES any other way
/*.provider( 'mdx', function ( $mdThemingProvider ) {
 //noinspection JSUnusedGlobalSymbols
 return {
 $get : function () {
 return {
 mdxThemeProvider : $mdThemingProvider
 }
 }
 }
 } );*/
