const http = require('http');
const dotenv = require('dotenv');
const { getProducts, getProduct, pushProduct } = require('./controllers/productControllers')
dotenv.config();
const PORT = process.env.PORT
const server = http.createServer((req,res)=>{
    if(req.url=== '/api/products'){
            getProducts(req,res)
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method==='GET'){
        const id = req.url.split('/')[3]
        getProduct(req,res,id)
    } else if(req.url === '/api/products' && req.method==='POST') {
        pushProduct(req,res)
    }
    else {
        res.writeHead(404,{'Content-Type' :' application/json'})
        res.end(JSON.stringify({error:"404"}))
    }
})
server.listen(PORT,()=> console.log(`Server running at  http://localhost:${PORT}`))