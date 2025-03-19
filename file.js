const path = require('path');
const fsPromise = require('fs').promises;
// fs.readFile(path.join(__dirname, 'Files', 'read.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// fs.writeFile(path.join(__dirname, 'Files', 'write.txt'), 'I am studying in SRIT', (err) => {
//     if (err) throw err;
//     console.log('Write completed');
// fs.appendFile(path.join(__dirname, 'Files', 'write.txt'), '\n I am from virudhachalan', (err) => {
//     if (err) throw err;
//     console.log('Append completed');

//     });
// });

const fileOpes = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'Files', 'read.txt'), 'utf8')
        console.log(data);

        await fsPromise.writeFile(path.join(__dirname, 'Files', 'write.txt'), 'I am studying in SRIT')
        console.log('Write completed');

        await fsPromise.appendFile(path.join(__dirname, 'Files', 'write.txt'), '\n I am from virudhachalan')
        console.log('Append completed');

        await fsPromise.rename(path.join(__dirname, 'Files', 'write.txt'), path.join(__dirname, 'Files', 'Written.txt'))
        console.log('Renamed');

        await fsPromise.unlink(path.join(__dirname,'Files','Written.txt'))
        console.log('File Deleted')


    } catch (error) {
        console.log(error);
    }
}
fileOpes();
// process.on('uncaughtException', err => {
//     console.log(`Error:${err}`)
//     process.exit(1);
// })
// const os = require('os')
// const path = require('path')
// console.log(__dirname)
// console.log(__filename)
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))
// const math = require('./math')
//  console.log(math.add(4,2)) 
//  console.log(math.sub(4,2))
//  console.log(math.mul(4,2))
//  console.log(math.div(4,2))

