import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const { login, password } = await readBody(event)

  const user = await prisma.user.findFirst({
    where: {
      login
    }
  })
  console.log({ user })
  if (!user) {
    throw createError({
      statusCode: 403,
      statusMessage: `Пользователь ${login} не существует`
    })
  }

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Неверный пароль'
    })
  }

  // const { accessToken, refreshToken } = await generateTokensPost(user)
  const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '1m' });
  const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET_KEY, { expiresIn: '1h' });

  // todo: dto для userData
  return { accessToken, refreshToken, userData: user }
})