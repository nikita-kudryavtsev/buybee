import { decodeToken, generateTokens } from "~/server/api/utils/token";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, 'refreshToken');

  if (!refreshToken) {
    throw createError({
      message: 'Refresh token not set.',
      statusCode: 401
    })
  }

  const { userId } = decodeToken(refreshToken);

  if (!userId) {
    throw createError({
      statusCode: 401,
      message: 'Ошибка при обновлении токена'
    })
  }
  console.log('!!')
  const { accessToken: newAccessToken, refreshToken: newRefreshToken } = generateTokens({ userId })

  setCookie(event, 'accessToken', newAccessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 15 * 10, // 15 минут
    path: '/',
  })

  setCookie(event, 'refreshToken', newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 15 * 10, // 15 минут
    path: '/',
  })
})