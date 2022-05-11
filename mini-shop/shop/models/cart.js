const Product = require('./generic')

class Cart{

    static #filePath = "./data/cart.json"

    static get filePath(){
        return this.#filePath
    }

    static add(id){
        const product = Product.fetch(id)
        Cart.#storeInFile(product)
    }

    static #storeInFile(product){

        FileManager.getFileContent( Product.#filePath, products =>{
            products.push(product)
            fileSystem.writeFile(Product.#filePath, JSON.stringify(products), (error)=>{
                console.log(error)
            })
        })

    }

    static remove(id){

    }

    static #fetch(id){

    }

    static fetchAll(callback){
        FileManager.getFileContent(Product.#filePath,callback)
    }

    static purchase(){

    }
}