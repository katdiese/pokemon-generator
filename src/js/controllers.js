app.controller('pokemonController', ['$scope', '$http', function($scope, $http) {
  $scope.greeting = "I am the pokemon controller! :)";
  $scope.randPokemon = function() {
    return Math.floor((Math.random() * 739) + 1);
  }
  $scope.randAbility = function() {
    return Math.floor((Math.random() * 400) + 1);
  }
  $scope.newPokemon = function() {
    $http.get('http://pokeapi.co/api/v2/pokemon/' + $scope.randPokemon()).then(function(data) {
    $scope.pokeName = data.data.name;
    $scope.pokeImage = data.data.sprites.front_default;
})
  }
  $scope.newAbility = function() {
    $http.get('http://pokeapi.co/api/v2/ability/' + $scope.randAbility()).then(function(data) {
      $scope.ability = data.data.name;
    })
  }
}]);
