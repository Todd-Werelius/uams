(function (angular) {
  'use strict';

  angular.module('auth',[]);
  angular.module('auth').factory('Authenticate',['',function($http){
    'use strict';

    var mwt;
    var permissions;

    return {
      authorize : function authorize() {

        $http.defaults.headers.common['mwt'] = mwt;

        return $http.get('https://rest.mydomain.com/user/authorize')
          .then(function(response){

            var mwt = $http.defaults.headers.common['mwt'];

          },function error(response){

          });
      },
      signin : function signIn(user,password) {
        return $http.post('https://rest.mydomain.com/user/authorize',{user:user,password:password})
          .then(function(response){

            $http.defaults.headers.common['mwt'] = response.data.token;

          },function error(response){

          });
      },
      signout : function signOut() {
        return $http.get('/user/signout')
          .then(function(response){

            $http.defaults.headers.common['mwt'] = '';

          },function error(response){

          });
      }

    };
  }]);

}(window.angular));


