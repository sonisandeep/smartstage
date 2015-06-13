(function() {

    var UserController = function ($scope) {
        var person = {
            firstName: 'Sandeep',
            lastName: 'Soni',
            imageSource: 'http://vignette2.wikia.nocookie.net/p__/images/8/84/Spider-man-render-by-bobhertley-d5qlcde.png/revision/latest?cb=20140505164016&path-prefix=protagonist'
        }

        $scope.showMessage = function () {
            $scope.message = "Hello, World!";
        };

        $scope.saveMessage = function () {
            $scope.alert = "Saved...";
        };

        $scope.person = person;
    };

    var app = angular.module("githubViewer", []);
    app.controller("UserController", UserController);
}());

