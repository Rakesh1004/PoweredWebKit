const Product = require('../models/productmodel')

// @desc    Gets All Products
// @route   /api/products 
async function getProducts(req,res) {
    try{
        const products = await Product.findAll()
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products))
    } catch (err) {
        console.log(err) 
    }
}
// @desc    Gets Specific Product
// @route   /api/products/id
async function getProduct(req,res,id) {
    try{
        const products = await Product.findOne(id)
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products))
    } catch (err) {
        console.log(err) 
    }
}
// @desc    Gets All Products
// @route   /api/products 
async function pushProduct(req,res) {
    try{
        const newProduct = {
            name: 'Hp Ryzen 7',
            description: 'An AMD Ryzen Driven HP Laptop with enhanced features',
            price: '$500'
        }
        const products = await Product.createProduct(newProduct)
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products))
    } catch (err) {
        console.log(err) 
    }
}
module.exports = {
    getProducts,
    getProduct,
    pushProduct
} 