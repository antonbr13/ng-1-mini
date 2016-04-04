angular.module('babies', []);


angular.module('babies')
.controller('mainCtrl', function($scope) {

  $scope.addPlayer = function addPlayer(player) {
     $scope.players.push($scope.player);

    $scope.player = '';
  }



  $scope.players = [{name: "anton", league: "nba", skill: 7},
                    {name: "bobby", league: "mlb", skill: 7.5},
                    {name: "jake", league: "mls", skill: 8}];


});
