const fs = require('fs');
const colors = require('colors');

 const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
       if(listar){
         console.log('================='.green);
         console.log(' TABLA DEL: '.cyan, base);
         console.log('================='.green);
     
         let salida = '';
         let consola = '';
         for(i = 1; i <= hasta; i++){
             salida += `${base} 'x' ${i} '=' ${ base * i }\n`;
             consola += `${base} ${'x'.green} ${i} ${'='.green} ${ base * i }\n`;
         }
     
         console.log(consola);
     
         fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
     
     
      }
      return `Se creo la base del ${base}`;


    } catch (error) {
       throw error
    }
  
 }

 module.exports = {
    crearArchivo: crearArchivo
 }