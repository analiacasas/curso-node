const { demandOption } = require('yargs');

const argv = require('yargs')
.options({
    'b':{
        alias: 'base',
        type: 'number',
        demandOption: true
    },
    'l':{
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true
    },
    'h':{
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: true
    }
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser numero';
    }
    if(isNaN(argv.h)){
        throw 'la cantidad hasta tiene que ser numero';
    }
    return true;
})
.argv;

module.exports = argv;