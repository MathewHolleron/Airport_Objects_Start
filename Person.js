class Person {
    constructor(name, Bags = []){
    
    this.name = name;
    this.bags = Bags;
    
    }
    addBag(bag){
        this.bags.push(bag)}
     
    

}
 



//Export the Module
module.exports = Person;