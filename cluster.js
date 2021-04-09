
const cluster = require('cluster'); //group of node instance called cluster master and worker instances
const cpus = require('os').cpus();
const express = require('express');
const app = express();

if (cluster.isMaster) {
    console.log("This is the master process :", process.pid)
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork()
    }
    cluster.on('exit',() => {
        console.log(`Worker ${process.pid} died !`)
    })
} else {
    console.log(`Started Worker at ${process.pid}`)
    app.listen(3000, () => {
        console.log(`This is the worker process ${process.pid}`)
    })

    app.get('/',(req, res) =>{
        res.json({
            msg:`This is the worker process ${process.pid}`
        })
        console.log(process.pid)
    })
}