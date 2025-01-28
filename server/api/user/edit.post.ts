import prisma from "~/lib/utils/prisma";
import { decodeToken } from "~/server/utils/tokens";
import authMiddleware from "~/server/serverMiddleware/auth";

export default defineEventHandler(async (event) => {
  await authMiddleware(event)

  const { firstName, lastName, login, bio, roleId } = await readBody(event)

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
        login,
        bio,
        roleId,
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