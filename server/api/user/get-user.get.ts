import authMiddleware from '~/server/serverMiddleware/auth'

export default defineEventHandler((event) => {
  return authMiddleware(event)
})