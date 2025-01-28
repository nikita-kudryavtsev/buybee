import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { generateTokens } from "~/server/utils/tokens";
import { userLoginSchema } from "~/validation-schemas/user/loginSchema";

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const { login, password } = await readBody(event)

  const isValid = userLoginSchema.safeParse({ login, password })

  if (!isValid.success) {
    throw createError({
      statusCode: 400,
      message: 'Ошибка валидации формы'
    })
  }

  const user = await prisma.user.findFirst({
    where: {
      login
    }
  })

  if (!user) {
    throw createError({
      statusCode: 403,
      message: `Пользователя ${login} не существует в системе!`
    })
  }

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    throw createError({
      statusCode: 403,
      message: 'Неверный пароль!'
    })
  }

  const { accessToken, refreshToken } = generateTokens({ userId: user.id })

  setCookie(event, 'accessToken', accessToken,{
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  })

  setCookie(event, 'refreshToken', refreshToken,{
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  })

  return { success: true }
})