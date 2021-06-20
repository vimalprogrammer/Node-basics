//const { add } = require("./calc");

/*
let http=require('http')

http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("Vimal Bhaiya master")
    res.end()
}).listen(8080)
*/
/*
let calc=require('./calc')
let a=8
let b=6

res=calc.add(a,b)
console.log("The result "+res);
*/
/*
var fs = require('fs')

fs.appendFile('./calc.js','console.log("done")',function(err,data)
{
    console.log(" data saved")
})*/
/*
var fs=require('fs');
fs.unlink('calc1.js',function(err)
{
    console.log("deleted")
})*/

const express=require('express')

const app=express()

app.get('/',function(req,res)
{
    res.send("Heloo thala")
})

app.get('/vimal',function(req,res)
{
    const id=req.query.id
    res.send("vimal da mapla")
})

app.get('/vimal/:id',function(req,res)
{
    const id = req.params.id
    res.send("vimal nee oru "+id)
})





app.listen(9000,function(req,res)
{
    console.log("Running..")
})









