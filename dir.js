const path = require('path')
const fs = require('fs')

if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if(err)throw err;
        console.log('Directory created')
    })
}

process.on('uncaughtException', err => {
    console.log(`Error:${err}`)
    process.exit(1);
})