const http = require("node:http");
const fs = require('node:fs')

const server = http.createServer((req, res)=>{
    // const name = "Vishwas"

    // res.writeHead(200, {"Content-Type": "text/html"});

    // let html = fs.readFileSync("./index.html", "utf-8")
    // html =  html.replace("{{name}}", name)

    // // fs.createReadStream('./index.html').pipe(res)

    // res.end(html)

    // res.end(req.url)
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Home page")
    } else if (req.url === "/about") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("About page");
   } else if (req.url === "/api") {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({firstName: "Bruce", lastName:"Wayne"}));
    }else{
    res.writeHead(404);
    res.end('Page not found');
    }
});


server.listen(3000, ()=>{
    console.log("Server running at 3000")
})

// const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);


// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));
// const superHero = require("./super-hero")

// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName())


// const math = require('./math')
// console.log(math.add(2,3));
// console.log(math.subtract(5,3))


// const { EventEmitter } = require('events')
// const { readFile, readFileSync } = require('fs')
// const myModule = require('./my-module')
// const express = require('express')
// //NOTE: everytime there are methods that ends with Sync it usually means Blocking
// // import { EventEmitter } from 'events';
// // import { EventEmitter } from 'stream';

// // console.log(global.luckyNum);

// // process.on('exit', () => {
// //     console.log('hello world')
// // })

// // const eventEmitter = new EventEmitter();

// // eventEmitter.on('lunch', () => {
// //     console.log('yun')
// // })

// // eventEmitter.emit('lunch');

// // const txt = readFileSync('./hello.txt', 'utf-8');
// // console.log(txt);
// // console.log('do this asap');
// // console.log(myModule);

// const app = express();


// // app.get('/', (request, response) => {
// //     readFile('./home.html', 'utf-8', (err, html) => {
// //         if (err) {
// //             response.status(500).send('sorry')
// //         }

// //         response.send(html)
// //     })
// // })
 
// //best practices
// app.get('/', async (request, response) => {
//     response.send(await readFile('./home.html', 'utf-8'))

// })

// app.listen(process.env.PORT || 3000, () => { console.log(`App available on http://localhost:3000`) })



// console.log(add(2,1))