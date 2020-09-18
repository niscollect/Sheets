/**
const http=require('http');
const fs= require('fs');
const express=require('express');


const hostname= '127.0.0.1';
const port= 3000; 
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const showcase= fs.readFileSync('./showcase.html')
const register = fs.readFileSync('./register.html')


const server=http.createServer((req,res)=>{
    url=req.url;
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){    res.end(home);}
    else if(url == '/register'){  res.end(register);}
    else if(url == '/about'){   res.end(about);}
    else if(url == '/showcase'){  res.end(showcase);}
    if(url == '/contact'){    res.end(contact);}

});

server.listen(port, hostname, () => {
    console.log(`Server runnung at http://${hostname}:${port}/`);
});

**/



const express=require('express');
const app=express();
const port=5500; 


app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
});
app.get("/home", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
});
app.get("/about", (req,res)=>{
    res.sendFile(__dirname + '/about.html')
});
app.get("/contact", (req,res)=>{
    res.sendFile(__dirname + '/contact.html')
});
app.get("/showcase", (req,res)=>{
    res.sendFile(__dirname + '/showcase.html')
});
app.get("/register", (req,res)=>{
    res.sendFile(__dirname + '/register.html')
});
app.listen(port, ()=> {
    console.log(`the server is running ON port ${port}`)
})
