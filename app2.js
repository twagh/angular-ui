var app = angular.module('myApp', []);

app.controller('ctrl', function($http) {
	var temp = this;
	$http.get('data/phones.json').then(function(response) {
		temp.jsonD = response.data;
	});
});