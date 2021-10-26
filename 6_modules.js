// modules
const { mediumaquamarine } = require('color-name');
const names = require('./2_names')
const sayHi = require('./3_utils')
const data = require('./4_alternative-flavor')

const john = names.john;
const peter = names.peter;

require('./5_mind-grenade');

sayHi('susan')
sayHi(john)
sayHi(peter) 

