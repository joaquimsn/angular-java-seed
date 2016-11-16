'use strict';

var directivesModule = require('./_index');

function DateController($scope) {
  var maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 20);

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: $scope.maxDate || maxDate,
    minDate: $scope.minDate,
    startingDay: 1,
    showWeeks: false
  };

  $scope.open = function() {
    $scope.popup.opened = true;
  };

  $scope.popup = {
    opened: false
  };
}

/**
 * @ngInject
 */
function inputDate() {
  return {
    restrict: 'E',
    templateUrl: '/extranetead-portal/partials/main/input-date',
    scope: {
      model: "=",
      minDate: "=",
      maxDate: "=",
      name: "=",
      required: "="
    },
    require: 'inputDate',
    controller: DateController,
    link: function (scope, element) {
    }
  };
}

directivesModule.directive('inputDate', inputDate);