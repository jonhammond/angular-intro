// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', ['$scope', function($scope) {
  $scope.sorts = '';
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
  $scope.cameras = [
  {
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: 'Nikon D810A',
    image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }]
  $scope.items= [
  { item: 'carrot', color: 'orange', type: 'food'},
  { item: 'watch', color: 'silver', type: 'accessory'},
  { item: 'sock', color: 'white', type:'clothing'}
  ];
  $scope.shit=[{shit: 'traffic'}]
}]);

app.controller('myController2', ['$scope', function($scope) {
    $scope.items=[{item: 'broccoli'}]
  }])

app.controller("MyFirstController", function($scope) {
  $scope.name="Severus Snape";
});