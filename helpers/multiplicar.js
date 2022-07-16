const fs = require('fs');

const crearArchivo = ( base = 5, hasta = 10, listar = false )=>{

    let salida = '';

    return new Promise((resolve, reject)=>{

        let salida = '';

        for(let numero = 1; numero <= hasta; numero ++){
            salida += (`${base}x${numero}= ${base*numero}\n`);
        }
        
        if(listar){
            console.log('==========================');
            console.log(`TABLA DEL ${base}`);
            console.log('==========================');
        console.log( salida );
        }
        
        // fs.writeFile( `tabla-${base}.txt`, salida, (err)=>{
        //     if (err) throw err;
        
        //     console.log (`tabla-${base}.txt creada`);
        // })
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt creada`);
    })
    
    // for(let numero = 1; numero <=10; numero ++){
    //     salida += (`${base}x${numero}= ${base*numero}\n`);
    // }
    
    // console.log( salida );
    
    // // fs.writeFile( `tabla-${base}.txt`, salida, (err)=>{
    // //     if (err) throw err;
    
    // //     console.log (`tabla-${base}.txt creada`);
    // // })
    
    // fs.writeFileSync(`tabla-${base}.txt`, salida);
    
    // console.log (`tabla-${base}.txt creada`);
}

module.exports = {
    crearArchivo
}