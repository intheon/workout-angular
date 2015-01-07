angular.module("workout", []).controller(
	"root", ["$scope", function($scope)
	{
		$scope.exercises = 
		[
		  {name: "Cross Trainer", calories: "16.6"},
		  {name: "Running", calories: "11"},
		  {name: "Rowing", calories: "10"},
		  {name: "Stepper", calories: "7"}
		];

		$scope.addExercise = function()
		{
			$scope.exercises.push({name: "Exercise Name", calories: 0});
		}
	}]);