module.exports = angular.module('kd.card.CardEditService', [
    require('feature/card/services/card-store').name
]).service('CardEditService', CardEditService);

function CardEditService(CardStore) {

    this.editCard = editCard;

    function editCard(card) {
        // TODO api call

        CardStore.update(card);
    }

}