angular.module("workout", [])

.factory("exercises", [function()
{
	var o = {
		exercises: [
			{
				name: "Cross Trainer",
				calories: "16.6",
				upvotes: 0
			},
			{
				name: "Running",
				calories: "11",
				upvotes: 0
			},
			{
				name: "Rowing",
				calories: "10",
				upvotes: 0
			},
			{
				name: "Stepper",
				calories: "7",
				upvotes: 0
			}
	    ]
	};
	return o;
  }])
.controller("root", [
  	"$scope",
  	"exercises",
  	function($scope, exercises)
	{
		$scope.exercises = exercises.exercises;
		$scope.addExercise = function()
		{
			if (!$scope.calories || $scope.calories == "")
			{
				return
			}
			else if (!$scope.exercise || $scope.exercise == "")
			{
				return
			}
			else
			{
				$scope.exercises.push(
				{
					name: $scope.exercise,
					calories: $scope.calories,
					upvotes: 0,
  					comments: [
    					{author: 'Joe', body: 'Cool post!', upvotes: 0},
    					{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  					]
				});
				$scope.exercise = "";
				$scope.calories = "";
			}
		}
		$scope.incrementUpVotes = function(item)
		{
			item.upvotes += 1;
		}
	}])
