'use strict';

require('./card-list-directive.less');

module.exports = angular.module('kd.card.cardList', [
    require('components/card/services/card-store').name,
    require('components/card/components/card-item-directive').name
]).directive('cardList', cardList);

function cardList(CardStore) {
    return {
        restrict: 'E',
        template: require('components/card/components/card-list-directive.html'),
        scope: {
            deckId: '='
        },
        controller: controllerFn,
        controllerAs: 'vm',
        bindToController: true
    };

    function controllerFn($scope) {

        var vm = this;

        $scope.$watch('deckId', init);

        CardStore.on('add', init);
        CardStore.on('update', init);
        CardStore.on('remove', init);

        init();

        function init() {
            console.log(vm.deckId);
            vm.cards = _.filter(CardStore.getAll(), function (card) {
                return card.deckId === vm.deckId;
            });
        }

    }
}