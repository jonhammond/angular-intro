var app = angular.module('madLibs', []);

app.controller("MadLibsController", function($scope) {
    $scope.boyName="Billy";
    $scope.adjective="Smoky";
    $scope.noun1="Pianos";
    $scope.noun2="Toes";
    $scope.insect="Roley Poleys";
    $scope.noun3="Sweaters";
    $scope.verb="Squirts";
    $scope.shows=0;
  }
);