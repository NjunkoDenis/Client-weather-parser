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
	
	$scope.getWeather = function(name, weatherType){
		
		var request;
		
		if(weatherType == "current"){
			
			if(name != ''){
			
				request = 'http://api.openweathermap.org/data/2.5/weather?q='+ name +'&appid=5121dc958a0d08109bbec25ecdc2029b';
				
				$scope.tableForecast = {
		
					show: false
		
				};
				
				$scope.tableCurrent = {
		
					show: true
		
				};
				
				$http.get(request).success(function(data){
				
					$scope.weather = data;
				
				});
			}
			else{
				$scope.tableForecast = {
		
					show: false
		
				};
				
				$scope.tableCurrent = {
		
					show: false
		
				};
			}
		}
		else{
			
			request = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ name +'&mode=json&units=metric&cnt=7&appid=5121dc958a0d08109bbec25ecdc2029b';
			
			$scope.tableCurrent = {
	
				show: false
	
			};
			
			$scope.tableForecast = {
	
				show: true
	
			};
			
			$http.get(request).success(function(data){
			
				$scope.city = data.city;
				
				console.log(data.list);
				
				$scope.weathers = data.list;
					
			});
			
		}
		
		
		
	}
	
});