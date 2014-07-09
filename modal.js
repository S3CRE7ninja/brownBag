angular.module('plunker', ['ui.bootstrap']);
var ModalDemoCtrl = function ($scope, $modal) {

  $scope.open = function ()
  {
    var modalInstance = $modal.open
    ({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      
      resolve: {items: function () {return $scope.items;}}
    });
  };
};

var ModalInstanceCtrl = function ($scope, $modalInstance) {
$scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
