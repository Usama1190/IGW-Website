let app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'html/home.html'
    })
    .when('/products', {
        templateUrl: 'html/products.html'
    })
    .when('/services', {
        templateUrl: 'html/services.html'
    })
    .when('/about', {
        templateUrl: 'html/about.html'
    })
    .when('/contact', {
        templateUrl: 'html/contact.html'
    })
})

app.controller('myCtrl', function() {});