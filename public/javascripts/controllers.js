﻿var myVocabulary = angular.module('myVocabulary', []).controller('myVocabularyController', ["$scope", "$http",
    function ($scope, $http) {
        $scope.wordSearchModel = "";
        var uriGetWords = 'http://localhost:3000/todos';
        $http.get(uriGetWords).success(function (data) {
            $scope.wordCards = data;
        });
        /*if (($scope.wordSearchModel == "") || ($scope.wordSearchModel == undefined))
        {
            $http.get(uriGetWords).success(function (data) {
                $scope.wordCards = data;
            });
        }
        else
        {
            $http.get(uriGetWords+"/"+$scope.wordSearchModel).success(function (data) {
                $scope.wordCards = data;
            });
        }*/
    }]);
