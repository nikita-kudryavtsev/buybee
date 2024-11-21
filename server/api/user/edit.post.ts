import prisma from "~/lib/prisma";
import { decodeToken } from "~/server/api/utils/token";

export default defineEventHandler(async (event) => {
  const { firstName, lastName, login } = await readBody(event)
  console.log('TITA')
  // const token = getHeader(event, 'Authorization')?.split(' ')[1]
  const refreshToken = getCookie(event, 'refreshToken');

  if (!refreshToken) {
    throw createError({
      statusCode: 403,
      statusMessage: `Пользователь не авторизован`
    })
  }

  const { userId } = await decodeToken(refreshToken)

  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        login
      }
    })
  } catch (error) {
    console.error(error)

    createError({
      statusCode: 500,
      statusMessage: 'Неизвестная ошибка'
    })
  }

  setResponseStatus(event, 201)

  return { message: `Данные пользователя обновлены` }
})