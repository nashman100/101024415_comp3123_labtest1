var fs = require('fs');
var path = require('path');

const directory = path.join(__dirname, 'Logs');

try{
    if (fs.existsSync(directory)){
    
        const files = fs.readdirSync(directory);

        for (const file of files){
            const filePath = path.join(directory, file);
            fs.unlinkSync(filePath);
            console.log(`delete files...${file}`);    
        }

            fs.rmdirSync(directory);
            console.log(`Deleted directory ${directory}`);

        } else{
        console.log('Directory does not exist!');
    }
} catch(err){
    console.error(`Error: ${err.message}`);
}
