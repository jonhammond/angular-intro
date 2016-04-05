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

app.controller('randomNumberPicker', ['$scope', function($scope) {
    $scope.number= 5;
    $scope.pickRandomNumber = function() {
      $scope.number = Math.floor(Math.random() * 10) +1};
}]);

app.controller('reverseText', ['$scope', function($scope) {
    $scope.revString = '';
    $scope.reverseText = function(string) {
      var reversed = string.split('').reverse().join('');
      $scope.revString = reversed;
    }
}])

app.controller('PingPongController', ['$scope', function($scope) {
    $scope.scorePlayer1 = 0;
    $scope.scorePlayer2 = 0;
    $scope.serveCount = 0;
    $scope.reset = function() {
      $scope.scorePlayer1 = 0;
      $scope.scorePlayer2 = 0;
    };
}])

app.controller('MouseEnterController', ['$scope', '$timeout', function($scope, $timeout) {
    var colorArray = [];
    $scope.enterCount = 0;
    $scope.randomColor = function() {
      var x=Math.round(0xffffff * Math.random()).toString(16);
      var y=(6-x.length);
      var z="000000";
      var z1 = z.substring(0,y);
      var color = "#" + z1 + x;
      $scope.color = {'background-color': color};
      // console.log('color:',color)
      colorArray.push(color);
      console.log('colorArray:', colorArray);
      return color;
    };
    $scope.replay = function() {
      var displayColors = function () {
        for (var i=0; i<colorArray.length; i++) {
        var prevColor = colorArray[i];
        }
        console.log(prevColor);
        $timeout(function() {displayColors();}, 1000)
      };
    }
}])


app.controller('ContactsController', ['$scope', function($scope) {
  $scope.myContacts = [
    {
      fName: "Domingo",
      lName: "Ayala",
      email: "domingo@beisbol.com",
      phone: "(303) 333-3333",
    },
    {
      fName: "Harry",
      lName: "Potter",
      email: "harrypotter@hogwarts.com",
      phone: "(111) 111-1111",
    },
    {
      fName: "Joe",
      lName: "Sakic",
      email: "superjoe@hockey.com",
      phone: "(444) 444-4444",
    },
    {
    fName: "Joe",
    lName: "Dirt",
    email: "joe@dirt.com",
    phone: "(222) 222-2222",
    }
  ]
}])
