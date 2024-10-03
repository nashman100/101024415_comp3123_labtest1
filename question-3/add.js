var fs = require('fs');
var path = require('path');

const directory = path.join(__dirname, 'Logs');

try{
    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory);
        console.log(`Folder created ${directory}`);
    } else{
        console.log(`Folder exists ${directory}`);
    }

    for( let i = 0; i < 10; i++){
        const name = `log${i}.txt`;
        const directoryPath = path.join(directory, name);
    
        fs.writeFileSync(directoryPath, 'Hello World!', 'utf-8');
        console.log(`${name}`);
    }
} catch(err){
    console.error(`Error: ${err.message}`);
}
