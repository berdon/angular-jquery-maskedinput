'use strict';
angular.module('angular-jquery-maskedinput', []).directive('mask', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attr, ctrl) {

            if (attr.mask) {
                elem.mask(attr.mask, { placeholder: attr.maskPlaceholder });
            }

            if (attr.ngModel) {
	            scope.$watch(attr.ngModel, function (v) {
	            	// Force remasking on model changes
	            	elem.mask(attr.mask, { placeholder: attr.maskPlaceholder });
	            });
	        }
        }
    };
});