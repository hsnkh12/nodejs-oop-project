const Product = require('./generic')

class Tshirt extends Product{

    #size = 'S'
    #gender = 'M'
    #category = 'T-shirt'

    constructor(title, color='#000000'){
        super(title)
        this.color = color
    }

    describe(){
        return this.id + ' | ' + this.#category + ' | ' + this.title + ' | ' + this.#describeDetails()
    }

    #describeDetails(){
        return  this.gender+ ' | ' +  this.size + ' | ' + this.color + ' | ' + this.price
    }

    set size(value) {
        if (value=='S' || value=='M' || value=='L'){
            this.#size = value
        }
        else{
            // Exception
        }
    }

    get size(){
        switch (this.#size){
            case 'M':   return 'Medium';
            case 'L':   return 'Large';
            default: return 'Small'
        }
    }

    set gender(value){
        if (value=='M' || value=='F'){
            this.#gender = value
        }
        else{
            // Exception
        }
    }

    get gender(){
        switch (this.#gender){
            case 'F': return 'Female';
            default: return 'M'
        }
    }

}

module.exports = Tshirt

//let t = new Tshirt('T-shirt')

//t.create()
// Product.fetchAll( products => {
//     console.log(products)
// })


