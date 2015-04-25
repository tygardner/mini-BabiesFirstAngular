var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){
	$scope.name = "Tyler";
	$scope.friends = ['Emily', 'Harper', 'Jake', 'Jon'];

	$scope.addFriend = function(){
		$scope.friends.push($scope.friendName);
		$scope.friendName = '';
	}







});




