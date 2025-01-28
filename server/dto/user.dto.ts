import { IPrivateUserData } from "~/types/user";

export const userDto =  (user: IPrivateUserData) => {
  const { id, password, ...publicData } = user
  return publicData
}