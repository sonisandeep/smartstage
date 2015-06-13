(function() {

    var UserController = function ($scope, $http) {
        // var person = {
        //     firstName: 'Sandeep',
        //     lastName: 'Soni',
        //     imageSource: 'http://vignette2.wikia.nocookie.net/p__/images/8/84/Spider-man-render-by-bobhertley-d5qlcde.png/revision/latest?cb=20140505164016&path-prefix=protagonist'
        // }

        var onUserComplete = function (response) {
            $scope.person = response.data;
            $http.get($scope.person.repos_url).then(onReposComplete , onError);
        };

        var onReposComplete = function(response) {
            console.log("Repos fetch complete" + JSON.stringify(response.data));
            $scope.repos = response.data;    
        }
        
        var onError = function (reason) {
            $scope.error = "User couldn't be fetched.";
        };
        
        $scope.search = function() {
            console.log('Username: ' + $scope.username);
            $http.get("https://api.github.com/users/" + $scope.username)
            .then(onUserComplete, onError);
        }
    };

    var app = angular.module("githubViewer", []);
    app.controller("UserController", ["$scope", "$http", UserController]);
}());

