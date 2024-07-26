import fastify from 'fastify'

const app = fastify()

app.get('/users', () => {
    return 'Welcome!'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})