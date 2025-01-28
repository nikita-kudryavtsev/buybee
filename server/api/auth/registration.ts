import { PrismaClient } from '@prisma/client'
import { hash } from "bcrypt"
import { userRegisterSchema } from "~/validation-schemas/user/registerSchema";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { firstName, lastName, login, password } = await readBody(event)

  const isValid = userRegisterSchema.safeParse({ firstName, lastName, login, password })

  if (!isValid.success) {
    throw createError({
      statusCode: 400,
      message: 'Ошибка валидации формы!'
    })
  }

  const userExists = await prisma.user.findFirst({
    where: { login }
  })

  if (userExists) {
    throw createError({
      statusCode: 400,
      statusMessage: `Пользователь с логином ${login} уже существует в системе!`
    })
  }

  const hashPassword = await hash(password, 10)

  await prisma.user.create({
    data: {
      login,
      password: hashPassword,
      lastName,
      firstName
    },
  })

  setResponseStatus(event, 201)

  return { message: `Пользователь ${login} создан!` }
})
