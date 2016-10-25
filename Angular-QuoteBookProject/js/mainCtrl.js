angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {
  // $scope.thisAppIsBroken = "This angular app is working";

  // console.log(dataService)
$scope.getQuotes = function(){
  $scope.quotes = dataService.getQuotes();
  };
  $scope.getQuotes();

$scope.deleteMe = function(textToDelete) {
  dataService.removeData(textToDelete);
}

$scope.addQuote = function() {
  var newQuote = {
    text: $scope.newQuoteText,
    author: $scope.newQuoteAuthor
  }
  if(dataService.addData(newQuote))
  {
    $scope.newQuoteText = "";
    $scope.newQuoteAuthor = "";
  }
};




});
