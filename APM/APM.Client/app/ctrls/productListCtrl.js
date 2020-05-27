(function () {
    angular.module('app')
        .controller('ProductListCtrl', ['$scope', function ($scope) {
            var model = this;
            model.title = 'enm';
            model.products = [
                {
                    "productId": 1,
                    "productName": 'Leaf Rake',
                    "productCode": 'CGN-0011',
                    "releaseDate": "March 19, 2009",
                    "description": "Leaf rake with 48 inch wooden handle.",
                    "price": 19.95
                },
                {
                    "productId": 2,
                    "productName": 'Garden Cart',
                    "productCode": 'CGN-0013',
                    "releaseDate": "March 19, 2009",
                    "description": "Leaf rake with 48 inch wooden handle.",
                    "price": 19.95
                },
                {
                    "productId": 3,
                    "productName": 'Hammer',
                    "productCode": 'CGN-0014',
                    "releaseDate": "March 19, 2009",
                    "description": "Leaf rake with 48 inch wooden handle.",
                    "price": 19.95
                }
            ];
        }]);
}());
