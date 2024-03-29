'use strict'

const net = require('net')
const client = net.createConnection({ port: 8888 })

const readline = require('readline')
const input = readline.createInterface(process.stdin)

client.on('data', data => {
  console.log(data.toString())
}).on('close', () => {
  console.log(':: DONE ::')
  process.exit()
})

input.on('line', line => {
  if (line == '#exit') {
    client.destroy()
  } else {
    client.write(line)
  }
}).on('close', () => {
  client.destroy()
})
