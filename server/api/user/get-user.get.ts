import authMiddleware from '~/server/serverMiddleware/auth'
import { userDto } from "~/server/dto/user.dto";

export default defineEventHandler(async (event) => {
  const currentUser = await authMiddleware(event)
  return userDto(currentUser)
})