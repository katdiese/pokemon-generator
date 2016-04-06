app.controller('pokemonController', ['$scope', '$http', function($scope, $http) {
  $scope.newPokemon = function() {
    $scope.pokeName = "";
    $scope.pokeImage = "";
    $scope.loading = true;
    var random = Math.floor((Math.random() * 739) + 1);
    $http.get('http://pokeapi.co/api/v2/pokemon/' + random).then(function(data) {
    $scope.pokeName = data.data.name;
    $scope.pokeImage = data.data.sprites.front_default;
})
  }
  $scope.newAbility = function() {
    $scope.abilityLoad = true;
    $scope.ability = "";
    var random = Math.floor((Math.random() * 639) + 1);
    $http.get('http://pokeapi.co/api/v2/move/' + random).then(function(data) {
      $scope.ability = data.data.name;
    })
  }
}]);
