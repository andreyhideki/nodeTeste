//node raiz
//import { createServer } from 'node:http'

//const server = createServer((req, res) => {
//    res.write('hello world');
//
//    return res.end();
//})

//server.listen(3000);

//fastify
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory'
import { Usuario } from './model/Usuario'
import { randomUUID } from 'crypto'

const server = fastify()

const database = new DatabaseMemory()

server.get('/', () => {
    return 'hello world'
})

server.get('/hello', () => {
    return 'HELLO'
})

server.get('/node', () => {
    return 'NODE NODE'
})

server.post('/usuarios', (req, res) => {
    const { nome, sobrenome, email } = req.body

    const usuario = new Usuario(randomUUID(), nome, sobrenome, email)

    database.create(usuario)

    return res.status(201).send()
})

server.get('/usuarios', () => {
  const usuarios = database.findAll()

  return usuarios
})

server.put('/usuarios/:id', () => {
    return 'PUT USUARIOS'	  
})

server.delete('/usuarios/:id', () => {
    return 'DELETE USUARIOS'	  
})


server.listen({
    port: 3333
})
.then(() => 
    console.log('HTTP Server running on http://localhost:3333)')
)

