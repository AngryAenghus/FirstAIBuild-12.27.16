var HelperFUnctions = require('HelperFunctions');

var roleBuilder = require('roleBuilder');
var roleHarvester = require('roleHarvester');
var roleUpgrader = require('roleUpgrader');
var roleCarrier = require('roleCarrier');

function CreepSpawner(CreepPopulation)  {
  this.CreepPopulation = CreepPopulation;
};

CreepSpawner.prototype.load = function(creep) {
    var loadedCreep = null;
    var role = creep.memory.role;
  if(!role) {
    role = creep.name.split('-')[0];
  }
  
  switch(role) {
    case 'roleBuilder':
      loadedCreep = new roleBuilder(creep);
    break;
      
    case 'roleHarvester':
      loadedCreep = new roleHarvester(creep);
    break;
      
    case 'roleUpgrader':
      loadedCreep = new roleUpgrader(creep);
    break;
      
    case 'roleCarrier':
      loadedCreep = new roleCarrier(creep);
    break;
  }
  
  if(!loadedCreep)  {
    return false;
  }
  
  HelperFunctions.entend(loadedCreep)
  loadedCreep.init();
  
  return loadedCreep;
};

CreepSpawner.prototype.new = function(creepType, spawn) {
  var abilities = [];
  var id = new Date().getTime();
  var creepLevel = this.getTotalPopulation() / this.population.populationLevelMultiplier;
  var resourceLevel = this.
