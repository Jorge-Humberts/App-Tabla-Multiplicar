const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                demandOption: false,
                default:false,
                describe: 'Muestra la tabla en la consola'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default: 10,
                describe:'Muestra hasta que numero quieres multiplicar'
            })
            .check((argv,options) => {
               if(isNaN(argv.b) || isNaN(argv.h)){
                   throw 'Tiene que ser un número'
               }
               return true; 
            }) 
            .argv;

module.exports = argv;