var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('cityController', function CityController($scope, $http){
	
	$http.get('https://raw.githubusercontent.com/NjunkoDenis/client-weather-parser/master/js/city.list.json').success(function(data){
				
		var cities = [];

		for(i = 0 ; i < 1000; i++){
			cities[i] = data[i];
		}
				
		$scope.cities = cities;
				
    });
});

weatherApp.controller('weatherController', function weatherController($scope, $http){
	
	$scope.getCurrentWeather = function(name){
		
		if(name != ''){
		
			$http.get('http://api.openweathermap.org/data/2.5/weather?q='+ name +'&appid=5121dc958a0d08109bbec25ecdc2029b').success(function(data){
					
					$scope.sidebar = {
						show: true
					};
					
					$scope.weather = data;
					
			});
		}
	}
	
});
