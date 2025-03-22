const { error } = require('console');
const express = require('express')
const app = express();
const PORT = process.env.PORT||3000;
const path = require('path')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'./public')))
app.use('/employees',express.static(path.join(__dirname,'./public')))

app.use('/employees',require('./routes/api/employees'))


app.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','index.html'));
})
app.get('/new(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','new.html'));
})


app.get('/old(.html)?',(req,res)=>{
    res.redirect(301,'new.html')
})


app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'html','404.html'));
})


app.listen(PORT,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log(`Server running on :${PORT}`)
    }
})


