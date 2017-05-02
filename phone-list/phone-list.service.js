angular.module('phoneList').service('PhoneService', function($http) {
	var service = {
		getAllPhones: function() {
			return $http.get('data/phones.json', { cache: true }).then(function(response) {
				return response.data;
			});
		},
		getPhone: function(id) {
			return $http.get('data/' + id + '.json', { cache : true }).then(function(response) {
				return response.data;
			});
		},
	};

	return service;
});