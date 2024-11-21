import jwt from "jsonwebtoken";

export function generateTokens(payload: any) {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '5m' });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET_KEY, { expiresIn: '1h' });

  return {
    accessToken,
    refreshToken,
  }
}

export function decodeToken(token: string) {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY)
  } catch (error) {
    return createError({
      statusCode: 403,
      message: 'Невалидный токен'
    })
  }
}