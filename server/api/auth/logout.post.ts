import { deleteCookie, H3Event } from "h3";

// TODO
export default defineEventHandler(async (event: H3Event) => {
  deleteCookie(event, 'accessToken');
  deleteCookie(event, 'refreshToken');
  return {}
  // setCookie(event, 'accessToken', '', {
  //   maxAge: -1
  // });
  // setCookie(event, 'refreshToken', '', {
  //   maxAge: -1
  // });
})