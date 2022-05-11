const prompt = require('prompt-sync')();
const Product = require('./shop/models/generic')
const Tshirt = require('./shop/models/products')
class App{

    static main(){

      this.#home()
       
    }

    static #home(){
      console.log("1) Customer \n2) Admin \n3) exit")
      const naviagtion = prompt("number> ")

      this.#handleHomeNavigation(naviagtion)
    }

    static #handleHomeNavigation(naviagtion){

      switch (naviagtion){
        case "1":
          return this.#customer();
        case "2":
          return;
        default: 
          return this.#exit()
      }
    }

    static #customer(){
      console.log("1) Shoping \n2) Cart \n3) Back \n4) Exit")
      const naviagtion = prompt("number> ")
      this.#handleCustomerNavigation(naviagtion)
    }

    static #handleCustomerNavigation(navigation){

      switch(navigation){
        case "1":
          return this.#shopping;
        case "2":
          return;
        case "3":
          return this.#home();
        default: return this.#exit();
      }
    }

    static #shopping(){
        this.#displayProducts()
        console.log("\n")
        const naviagtion = prompt("product id> ")
    }

    static #displayProducts(){

      Product.fetchAll( products => {
        console.log(products)
      })  

    }


    static #exit(){
      process.exit()
    }

    
}


App.main()