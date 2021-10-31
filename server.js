const express = require("express")
const app = express()
const port = 3010
const db = require("./app/models")

app.use([
    express.json(),
    express.urlencoded({
        extended : true,
    }),
])

require('./app/router')(app);

db
    .sequelize.sync()
    .then(()=>{
        app.listen(port, () => {
            console.log(`Server started in :  + ${port}`)
        })
    })
    .catch((err) => {
        console.log(`something error: ${err.message}`)
    })



// app.get('/', (req,res) => {
//     return res.send("Hello World")
// })

// // GET
// app.get("/post",(req,res) => {
//     return res.send("hello world with method GET");
// })

// // POST
// app.post("/post",(req,res) => {
//     return res.send("hello world with method POST");
// })

// // PUT
// app.put("/path-put",(req,res) => {
//     return res.send("hello world with method PUT");
// })

// // DELETE
// app.delete("/path-delete",(req,res) => {
//     return res.send("hello world with method DELETE");
// })

// // Dynamic Routing {params}
// // app.get("/product/:namaProduct",(req,res) => {
// //     const namaProduct = req.params.namaProduct
// //     return res.send(`Nama product : ${namaProduct}`)
// // })

// // Dynamic Routing {query}
// app.get("/product",(req,res) => {
//     const warnaProduct = req.query.warna;
//     return res.send(`Warna product : ${warnaProduct}`)
// })

// // Dynamic Routing {params + query}
// app.get("/product/:namaProduct",(req,res) => {
//     const warnaProduct = req.query.warna
//     const namaProduct = req.params.namaProduct
//     return res.send(`Nama product : ${namaProduct}, Warna Product: ${warnaProduct}`)
// })


// app.listen(port, () => {
//     console.log(`Server started in :  + ${port}`)
// })