import jwt from "jsonwebtoken";
import prisma from "~/lib/prisma";
import { H3Event } from "h3";

export default async function (event: H3Event) {
  const accessToken = getCookie(event, 'accessToken')
  const refreshToken = getCookie(event, 'refreshToken')

  if (!accessToken) {
    throw createError({ statusCode: 401, statusMessage: 'No token provided' });
  }

  try {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY);

    const { userId } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);

    return prisma.user.findFirst({
      where: { id: userId }
    })
  } catch (error) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' });
  }
}