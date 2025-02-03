export interface IPublicUserData {
  firstName: string;
  lastName: string;
  login: string;
  bio?: string;
  profilePhoto: string;
}

export interface IPrivateUserData extends IPublicUserData {
  id: string
  password: string
}