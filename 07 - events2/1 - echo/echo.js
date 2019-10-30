'use strict'

const net = require('net')

net.createServer(socket => {
  console.log(`new connection from ${socket.remoteAddress}:${socket.remotePort}`)
  socket.on('data', data => {
    console.log(`data: ${data.toString()}`)
    socket.write(data.toString())
  }).on('close', () => {
    console.log(`closed connection from ${socket.remoteAddress}:${socket.remotePort}`)
  })
}).listen(8888)
