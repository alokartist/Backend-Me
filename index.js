import express from 'express'
const app=express()
import logger from "./logger.js";
import morgan from "morgan";


const port=3000
app.use(express.json())

const morganFormat = ":method :url :status :response-time ms";


app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );



let product=[]
let nextid=1

//data entry karna hai agr product ka to (postman me block me ja kar kr sakte h)
app.post("/data",(req,res)=>{
    const {name,price} = req.body
    const newproduct={id:nextid++,name,price}
    product.push(newproduct)
    res.status(201).send(newproduct)
})

//get all the array list by using the "/data" jo ki hum GET me ja kar use kare ge 
app.get("/data",(req,res)=>{
    res.status(200).send(product)
})

//yeh agr kisi bhi product ko akele akele fetch karna h agr to hum /data/uska-id(numeric) enter kare ge to spefic ka show kare ga
app.get("/data/:id",(req,res)=>{
    const productone = product.find(t => t.id===parseInt(req.params.id))
    if (!productone) {
        return res.status(404).send("product not found")
    }
    else{
        res.status(200).send(productone)
    }
})

//agr koi update karta h product ko tb hum log iska use kare ge
app.put("/data/:id",(req,res)=>{
    const updateproduct = product.find(t => t.id===parseInt(req.params.id))
    if (!updateproduct) {
        return res.status(404).send("product not found")
    }
    const {name,price}=req.body
    updateproduct.name=name
    updateproduct.price=price
    res.status(200).send(updateproduct)
})

//delete karna hoga koi product ko tb kaise kare ge 
app.delete("/data/:id",(req,res)=>{
    const index = product.findIndex(t => t.id===parseInt(req.params.id))
    if (index=== -1) {
        return res.status(404).send("product not found")
    }
        product.splice(index,1)
        res.status(204).send("product deleted")
})


//yeh port run kr raha h server ko contineously 
app.listen(port,() =>{
    console.log(`server is running at port: ${port}... `)
} )