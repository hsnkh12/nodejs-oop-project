const fileSystem = require('fs');


class FileManager{

    static getFileContent = (path, callback) =>{

        fileSystem.readFile(path, (error, fileContent) =>{
    
            if (error){
                callback([])
            }
            else{
                callback(JSON.parse(fileContent))
    
            }
        })
    }

}

module.exports = FileManager