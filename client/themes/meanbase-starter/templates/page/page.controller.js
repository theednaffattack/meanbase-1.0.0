'use strict';
(function(){
	angular.module('meanbaseApp').controller('PageCtrl', PageCtrl);

	PageCtrl.$inject = ['$scope'];
	function PageCtrl($scope) {
		$scope.page = window.meanbaseGlobals.page;
	}
})();

