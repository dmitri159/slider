angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [
  {
  	"image": "https:\/\/cdn3.hermo.my\/images\/banners\/april-skin-new-brand-arrival_1110x552_1444876087.jpg",
  }
  ];
  var currIndex = 0;
});