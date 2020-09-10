const fastify = require('fastify')();

// Home
fastify.get('/', (request, reply) => {
    reply.send("Use /g to redirect to google.com")
  });

//Redirecting
fastify.get('/g', (request, reply) => {
  reply.redirect("https://google.com")
});
  
  
  // Server Running
  fastify.listen(80, (err) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  });