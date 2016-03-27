// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = "Exercises!";
  $scope.avalanchePlayers = [
    {fname: "Joe", lname: "Sakic"},
    {fname: "Peter", lname: "Forsberg"},
    {fname: "Patrick", lname: "Roy"},
    {fname: "Claude", lname: "Lemiuex"},
  ];
  $scope.broncosPlayers = [
    {fname: "John", lname: "Elway"},
    {fname: "Alfred", lname: "Williams"},
    {fname: "Terrell", lname: "Davis"},
    {fname: "Champ", lname: "Bailey"},
  ];
  $scope.rockiesPlayers = [
    {fname: "Eric", lname: "Young"},
    {fname: "Dante", lname: "Bichette"},
    {fname: "Andres", lname: "Galaragga"},
    {fname: "Larry", lname: "Walker"},
    ];
}]);
