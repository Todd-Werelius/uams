(function ( angular ) {
  'use strict';

  var permissions = {
    1 : {
      verifiedUser : false,
      paidUser     : false,
      admin        : false,
      editor       : {
        all:false
      },
      author       : {
        all:false
      },
      mwt          : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJVYmVteSIsImlhdCI6MTQ0Nzc5NjE2OCwiZXhwIjoxNDc5MzMyODA3LCJhdWQiOiJ1YmVteS5jb20iLCJzdWIiOiJhLnVzZXJAc29tZWRvbWFpbi5jb20iLCJGaXJzdCI6IlRvZGQiLCJMYXN0IjoiV2VyZWxpdXMiLCJDb3VudHJ5IjoiVVNBIiwiUmVnaW9uIjoiV0EiLCJDaXR5IjoiRXZlcmV0dCJ9.URxwYis3scfhCkAIDcs5-7nybYsFCyiD58VI8YhCWEo"
    }
  };

  var users = {
    "a.user@email.no" : {
      id          : "1",
      pwdToken    : "xyz",
      signedIn    : false
    }
  };

  // Connect this mock to the auth module the app is using
  angular.module('authMock', ['auth', 'ngMockE2E']);

  // Add a mocked Auth REST API
  angular.module('authMock').run(function($httpBackend){

    back.when('GET','https://r.mydomain.com/user/auth')
      .respond(function(method,url,data,headers,params){
        return [401,"data",{"x-extraSpecial":"whatsup!"},"response msg"];
      });

  });

}( window.angular ));