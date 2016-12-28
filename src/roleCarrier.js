var roleCarrier = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var energySources = creep.room.find(RESOURCE_ENERGY);
            if(creep.pickup(energySources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(energySources[0]);
            }
        }
        else if(Game.creeps['roleUpgrader'].energy < Game.creeps['roleUpgrader'].energyCapacity) {
            if(creep.transfer(Game.creeps['roleBuilder'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.creeps['roleBuilder']);
            }
        }
    }
};

module.exports = roleCarrier;
