import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/users', async() => {
  const users = await knex('users').insert({
      id: crypto.randomUUID(),
      name: 'test2',
      email: 'test2@test.com',
      password: '1234'
  }).returning('*')

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
