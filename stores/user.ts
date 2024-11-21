import type { IUser } from "~/types/user";

export const useUserStore = defineStore('user', () => {
  const userData = ref<IUser | null>(null);

  const setUserData = (payload: IUser | null) => {
    userData.value = payload;
  }
  return {
    userData,
    setUserData
  }
});