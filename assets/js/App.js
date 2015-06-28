var app = angular.module('offCanvasShare', []);
app.controller('offCanvasShareCtrl',function($scope) {
//Copy From Here
$scope.pageUrl = window.location.href;
$scope.pageTitle = document.title;
$scope.pageHost = window.location.host;
$scope.itsopenc = "";
$scope.itsopen = function() {
if ($scope.itsopenc == "offcanvasShareContainer-open") {
$scope.itsopenc = "";
} else {
$scope.itsopenc = "offcanvasShareContainer-open";
}
}
$scope.shareBtn = 'Share now';
$scope.shareBtnClass = 'container-toggle';
$scope.namechange = function() {
 if ($scope.shareBtn == 'Share now' && $scope.shareBtnClass == 'container-toggle') {
 	$scope.shareBtn = 'Close';
 	$scope.shareBtnClass = 'container-toggle-close';
 } else {
 	$scope.shareBtn = 'Share now';
 	$scope.shareBtnClass = 'container-toggle';
}
}

//Copy Till Here
//------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------NOTE--------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------//
//NOTE: Copy the entire thing If you dont have any controller, or else just include this variables in your baseController
//Cheere - Vamsi Srikanth S

});