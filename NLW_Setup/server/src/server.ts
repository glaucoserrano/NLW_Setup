import Fastify from 'fastify'
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()


app.register(cors)

app.get('/', async () =>{
  const habits = await prisma.habit.findMany({
    where:{

    }
  })
  return 'Hello NLW'
})

app.listen({
  port: 3333
}).then(() =>{
  console.log('HTTP Server running')
})