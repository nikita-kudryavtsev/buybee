import { PrismaClient } from '@prisma/client'
import { hash } from "bcrypt"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { login, password } = await readBody(event)


  console.log({ login, password})
  const userExists = await prisma.user.findFirst({
    where: {
      login
    }
  })

  if (userExists) {
    throw createError({
      statusCode: 400,
      statusMessage: `Пользователь с логином ${login} уже существует в системе`
    })
  }

  const hashPassword = await hash(password, 10)

  await prisma.user.create({
    data: {
      login,
      password: hashPassword,
    },
  })

  setResponseStatus(event, 201)

  return { message: `Пользователь ${login} создан` }
})
