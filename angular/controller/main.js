module.exports = function($scope, $http, SupCache){
	$http.get('./plugins.json')
		.success(function(data, source, headers, config){
			$scope.plugins = data;
			SupCache.put('plugins', data);
		})
}