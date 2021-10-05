const products = require('../data/products.json');
const {v4:   uuid} = require('uuid');

function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(products)
    })
}
function findOne(id){
    var arr = [];
    return new Promise((resolve, reject) => {
        products.forEach(element => {
            if(element.id===id){
                arr.push(element);
            }
        });
        resolve(arr)
    });
}
function createProduct(product){
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct)
    });
}
module.exports = {
    findAll,
    findOne,
    createProduct
}