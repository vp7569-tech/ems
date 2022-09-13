const express= require('express');

const app=express();

app.get("/vicky",(req,res)=>{
    res.send("Hello Developers");
});

app.listen(7000,()=>{
    console.log("Server is listening on 7000 ");
})