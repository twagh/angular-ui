'use strict';
angular.module('phoneApp').config(function($stateProvider) {
  // An array of state definitions
  var states = [
    { 
      name: 'hello', 
      url: '/hello', 
      // Using component: instead of template:
      component: 'hello'  
    },
    
    { 
      name: 'about', 
      url: '/about', 
      component: 'about'
    },
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});

angular.module('phoneList').config(function($stateProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
  // An array of state definitions
  var states = [
    {
      name: 'phones',
      url: '/phones',
      component: 'phoneList',
      resolve: {
        phones: function(PhoneService) {
          return PhoneService.getAllPhones();
        }
      }
    }
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});

angular.module('phoneDetail').config(function($stateProvider) {
  // An array of state definitions
  var states = [
    {
      name: 'phones.phoneDetail',
      url: '/{phoneId}',
      component: 'phoneDetail',
      resolve: {
        phone: function(PhoneService, $stateParams) {
          return PhoneService.getPhone($stateParams.phoneId)
        }
      }
    }
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});