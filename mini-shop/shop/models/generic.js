const FileManager = require('../utils/fileManager')
const fileSystem = require('fs');
const dirName = require('../utils/path');
const path = require('path');
const filePath = path.join(dirName,'shop','models','data', 'products.json')

class Product{

    #id 
    #price  = 0
    #imageUrl = "images/default.png"

    constructor(title){
        this.title = title;
        this.#setId()
    }

    #setId(){
        this.#id = Math.floor(Math.random() * 100)
    }

    get id(){
        this.#id
    }

    get price(){
        return this.#price + '$'
    }

    set price(value){
        if (value>0 && value<100){
            this.#price = value
        }
        else{
            // Exception
        }
    }

    get imageUrl(){
        return this.#imageUrl
    }

    set imageUrl(value){
        if(value.includes('/images') && value.includes('.png')){
            this.#imageUrl = value
        }
        else{
            // Exception
        }
    }

    create(){

        if (this.#isValid){
            this.#storeInFile()
            return "Object stored in file."
        }
        else{
            // Exception
        }

    }
    
    #isValid(){
        if(this.title){
            return true
        }
        return false
    }

    #storeInFile(){

        FileManager.getFileContent( filePath, products =>{
            const id_ = this.id
            const desc = this.describe()
            products.push({"id": id_, "desc": desc})
            fileSystem.writeFile(filePath, JSON.stringify(products), (error)=>{
                console.log(error)
            })
        })
    }

    static delete(id){

    }

    static fetch(id){
        
    }

    static fetchAll(callback){
        FileManager.getFileContent(filePath,callback)
    }

}

module.exports = Product