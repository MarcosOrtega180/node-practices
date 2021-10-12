const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hi, welcome to your connection!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})

/*SIGKILL is the signal that tells a process to immediately terminate, and would ideally act like process.exit().

SIGTERM is the signal that tells a process to gracefully terminate. It is the signal that's sent from process managers
like upstart or supervisord and many others.*/

process.kill(process.pid, 'SIGTERM')
