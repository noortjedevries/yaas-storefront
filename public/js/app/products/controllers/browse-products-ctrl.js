'use strict';

angular.module('ds.products')
   .controller('BrowseProductsCtrl', [ '$scope', 'ProductSvc', '$stateParams', 'settings', function($scope, ProductSvc, $stateParams) {

   $scope.pageNumber = ($stateParams.pageNumber || 1);


   $scope.products = ProductSvc.query({pageNumber: ++$scope.pageNumber, pageSize: 5});

          $scope.addMore = function(){
               ProductSvc.query({pageNumber: ++$scope.pageNumber, pageSize: 5}).$promise.then(
                    function (products) {
                        if (products){
                            $scope.products = $scope.products.concat(products);
                        }
                    }
                );
            };

}]);
