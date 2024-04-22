"use strict"
import express from 'express';

const port=5000;
const app= express();
let cards_list=[];

app.use(express.json())

app.get("/hello/:name",(req,res)=>{
  
}
);

app.get("/hello/:name",(req, res)=>{

});

app.post(`/cards`,(req,res)=>{
  console.log(req.body)
  cards_list.push(req.body)
res.status(200).send("Card added succesfuly")
});
app.listen(port,()=>{
    console.log(`Running on  $ {port}`)
});