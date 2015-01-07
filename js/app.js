angular.module("workout", ["ui.router"])

  .config([
  	"$stateProvider",
  	"$urlRouterProvider",
  	function($stateProvider, $urlRouterProvider)
  	{
  	  $stateProvider
  	    .state("home", {
  	    	url: "/home",
  	    	templateUrl: "/home.html",
  	    	controller:"root"
  	    });

  	  $urlRouterProvider.otherwise("home");
  	}]);

  .factory("posts", [function(){

    var o = {
  	  posts: []
  	};

  	return o;

  }])

  .controller(
	"root", ["$scope", 'posts', function($scope, posts)
	{
	  $scope.exercises = 
	  [
	    {name: "Cross Trainer", calories: "16.6"},
	    {name: "Running", calories: "11"},
	    {name: "Rowing", calories: "10"},
	    {name: "Stepper", calories: "7"}
	  ];

	  $scope.posts = posts.posts;

	  $scope.addExercise = function()
	    {
	      if ( !$scope.calories || $scope.calories == ""){return}
		  else if (!$scope.exercise || $scope.exercise == ""){return}
		  else
		  {
		    $scope.exercises.push({
		      name: $scope.exercise,
		      calories: $scope.calories
		    });
		    $scope.exercise = "";
		    $scope.calories = "";
		  }
		}
	}]);