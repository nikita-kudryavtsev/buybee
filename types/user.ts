export interface IPublicUserData {
  firstName: string;
  lastName: string;
  login: string;
  bio?: string;
}

export interface IPrivateUserData extends IPublicUserData {
  id: string
  password: string
}