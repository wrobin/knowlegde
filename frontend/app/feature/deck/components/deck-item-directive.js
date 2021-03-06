'use strict';

module.exports = angular.module('kd.deck.deckItem', [
    require('feature/deck/components/deck-remove-directive').name
]).directive('deckItem', deckItem);

function deckItem() {
    return {
        restrict: 'E',
        template: require('feature/deck/components/deck-item-directive.html'),
        scope: {
            deck: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

    }
}